"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useAppStore } from "@/lib/store"

export function ThumbnailUploader() {
  const [isLoading, setIsLoading] = useState(false)
  const { thumbnail, setThumbnail } = useAppStore()

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return

      setIsLoading(true)
      const file = acceptedFiles[0]

      // Create a URL for the uploaded image
      const imageUrl = URL.createObjectURL(file)
      setThumbnail(imageUrl)
      setIsLoading(false)
    },
    [setThumbnail],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxFiles: 1,
    maxSize: 5242880, // 5MB
  })

  const handleReset = () => {
    if (thumbnail) {
      URL.revokeObjectURL(thumbnail)
    }
    setThumbnail(null)
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        {!thumbnail ? (
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
              isDragActive ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary/50"
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-medium mb-2">
              {isDragActive ? "여기에 썸네일을 놓으세요" : "썸네일을 끌어다 놓으세요"}
            </h3>
            <p className="text-gray-500 mb-4">또는 클릭하여 파일 찾기 (최대 5MB, 권장 크기: 1280×720)</p>
            <Button variant="outline" className="mx-auto">
              썸네일 선택하기
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200">
              {isLoading ? (
                <div className="flex h-full items-center justify-center bg-gray-100">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : (
                <Image src={thumbnail || "/placeholder.svg"} alt="썸네일 미리보기" fill className="object-cover" />
              )}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleReset}>
                다른 썸네일 업로드
              </Button>
              <Button>썸네일 분석하기</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

