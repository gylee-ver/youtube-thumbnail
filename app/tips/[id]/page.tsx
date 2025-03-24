import Link from "next/link"
import Image from "next/image"

const tipPosts = [
  {
    id: 1,
    title: "유튜브 썸네일 최적 크기와 비율 가이드",
    excerpt:
      "유튜브에서 권장하는 썸네일 크기와 비율을 알아보고, 다양한 기기에서 최적의 모습을 보여주는 방법을 알아봅니다.",
    date: "2025-03-15",
    author: "썸뷰 관리자",
    content: `
      <h2>유튜브 썸네일의 기본 크기</h2>
      <p>유튜브는 썸네일 이미지에 대해 다음과 같은 권장 사항을 제시합니다:</p>
      <ul>
        <li>최적 해상도: 1280 x 720 픽셀</li>
        <li>최소 너비: 640 픽셀</li>
        <li>최대 파일 크기: 2MB</li>
        <li>권장 형식: JPG, GIF, PNG, BMP</li>
      </ul>

      <h2>16:9 비율의 중요성</h2>
      <p>유튜브는 16:9 비율을 표준으로 사용합니다. 이 비율을 따르면:</p>
      <ul>
        <li>모든 기기에서 일관된 표시</li>
        <li>비디오 플레이어와의 자연스러운 통합</li>
        <li>모바일에서의 최적화된 표시</li>
      </ul>

      <h2>다양한 기기에서의 표시</h2>
      <p>다양한 기기에서 썸네일이 잘 보이도록 하기 위한 팁:</p>
      <ul>
        <li>중요한 내용은 중앙에 배치</li>
        <li>작은 화면에서도 텍스트가 읽기 쉽게</li>
        <li>모서리 부분은 중요한 정보를 배치하지 않음</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "클릭률을 높이는 썸네일 디자인 5가지 팁",
    excerpt: "시청자의 시선을 사로잡고 클릭을 유도하는 효과적인 썸네일 디자인 전략을 소개합니다.",
    date: "2025-03-10",
    author: "썸뷰 관리자",
    content: `
      <h2>1. 강렬한 대비</h2>
      <p>시청자의 시선을 사로잡기 위해서는 강렬한 대비가 중요합니다:</p>
      <ul>
        <li>밝은 색상과 어두운 색상의 조화</li>
        <li>텍스트와 배경의 명확한 구분</li>
        <li>포인트 컬러의 적절한 사용</li>
      </ul>

      <h2>2. 감정을 자극하는 이미지</h2>
      <p>시청자의 감정을 자극하는 이미지를 선택하세요:</p>
      <ul>
        <li>표정이 선명한 얼굴</li>
        <li>강렬한 반응을 이끌어내는 장면</li>
        <li>호기심을 자극하는 미스터리한 요소</li>
      </ul>

      <h2>3. 명확한 메시지</h2>
      <p>썸네일을 보는 즉시 내용을 파악할 수 있게 하세요:</p>
      <ul>
        <li>간단하고 명확한 텍스트</li>
        <li>핵심 키워드 강조</li>
        <li>불필요한 요소 제거</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "모바일에서 더 돋보이는 썸네일 만들기",
    excerpt: "작은 화면에서도 주목도가 높은 썸네일을 만드는 방법과 모바일 환경에서의 최적화 전략을 알아봅니다.",
    date: "2025-03-05",
    author: "썸뷰 관리자",
    content: `
      <h2>모바일 최적화의 중요성</h2>
      <p>유튜브 시청자의 대부분이 모바일을 통해 콘텐츠를 소비합니다:</p>
      <ul>
        <li>모바일 시청 비율: 전체 시청의 70% 이상</li>
        <li>작은 화면에서의 가독성</li>
        <li>터치 인터페이스 고려</li>
      </ul>

      <h2>모바일 친화적 디자인</h2>
      <p>모바일에서 효과적인 썸네일을 만드는 방법:</p>
      <ul>
        <li>큰 폰트 사이즈 사용</li>
        <li>단순한 구성</li>
        <li>중요 요소의 중앙 배치</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: "텍스트가 있는 썸네일, 어떻게 만들어야 할까?",
    excerpt: "썸네일에 텍스트를 추가할 때 고려해야 할 사항과 가독성을 높이는 방법을 알아봅니다.",
    date: "2025-02-28",
    author: "썸뷰 관리자",
    content: `
      <h2>텍스트 배치의 기본 원칙</h2>
      <p>썸네일에서 텍스트를 효과적으로 배치하는 방법:</p>
      <ul>
        <li>중요한 텍스트는 상단에 배치</li>
        <li>배경과의 대비 확보</li>
        <li>적절한 여백 확보</li>
      </ul>

      <h2>폰트 선택</h2>
      <p>가독성 높은 폰트 선택을 위한 팁:</p>
      <ul>
        <li>굵은 폰트 웨이트 사용</li>
        <li>명확한 폰트 스타일</li>
        <li>적절한 폰트 크기</li>
      </ul>
    `,
  },
  {
    id: 5,
    title: "썸네일 A/B 테스트로 최적의 디자인 찾기",
    excerpt: "여러 버전의 썸네일을 테스트하여 최고의 성과를 내는 디자인을 찾는 방법을 알아봅니다.",
    date: "2025-02-20",
    author: "썸뷰 관리자",
    content: `
      <h2>A/B 테스트의 중요성</h2>
      <p>썸네일 디자인의 효과를 검증하는 방법:</p>
      <ul>
        <li>여러 버전의 썸네일 제작</li>
        <li>클릭률 비교</li>
        <li>시청자 반응 분석</li>
      </ul>

      <h2>테스트 요소</h2>
      <p>주요 테스트 항목:</p>
      <ul>
        <li>색상 조합</li>
        <li>텍스트 스타일</li>
        <li>이미지 구성</li>
      </ul>
    `,
  },
]

export default async function TipDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params
  const post = tipPosts.find((post) => post.id === parseInt(resolvedParams.id))

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50 font-noto">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">게시물을 찾을 수 없습니다</h1>
            <Link href="/tips" className="text-[#FF4646] hover:underline">
              팁 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 font-noto">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#FF4646] to-[#FF5A5A] text-white py-6 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Link href="/">
              <Image
                src="/header.png"
                alt="썸뷰 - 유튜브 썸네일 미리보기"
                width={240}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/about" className="text-lg font-medium hover:underline relative group">
                  소개
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/tips" className="text-lg font-medium hover:underline relative group">
                  팁
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile menu button */}
          <button className="md:hidden rounded-full p-2 hover:bg-white/10 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/tips" className="text-[#FF4646] hover:scale-105 transition-transform duration-300 mb-4 inline-block">
              ← 팁 목록으로 돌아가기
            </Link>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="!text-left">
              <div 
                className="prose prose-lg max-w-none !text-left [&>*]:!text-left [&_ul]:!pl-4 [&_ul]:list-disc [&_ul]:!text-left [&_li]:!text-left [&_p]:!text-left [&_h2]:!text-left" 
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 mt-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">썸뷰 - 유튜브 썸네일 미리보기</h3>
              <p className="text-gray-400">2025년부터 크리에이터의 썸네일 최적화를 돕고 있습니다</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">바로가기</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    소개
                  </Link>
                </li>
                <li>
                  <Link href="/tips" className="text-gray-400 hover:text-white">
                    팁
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} 썸뷰 - 유튜브 썸네일 미리보기. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 