import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">이용약관</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <p className="text-lg text-gray-600 mb-6">
              이 이용약관(이하 &apos;약관&apos;)은 썸뷰(이하 &apos;해당 서비스&apos;)가 제공하는 모든 서비스(이하 &apos;서비스&apos;)의 이용조건 및 절차,
              해당 서비스와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">제1조 (정의)</h2>
            <p className="text-lg text-gray-600 mb-4">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li className="text-lg">&apos;서비스&apos;라 함은 해당 서비스가 제공하는 모든 서비스를 의미합니다.</li>
              <li className="text-lg">
                &apos;회원&apos;이라 함은 해당 서비스의 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는
                서비스를 이용하는 고객을 말합니다.
              </li>
              <li className="text-lg">
                &apos;아이디(ID)&apos;라 함은 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의
                조합을 의미합니다.
              </li>
              <li className="text-lg">
                &apos;비밀번호&apos;라 함은 회원이 부여 받은 아이디와 일치되는 회원임을 확인하고 비밀보호를 위해 회원 자신이 정한
                문자 또는 숫자의 조합을 의미합니다.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">제2조 (약관의 효력 및 변경)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li className="text-lg">
                이 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력이 발생합니다.
              </li>
              <li className="text-lg">
              해당 서비스는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로
                공지함으로써 효력이 발생합니다.
              </li>
              <li className="text-lg">
                해당 서비스는 변경된 약관에 동의하지 않을 경우 회원 탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일 이후에도
                서비스를 계속 사용할 경우 약관의 변경사항에 동의한 것으로 간주됩니다.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">제3조 (서비스 이용)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li className="text-lg">
                서비스 이용은 해당 서비스의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.
              </li>
              <li className="text-lg">
                해당 서비스는 시스템 등의 보수, 점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을
                일시적으로 중단할 수 있습니다.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">제4조 (회원의 의무)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li className="text-lg">
                회원은 관계법령, 이 약관의 규정, 이용안내 및 주의사항 등 회사가 통지하는 사항을 준수하여야 하며, 기타
                회사의 업무에 방해되는 행위를 하여서는 안 됩니다.
              </li>
              <li className="text-lg">
                회원은 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에
                의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">제5조 (저작권의 귀속 및 이용제한)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li className="text-lg">회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</li>
              <li className="text-lg">
                회원은 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에
                의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">제6조 (계약해제, 해지 등)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li className="text-lg">
                회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 온라인을 통해 회사에 해지 신청을 하여야 합니다.
              </li>
              <li className="text-lg">
                해당 서비스는 회원이 이 약관에서 정한 회원의 의무를 위반한 경우에는 이용계약을 해지할 수 있습니다.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">제7조 (면책조항)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li className="text-lg">
                해당 서비스는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한
                책임이 면제됩니다.
              </li>
              <li className="text-lg">
                해당 서비스는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
              </li>
              <li className="text-lg">
                해당 서비스는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를
                통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">제8조 (분쟁해결)</h2>
            <p className="text-lg text-gray-600">
              이 약관에 명시되지 않은 사항은 전기통신사업법, 전자거래기본법, 정보통신망 이용촉진 및 정보보호 등에 관한
              법률, 기타 관련법령의 규정에 따릅니다.
            </p>

            <div className="mt-8 text-right">
              <p className="text-lg text-gray-600">시행일: 2025년 3월 20일</p>
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