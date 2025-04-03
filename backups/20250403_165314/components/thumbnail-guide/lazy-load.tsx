"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// 로딩 중 표시할 컴포넌트
const LoadingFallback = () => (
  <div className="w-full h-48 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
    <div className="text-gray-400">로딩 중...</div>
  </div>
)

// ThumbnailGuide 컴포넌트를 동적으로 임포트
const ThumbnailGuide = dynamic(
  () => import('./index').then(mod => ({ default: mod.ThumbnailGuide })),
  {
    loading: () => <LoadingFallback />,
    ssr: false // 클라이언트 사이드에서만 렌더링
  }
)

export function LazyThumbnailGuide() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ThumbnailGuide />
    </Suspense>
  )
} 