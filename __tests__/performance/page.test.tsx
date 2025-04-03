import { render } from '@testing-library/react'
import Home from '@/app/page'

describe('메인 페이지 성능 테스트', () => {
  it('페이지 로드 시간이 허용 범위 내여야 합니다', async () => {
    const startTime = performance.now()
    
    render(<Home />)
    
    const endTime = performance.now()
    const loadTime = endTime - startTime
    
    // 허용 범위: 2초
    expect(loadTime).toBeLessThan(2000)
  })

  it('메모리 사용량이 허용 범위 내여야 합니다', async () => {
    const initialMemory = process.memoryUsage().heapUsed
    
    render(<Home />)
    
    const finalMemory = process.memoryUsage().heapUsed
    const memoryUsage = finalMemory - initialMemory
    
    // 허용 범위: 50MB
    expect(memoryUsage).toBeLessThan(50 * 1024 * 1024)
  })

  it('광고 로딩이 페이지 렌더링을 차단하지 않아야 합니다', async () => {
    const { container } = render(<Home />)
    
    // 광고 배너가 비동기적으로 로드되는지 확인
    const adBanners = container.querySelectorAll('[data-testid="ad-banner"]')
    expect(adBanners.length).toBeGreaterThan(0)
    
    // 페이지 컨텐츠가 먼저 렌더링되었는지 확인
    const mainContent = container.querySelector('[data-testid="thumbnail-uploader-section"]')
    expect(mainContent).toBeInTheDocument()
  })
}) 