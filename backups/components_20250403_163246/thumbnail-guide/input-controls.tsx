"use client"

import { useState } from 'react'

interface InputControlsProps {
  onTitleChange?: (title: string) => void
  onChannelNameChange?: (channelName: string) => void
  onViewsChange?: (views: string) => void
  onDurationChange?: (duration: string) => void
}

export function InputControls({
  onTitleChange,
  onChannelNameChange,
  onViewsChange,
  onDurationChange
}: InputControlsProps) {
  const [title, setTitle] = useState("이렇게 썸네일 체크하세요")
  const [channelName, setChannelName] = useState("썸뷰")
  const [views, setViews] = useState("32K views")
  const [duration, setDuration] = useState("10:32")

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    onTitleChange?.(newTitle)
  }

  const handleChannelNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChannelName = e.target.value
    setChannelName(newChannelName)
    onChannelNameChange?.(newChannelName)
  }

  const handleViewsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newViews = e.target.value
    setViews(newViews)
    onViewsChange?.(newViews)
  }

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDuration = e.target.value
    setDuration(newDuration)
    onDurationChange?.(newDuration)
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          영상 제목
        </label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          채널명
        </label>
        <input
          type="text"
          value={channelName}
          onChange={handleChannelNameChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          조회수
        </label>
        <input
          type="text"
          value={views}
          onChange={handleViewsChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          영상 길이
        </label>
        <input
          type="text"
          value={duration}
          onChange={handleDurationChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  )
} 