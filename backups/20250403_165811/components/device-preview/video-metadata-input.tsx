"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { VideoMetadata } from "./types"

interface VideoMetadataInputProps {
  metadata: VideoMetadata;
  onChange: (metadata: VideoMetadata) => void;
}

export function VideoMetadataInput({ metadata, onChange }: VideoMetadataInputProps) {
  const handleChange = (field: keyof VideoMetadata) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...metadata,
      [field]: e.target.value
    })
  }

  return (
    <div className="space-y-4 p-4 border rounded-lg">
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
  )
} 