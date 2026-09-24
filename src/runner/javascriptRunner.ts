type RunResult = {
  success: boolean
  message: string
}

export function runJavaScript(code: string): RunResult {
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

    const expectedResult = products.filter(
      (product) => product.price < 50
    )

    const isCorrect =
      JSON.stringify(userResult) === JSON.stringify(expectedResult)

    if (isCorrect) {
      return {
        success: true,
        message: 'All checks passed ✓',
      }
    }

    return {
      success: false,
      message: 'Not quite yet. Check which products should be in result.',
    }
  } catch {
    return {
      success: false,
      message: 'Your code could not be executed yet. Check the syntax.',
    }
  }
}
