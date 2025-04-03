type ErrorSeverity = 'low' | 'medium' | 'high'
type ErrorContext = string
type ErrorData = {
  message: string
  severity: ErrorSeverity
  context: ErrorContext
  timestamp: Date
  details?: unknown
}

export class ErrorMonitor {
  private static instance: ErrorMonitor
  private errors: ErrorData[] = []

  private constructor() {}

  public static getInstance(): ErrorMonitor {
    if (!ErrorMonitor.instance) {
      ErrorMonitor.instance = new ErrorMonitor()
    }
    return ErrorMonitor.instance
  }

  public logError(message: string, severity: ErrorSeverity, context: ErrorContext, details?: unknown): void {
    const errorData: ErrorData = {
      message,
      severity,
      context,
      timestamp: new Date(),
      details
    }
    this.errors.push(errorData)
    console.error(`[${severity.toUpperCase()}] ${context}: ${message}`, details || '')
  }

  public getErrors(): ErrorData[] {
    return [...this.errors]
  }
}

export const errorMonitor = ErrorMonitor.getInstance()

// 에러 발생 시 롤백이 필요한지 판단하는 함수
export const shouldRollback = (error: Error, component: string): boolean => {
  // 심각한 에러인 경우 롤백
  if (error.message.includes('기존 기능이 로드되지 않았습니다')) {
    errorMonitor.logError(
      '기존 기능 로드 실패',
      'high',
      component,
      error
    )
    return true
  }

  // 일반적인 에러는 롤백하지 않음
  errorMonitor.logError(
    error.message,
    'medium',
    component,
    error
  )
  return false
} 