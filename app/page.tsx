"use client"

import { useState, useEffect, useCallback } from "react"
import { ThumbnailUploader } from "@/components/thumbnail-uploader"
import { DevicePreview } from "@/components/device-preview"
import { ReadabilityAnalysis } from "@/components/readability-analysis"
import { LazyThumbnailGuide } from "@/components/thumbnail-guide/lazy-load"
import Image from "next/image"
import Link from "next/link"
import { errorMonitor } from "@/lib/error-monitoring"

export default function Home() {
  // 안전장치: 새로운 가이드 섹션 표시 여부
  const [showNewGuide, setShowNewGuide] = useState(true)
  
  // 기존 기능 상태 확인
  useEffect(() => {
    let isMounted = true
    const checkExistingFeatures = () => {
      try {
        // 기존 기능들이 정상적으로 로드되었는지 확인
        const thumbnailUploader = document.querySelector('.thumbnail-uploader')
        const devicePreview = document.querySelector('.device-preview')
        const readabilityAnalysis = document.querySelector('.readability-analysis')
        
        if (!isMounted) return

        // 각 기능별로 독립적으로 확인
        if (!thumbnailUploader) {
          console.warn('Thumbnail uploader not found')
          errorMonitor.logError('Thumbnail uploader not found', 'low', 'Home')
        }
        
        if (!devicePreview) {
          console.warn('Device preview not found')
          errorMonitor.logError('Device preview not found', 'low', 'Home')
        }
        
        if (!readabilityAnalysis) {
          console.warn('Readability analysis not found')
          errorMonitor.logError('Readability analysis not found', 'low', 'Home')
        }

        // 모든 기능이 없을 때만 가이드 섹션 숨김
        if (!thumbnailUploader && !devicePreview && !readabilityAnalysis) {
          handleError()
        }
      } catch (error) {
        if (!isMounted) return
        console.error('Error checking existing features:', error)
        errorMonitor.logError('Error checking existing features', 'medium', 'Home')
      }
    }
    
    // 컴포넌트 마운트 후 약간의 지연을 두고 확인
    const timer = setTimeout(() => {
      checkExistingFeatures()
    }, 100)
    
    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [])

  // 에러 발생 시 롤백 처리
  const handleError = useCallback(() => {
    setShowNewGuide(false)
    errorMonitor.logError('Failed to load main page features', 'high', 'Home')
    
    // 사용자에게 에러 상태를 알리는 UI 표시
    const errorMessage = document.createElement('div')
    errorMessage.className = 'fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'
    errorMessage.role = 'alert'
    errorMessage.innerHTML = `
      <strong class="font-bold">오류 발생!</strong>
      <span class="block sm:inline"> 일부 기능을 로드하지 못했습니다. 페이지를 새로고침해주세요.</span>
    `
    document.body.appendChild(errorMessage)
    
    // 5초 후 에러 메시지 자동 제거
    setTimeout(() => {
      if (errorMessage.parentNode) {
        errorMessage.parentNode.removeChild(errorMessage)
      }
    }, 5000)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 font-noto">
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-[#FF4646] to-[#FF5A5A] text-white py-6 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Link href="/">
              <Image
                src="/header-t.png"
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
          {/* Mobile menu button - visible on small screens */}
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
      <div className="container mx-auto px-4 py-8 lg:max-w-4xl">
        {/* 새로운 설명 섹션 */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-2xl font-bold mb-2">유튜브 썸네일 최적화하기</h1>
          <p className="text-lg">
            스마트폰부터 PC까지, 모든 화면에서 썸네일이 어떻게 보이는지 미리 체크하세요.<br />
            눈길 확 끄는 썸네일로 조회수 쭉쭉 올려보세요!
          </p>
        </section>

        {/* 새로운 가이드 섹션 (안전장치 적용) */}
        {showNewGuide && (
          <section data-testid="thumbnail-guide-section" className="bg-white p-8 rounded-lg shadow-md mb-8">
            <LazyThumbnailGuide />
          </section>
        )}

        {/* 기존 섹션들 */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-8 thumbnail-uploader">
          <ThumbnailUploader />
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md mb-8 device-preview">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">다양한 기기에서 미리보기</h3>
          <DevicePreview />
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md mb-8 readability-analysis">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">가독성 분석</h3>
          <div className="mb-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 mb-2">⚠️ 해당 결과는 참고용으로만 활용해 주세요. 100% 정확하지 않을 수 있습니다.</p>
            <p className="text-sm text-blue-800">🔨 가독성 AI 분석 기능은 현재 개발 중입니다. 완성까지 조금만 기다려 주시기 바랍니다.</p>
          </div>
          <ReadabilityAnalysis />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
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

