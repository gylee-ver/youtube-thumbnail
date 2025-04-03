import '@testing-library/jest-dom'

// 전역 모킹 설정
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// 성능 측정을 위한 모킹
global.performance = {
  ...global.performance,
  now: () => Date.now(),
}

// 메모리 사용량 측정을 위한 모킹
global.process = {
  ...global.process,
  memoryUsage: () => ({
    heapUsed: 0,
    heapTotal: 0,
    external: 0,
  }),
} 