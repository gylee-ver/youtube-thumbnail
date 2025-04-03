import { render, screen, waitFor } from '@testing-library/react'
import Home from '@/app/page'

// 모킹: 광고 컴포넌트
jest.mock('@/components/ad-banner', () => ({
  AdBanner: () => <div data-testid="ad-banner">광고 배너</div>
}))

// 모킹: 기존 컴포넌트들
jest.mock('@/components/thumbnail-uploader', () => ({
  ThumbnailUploader: () => <div data-testid="thumbnail-uploader">썸네일 업로더</div>
}))

jest.mock('@/components/device-preview', () => ({
  DevicePreview: () => <div data-testid="device-preview">디바이스 프리뷰</div>
}))

jest.mock('@/components/readability-analysis', () => ({
  ReadabilityAnalysis: () => <div data-testid="readability-analysis">가독성 분석</div>
}))

describe('메인 페이지 통합 테스트', () => {
  it('모든 필수 컴포넌트가 렌더링되어야 합니다', async () => {
    render(<Home />)
    
    // 기존 기능 확인
    await waitFor(() => {
      expect(screen.getByTestId('thumbnail-uploader')).toBeInTheDocument()
      expect(screen.getByTestId('device-preview')).toBeInTheDocument()
      expect(screen.getByTestId('readability-analysis')).toBeInTheDocument()
    })

    // 광고 배너 확인
    expect(screen.getAllByTestId('ad-banner')).toHaveLength(3) // top, side, bottom
  })

  it('새로운 가이드 섹션이 정상적으로 렌더링되어야 합니다', async () => {
    render(<Home />)
    
    await waitFor(() => {
      expect(screen.getByTestId('thumbnail-guide-section')).toBeInTheDocument()
    })
  })

  it('기존 기능이 없을 경우 가이드 섹션이 숨겨져야 합니다', async () => {
    // DOM 요소 제거
    document.body.innerHTML = ''
    
    render(<Home />)
    
    await waitFor(() => {
      expect(screen.queryByTestId('thumbnail-guide-section')).not.toBeInTheDocument()
    })
  })
}) 