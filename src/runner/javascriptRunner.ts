import type { Task } from '../types/task'

type RunResult = {
  success: boolean
  status:'success'| 'test-failed' | 'execution-console.error'
  
}

export function runJavaScript(code: string, task: Task): RunResult {
  const products = [
    { name: 'Keyboard', price: 45 },
    { name: 'Mouse', price: 25 },
    { name: 'Monitor', price: 180 },
    { name: 'Headphones', price: 60 },
  ]

  try {
    const executeCode = new Function(
      'products',
      `${code}; return result`
    )

    const userResult = executeCode(products)

   

    const isCorrect =
      JSON.stringify(userResult) === JSON.stringify(task.expectedResult)

    if (isCorrect) {
      return {
        success: true,
        status: 'success',
      }
    }

    return {
      success: false,
      status: 'test-failed',
    }
  } catch {
    return {
      success: false,
      status: 'execution-console.error',
    }
  }
}
