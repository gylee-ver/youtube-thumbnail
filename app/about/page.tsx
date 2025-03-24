import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
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
                <Link href="/about" className="text-lg font-medium relative group">
                  소개
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/tips" className="text-lg font-medium relative group">
                  팁
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">썸뷰 소개</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">썸뷰란?</h2>
            <p className="text-lg text-gray-600 mb-6">
              썸뷰는 유튜브 크리에이터를 위한 썸네일 최적화 도구입니다. 다양한 기기와 환경에서 썸네일이 어떻게 보이는지
              미리 확인하고, 가독성과 주목도를 분석하여 더 효과적인 썸네일을 만들 수 있도록 도와드립니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">주요 기능</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li className="text-lg">다양한 기기(모바일, 태블릿, 데스크톱)에서 썸네일 미리보기</li>
              <li className="text-lg">유튜브 홈 피드와 검색 결과 화면에서의 썸네일 모습 확인</li>
              <li className="text-lg">라이트 모드와 다크 모드에서의 썸네일 가시성 테스트</li>
              <li className="text-lg">썸네일 가독성 분석 및 개선 팁 제공</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">왜 썸네일이 중요한가요?</h3>
            <p className="text-lg text-gray-600 mb-4">
              유튜브에서 썸네일은 시청자의 첫인상을 결정하는 중요한 요소입니다. 효과적인 썸네일은 클릭률(CTR)을 높이고,
              더 많은 시청자를 유입시키는 데 결정적인 역할을 합니다.
            </p>
            <p className="text-lg text-gray-600">
              유튜브 알고리즘은 클릭률이 높은 영상을 더 많이 추천하므로, 매력적인 썸네일은 채널 성장에 직접적인 영향을
              미칩니다. 썸뷰를 통해 다양한 환경에서 썸네일을 미리 확인하고 최적화하여 채널 성장에 도움을 받으세요.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">개발 스토리</h2>
            <p className="text-lg text-gray-600 mb-6">
              썸뷰는 2025년, 유튜브 크리에이터로 활동하며 겪었던 썸네일 최적화의 어려움을 해결하기 위해 시작되었습니다.
              다양한 기기에서 썸네일이 어떻게 보이는지 일일이 확인하는 번거로움을 줄이고, 더 효과적인 썸네일을 만들 수
              있는 도구가 필요하다고 생각했습니다.
            </p>
            <p className="text-lg text-gray-600">
              현재 썸뷰는 지속적으로 발전하고 있으며, 더 많은 기능과 분석 도구를 추가하여 크리에이터들에게 더 나은
              경험을 제공하기 위해 노력하고 있습니다. 앞으로도 유튜브 크리에이터들의 성장을 돕는 신뢰할 수 있는 파트너가
              되겠습니다.
            </p>
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