"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppStore } from "@/lib/store"

export function ThumbnailMetadata() {
  const { metadata, setMetadata } = useAppStore()

  const handleChange = (field: keyof typeof metadata) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setMetadata({ [field]: e.target.value })
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">썸네일 정보 입력</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">영상 제목</Label>
          <Input
            id="title"
            value={metadata.title}
            onChange={handleChange("title")}
            placeholder="이렇게 썸네일 체크하세요"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="channelName">채널명</Label>
          <Input
            id="channelName"
            value={metadata.channelName}
            onChange={handleChange("channelName")}
            placeholder="썸뷰"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="views">조회수</Label>
          <Input
            id="views"
            value={metadata.views}
            onChange={handleChange("views")}
            placeholder="32K views"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="duration">영상 길이</Label>
          <Input
            id="duration"
            value={metadata.duration}
            onChange={handleChange("duration")}
            placeholder="10:32"
          />
        </div>
      </div>
    </div>
  )
} 