"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GuideContent } from "./guide-content"
import { TipsContent } from "./tips-content"
import { ImportanceContent } from "./importance-content"
import { errorMonitor } from "@/lib/error-monitoring"

export function ThumbnailGuide() {
  const [isVisible, setIsVisible] = useState(true)

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
          errorMonitor.logError('Thumbnail uploader not found', 'low', 'ThumbnailGuide')
        }
        
        if (!devicePreview) {
          console.warn('Device preview not found')
          errorMonitor.logError('Device preview not found', 'low', 'ThumbnailGuide')
        }
        
        if (!readabilityAnalysis) {
          console.warn('Readability analysis not found')
          errorMonitor.logError('Readability analysis not found', 'low', 'ThumbnailGuide')
        }

        // 모든 기능이 없을 때만 컴포넌트 숨김
        if (!thumbnailUploader && !devicePreview && !readabilityAnalysis) {
          setIsVisible(false)
        }
      } catch (error) {
        if (!isMounted) return
        console.error('Error checking existing features:', error)
        errorMonitor.logError('Error checking existing features', 'medium', 'ThumbnailGuide')
        setIsVisible(false)
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

  if (!isVisible) {
    return null
  }

  return (
    <Tabs defaultValue="guide" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="guide">사용법 안내</TabsTrigger>
        <TabsTrigger value="tips">제작 팁</TabsTrigger>
        <TabsTrigger value="importance">중요성</TabsTrigger>
      </TabsList>
      <TabsContent value="guide">
        <GuideContent />
      </TabsContent>
      <TabsContent value="tips">
        <TipsContent />
      </TabsContent>
      <TabsContent value="importance">
        <ImportanceContent />
      </TabsContent>
    </Tabs>
  )
} 