import { render, screen, fireEvent } from '@testing-library/react'
import { ThumbnailGuide } from '@/components/thumbnail-guide'

// 모킹: errorMonitor
jest.mock('@/lib/error-monitoring', () => ({
  errorMonitor: {
    logError: jest.fn()
  }
}))

describe('ThumbnailGuide 컴포넌트', () => {
  beforeEach(() => {
    // DOM 요소 모킹
    document.body.innerHTML = `
      <div data-testid="thumbnail-uploader"></div>
      <div data-testid="device-preview"></div>
      <div data-testid="readability-analysis"></div>
    `
  })

  it('기본 탭이 렌더링되어야 합니다', () => {
    render(<ThumbnailGuide />)
    
    expect(screen.getByText('사용법 안내')).toBeInTheDocument()
    expect(screen.getByText('제작 팁')).toBeInTheDocument()
    expect(screen.getByText('중요성')).toBeInTheDocument()
  })

  it('탭 전환이 정상적으로 동작해야 합니다', () => {
    render(<ThumbnailGuide />)
    
    const tipsTab = screen.getByText('제작 팁')
    fireEvent.click(tipsTab)
    
    // 제작 팁 컨텐츠가 표시되어야 함
    expect(screen.getByText(/클릭률 높은 썸네일/)).toBeInTheDocument()
  })

  it('기존 기능이 없을 경우 에러 처리가 되어야 합니다', () => {
    // DOM 요소 제거
    document.body.innerHTML = ''
    
    render(<ThumbnailGuide />)
    
    // 컴포넌트가 렌더링되지 않아야 함
    expect(screen.queryByText('사용법 안내')).not.toBeInTheDocument()
  })

  it('renders checklist items correctly', () => {
    render(<ThumbnailGuide />)
    
    // 체크리스트 항목들이 모두 렌더링되는지 확인
    expect(screen.getByText('텍스트가 너무 작지는 않나요?')).toBeInTheDocument()
    expect(screen.getByText('너무 많은 텍스트로 복잡하지는 않나요?')).toBeInTheDocument()
    expect(screen.getByText('배경과 텍스트 색상 대비는 충분한가요?')).toBeInTheDocument()
    expect(screen.getByText('인물 표정이 잘 보이나요?')).toBeInTheDocument()
  })

  it('has working link to tips page', () => {
    render(<ThumbnailGuide />)
    
    const tipsLink = screen.getByText('썸네일 제작 가이드 더 보기')
    expect(tipsLink).toHaveAttribute('href', '/tips')
  })
}) 