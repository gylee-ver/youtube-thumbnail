"use client"

import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react"
import { useAppStore } from "@/lib/store"
import { ThumbnailMetadata } from "./thumbnail-metadata"

export function ThumbnailUploader() {
  const { setThumbnail } = useAppStore()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setThumbnail(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [setThumbnail])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"]
    },
    maxFiles: 1,
    multiple: false
  })

  return (
    <div className="space-y-8">
      <section>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
            ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-2">
            <Upload className="w-8 h-8 text-gray-400" />
            <p className="text-sm text-gray-600">
              {isDragActive ? (
                "여기에 파일을 놓으세요..."
              ) : (
                "클릭하여 파일을 선택하거나 파일을 여기로 끌어오세요"
              )}
            </p>
            <p className="text-xs text-gray-500">
              최대 파일 크기: 5MB (PNG, JPG, GIF)
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200" />

      <section>
        <ThumbnailMetadata />
      </section>
    </div>
  )
}

