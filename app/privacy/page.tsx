import Link from "next/link"
import Image from "next/image"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">개인정보처리방침</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <p className="text-lg text-gray-600 mb-6">
              썸뷰(이하 &apos;해당 서비스&apos;)는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」을 준수하기 위하여 노력하고
              있습니다. 해당 서비스는 개인정보처리방침을 통하여 해당 서비스가 이용자로부터 수집하는 개인정보의 항목, 개인정보의 수집
              및 이용목적, 개인정보의 보유 및 이용기간, 개인정보의 제3자 제공 등에 관한 사항을 이용자에게 안내하고
              있습니다.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. 수집하는 개인정보의 항목 및 수집방법</h2>
            <p className="text-lg text-gray-600 mb-4">
              해당 서비스는 서비스 제공을 위해 필요한 경우 다음 정보를 수집하고 있습니다.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li className="text-lg">이메일 주소: 서비스 이용 및 고객 지원을 위해 수집합니다.</li>
              <li className="text-lg">업로드한 썸네일 이미지: 서비스 제공을 위해 일시적으로 저장됩니다.</li>
              <li className="text-lg">접속 로그, IP 정보: 서비스 이용 통계 및 보안을 위해 수집됩니다.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. 개인정보의 수집 및 이용목적</h2>
            <p className="text-lg text-gray-600 mb-4">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li className="text-lg">서비스 제공 및 운영</li>
              <li className="text-lg">회원 관리 및 고객 지원</li>
              <li className="text-lg">서비스 개선 및 신규 서비스 개발</li>
              <li className="text-lg">보안 및 fraud 방지</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. 개인정보의 보유 및 이용기간</h2>
            <p className="text-lg text-gray-600 mb-6">
              해당 서비스는 이용자의 개인정보를 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단,
              관련 법령에 의해 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.
            </p>
            <p className="text-lg text-gray-600">
              업로드된 썸네일 이미지는 해당 서비스 서버에 절대 저장되지 않습니다.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. 개인정보의 파기절차 및 방법</h2>
            <p className="text-lg text-gray-600 mb-4">
              해당 서비스에 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및
              방법은 다음과 같습니다.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li className="text-lg">
                전자적 파일 형태로 저장된 개인정보는 기술적 방법을 사용하여 복구 및 재생이 불가능하도록 안전하게
                삭제합니다.
              </li>
              <li className="text-lg">종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. 개인정보 보호책임자</h2>
            <p className="text-lg text-gray-600 mb-4">
              해당 서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제
              등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-lg text-gray-700">
                <strong>개인정보 보호책임자</strong>
                <br />
                이메일 : someview@gmail.com
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. 개인정보처리방침의 변경</h2>
            <p className="text-lg text-gray-600">
              이 개인정보처리방침은 2025년 3월 20일부터 적용됩니다. 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이
              있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
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