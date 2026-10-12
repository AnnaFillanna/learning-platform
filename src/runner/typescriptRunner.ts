import { prepareCheck } from "../generator/learningClient";
import type { CheckResult } from "../types/learnerTask";

export function runIsolatedScript(script: string, timeoutMs = 2000): Promise<CheckResult> {
  return new Promise((resolve, reject) => {
    const frame = document.createElement("iframe");
    const nonce = crypto.randomUUID();
    frame.hidden = true;
    frame.setAttribute("sandbox", "allow-scripts");
    frame.setAttribute("referrerpolicy", "no-referrer");
    let settled = false;
    let started = false;
    const finish = (result?: CheckResult) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      window.removeEventListener("message", receive);
      frame.remove();
      if (result) resolve(result);
      else reject(new Error("The browser execution environment is unavailable."));
    };
    const receive = (event: MessageEvent) => {
      if (event.source !== frame.contentWindow || event.data?.nonce !== nonce) return;
      if (event.data.ready) { started = true; return; }
      if (event.data.unavailable) { finish(); return; }
      const result = event.data.result;
      if (!result || !["success", "test-failed", "execution-error"].includes(result.status)) return;
      finish({ success: result.status === "success", status: result.status,
        ...(result.status === "execution-error" ? { error: { name: "RuntimeError", message: "A runtime check could not complete." } } : {}),
      });
    };
    const timer = window.setTimeout(() => finish(started ? {
      success: false, status: "execution-error", error: { name: "TimeoutError", message: "Runtime exceeded the time limit." },
    } : undefined), timeoutMs);
    window.addEventListener("message", receive);
    const workerCode = `(() => {
      const report = self.postMessage.bind(self);
      report({ nonce: ${JSON.stringify(nonce)}, ready: true });
      try { const result = (${script}); report({ nonce: ${JSON.stringify(nonce)}, result }); }
      catch { report({ nonce: ${JSON.stringify(nonce)}, result: { status: "execution-error" } }); }
    })();`;
    const encoded = JSON.stringify(workerCode).replaceAll("<", "\\u003c");
    frame.srcdoc = `<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval' blob:; worker-src blob:; connect-src 'none'; form-action 'none'; base-uri 'none'"><script>
      const nonce = ${JSON.stringify(nonce)};
      try {
        const url = URL.createObjectURL(new Blob([${encoded}], {type: 'text/javascript'}));
        const worker = new Worker(url);
        worker.onmessage = event => {
          if (event.data?.nonce !== nonce) return;
          parent.postMessage(event.data, '*');
          if (event.data.result) { worker.terminate(); URL.revokeObjectURL(url); }
        };
        worker.onerror = () => { parent.postMessage({nonce, unavailable: true}, '*'); worker.terminate(); URL.revokeObjectURL(url); };
      } catch { parent.postMessage({nonce, unavailable: true}, '*'); }
    </script>`;
    document.body.append(frame);
  });
}

export async function runTypeScript(code: string, taskId: string): Promise<CheckResult> {
  const prepared = await prepareCheck(taskId, code);
  if (!prepared.ok) return { success: false, status: "execution-error", error: { name: "TypeScript", message: prepared.diagnostics.join("\n") } };
  if (prepared.runtimeTestCount === 0) return { success: true, status: "success" };
  return runIsolatedScript(prepared.runtimeScript);
}
