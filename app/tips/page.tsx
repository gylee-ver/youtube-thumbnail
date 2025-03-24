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
  },
  {
    id: 2,
    title: "클릭률을 높이는 썸네일 디자인 5가지 팁",
    excerpt: "시청자의 시선을 사로잡고 클릭을 유도하는 효과적인 썸네일 디자인 전략을 소개합니다.",
    date: "2025-03-10",
    author: "썸뷰 관리자",
  },
  {
    id: 3,
    title: "모바일에서 더 돋보이는 썸네일 만들기",
    excerpt: "작은 화면에서도 주목도가 높은 썸네일을 만드는 방법과 모바일 환경에서의 최적화 전략을 알아봅니다.",
    date: "2025-03-05",
    author: "썸뷰 관리자",
  },
  {
    id: 4,
    title: "텍스트가 있는 썸네일, 어떻게 만들어야 할까?",
    excerpt: "썸네일에 텍스트를 추가할 때 고려해야 할 사항과 가독성을 높이는 방법을 알아봅니다.",
    date: "2025-02-28",
    author: "썸뷰 관리자",
  },
  {
    id: 5,
    title: "썸네일 A/B 테스트로 최적의 디자인 찾기",
    excerpt: "여러 버전의 썸네일을 테스트하여 최고의 성과를 내는 디자인을 찾는 방법을 알아봅니다.",
    date: "2025-02-20",
    author: "썸뷰 관리자",
  },
]

export default function TipsPage() {
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
            <h1 className="text-4xl font-bold text-gray-800">썸네일 제작 팁</h1>
          </div>

          <div className="space-y-6">
            {tipPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                <Link href={`/tips/${post.id}`} className="block">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-[#FF4646] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </Link>
              </article>
            ))}
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