type ErrorSeverity = 'low' | 'medium' | 'high'

interface ErrorLog {
  message: string
  severity: ErrorSeverity
  timestamp: Date
  component: string
  details?: any
}

class ErrorMonitor {
  private static instance: ErrorMonitor
  private errorLogs: ErrorLog[] = []
  private readonly MAX_LOGS = 100

  private constructor() {}

  static getInstance(): ErrorMonitor {
    if (!ErrorMonitor.instance) {
      ErrorMonitor.instance = new ErrorMonitor()
    }
    return ErrorMonitor.instance
  }

  logError(message: string, severity: ErrorSeverity, component: string, details?: any) {
    const errorLog: ErrorLog = {
      message,
      severity,
      timestamp: new Date(),
      component,
      details
    }

    this.errorLogs.push(errorLog)

    // 로그 개수 제한
    if (this.errorLogs.length > this.MAX_LOGS) {
      this.errorLogs.shift()
    }

    // 심각한 에러인 경우 콘솔에 출력
    if (severity === 'high') {
      console.error(`[${component}] ${message}`, details)
    }
  }

  getErrorLogs(): ErrorLog[] {
    return [...this.errorLogs]
  }

  clearLogs() {
    this.errorLogs = []
  }

  hasHighSeverityErrors(): boolean {
    return this.errorLogs.some(log => log.severity === 'high')
  }
}

export const errorMonitor = {
  logError: (message: string, severity: 'low' | 'medium' | 'high' = 'low', component?: string) => {
    // 개발 환경에서는 상세 로깅
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[${component || 'Unknown'}] ${message} (${severity})`)
    }
    
    // 프로덕션 환경에서는 심각한 에러만 로깅
    if (process.env.NODE_ENV === 'production' && severity === 'high') {
      console.error(`[${component || 'Unknown'}] ${message}`)
    }
  }
}

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