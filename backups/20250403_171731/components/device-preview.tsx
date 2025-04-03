"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Monitor,
  Smartphone,
  Tablet,
  Sun,
  Moon,
  ImageIcon,
  MoreVertical,
  Mic,
  Cast,
  Home,
  Plus,
  User,
  Search,
  Bell,
  X,
  ChevronLeft,
} from "lucide-react"
import { useAppStore } from "@/lib/store"
import Image from "next/image"

export function DevicePreview() {
  const [viewMode, setViewMode] = useState<"light" | "dark">("light")
  const [youtubeView, setYoutubeView] = useState<"home" | "search">("home")
  const { thumbnail, metadata } = useAppStore()

  const toggleViewMode = () => {
    setViewMode(viewMode === "light" ? "dark" : "light")
  }

  const renderMobileHomeContent = () => {
    return (
      <div className="flex flex-col">
        {/* Status Bar */}
        <div
          className={`flex justify-between items-center px-4 py-2 ${viewMode === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <div className="text-sm font-semibold">8:37</div>
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div className={`h-3 w-1 ${viewMode === "dark" ? "bg-white" : "bg-gray-700"} rounded-sm`}></div>
              <div className={`h-3 w-1 ${viewMode === "dark" ? "bg-white" : "bg-gray-700"} rounded-sm`}></div>
              <div className={`h-3 w-1 ${viewMode === "dark" ? "bg-white" : "bg-gray-700"} rounded-sm`}></div>
              <div className={`h-3 w-1 ${viewMode === "dark" ? "bg-white" : "bg-gray-700"} rounded-sm`}></div>
            </div>
            <div className="text-xs">98%</div>
          </div>
        </div>

        {/* YouTube Premium Header */}
        <div className={`flex justify-between items-center px-4 py-2 ${viewMode === "dark" ? "bg-black" : "bg-white"}`}>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-1">
              <svg viewBox="0 0 24 24" focusable="false" className="w-5 h-5 text-white">
                <path
                  fill="currentColor"
                  d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
                ></path>
              </svg>
            </div>
            <span className={`font-bold text-lg ${viewMode === "dark" ? "text-white" : "text-black"}`}>Premium</span>
          </div>
          <div className="flex items-center space-x-4">
            <Cast className={`w-5 h-5 ${viewMode === "dark" ? "text-white" : "text-black"}`} />
            <div className="relative">
              <Bell className={`w-5 h-5 ${viewMode === "dark" ? "text-white" : "text-black"}`} />
              <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1 min-w-[18px] h-[18px] flex items-center justify-center">
                9+
              </div>
            </div>
            <Search className={`w-5 h-5 ${viewMode === "dark" ? "text-white" : "text-black"}`} />
          </div>
        </div>

        {/* Category Pills */}
        <div
          className={`flex space-x-2 px-2 py-2 ${viewMode === "dark" ? "bg-black" : "bg-white"} overflow-x-auto scrollbar-hide`}
        >
          <div
            className={`${viewMode === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-4 py-1 rounded-full text-xs whitespace-nowrap flex items-center`}
          >
            <svg viewBox="0 0 24 24" focusable="false" className="w-4 h-4 mr-1">
              <path
                fill="currentColor"
                d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20ZM11,7H13V13H11V7ZM11,15H13V17H11V15Z"
              ></path>
            </svg>
            탐색
          </div>
          <div className="bg-black text-white px-4 py-1 rounded-full text-xs whitespace-nowrap">전체</div>
          <div
            className={`${viewMode === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-4 py-1 rounded-full text-xs whitespace-nowrap`}
          >
            음악
          </div>
          <div
            className={`${viewMode === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-4 py-1 rounded-full text-xs whitespace-nowrap`}
          >
            야구
          </div>
          <div
            className={`${viewMode === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-4 py-1 rounded-full text-xs whitespace-nowrap`}
          >
            뉴스
          </div>
          <div
            className={`${viewMode === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-4 py-1 rounded-full text-xs whitespace-nowrap`}
          >
            팟캐스트
          </div>
        </div>

        {/* Videos */}
        <div className={`flex flex-col ${viewMode === "dark" ? "bg-black" : "bg-white"}`}>
          {/* First Video (User's Thumbnail) */}
          <div className="mb-4">
            <div className="relative aspect-video">
              {thumbnail ? (
                <Image
                  src={thumbnail}
                  alt="Your thumbnail"
                  fill
                  className="object-cover"
                  sizes="360px"
                  priority
                  quality={100}
                />
              ) : (
                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                  <ImageIcon className="w-10 h-10 text-gray-500" />
                </div>
              )}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                {metadata.duration || "9:59"}
              </div>
            </div>
            <div className="flex px-2 pt-2">
              <div className="w-9 h-9 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
                {metadata.channelName ? metadata.channelName[0].toUpperCase() : "Y"}
              </div>
              <div className="ml-2 flex-1">
                <p className={`${viewMode === "dark" ? "text-white" : "text-black"} text-sm font-medium line-clamp-2`}>
                  {metadata.title || "여기에 영상 제목이 표시됩니다"}
                </p>
                <p className={`${viewMode === "dark" ? "text-gray-400" : "text-gray-500"} text-xs`}>
                  {metadata.channelName || "내 채널"} • {metadata.views || "조회수 10만회"} • 3일 전
                </p>
              </div>
              <button className={viewMode === "dark" ? "text-white" : "text-black"}>
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Additional Videos */}
          {[1, 2].map((item) => (
            <div key={item} className="mb-4">
              <div className="relative aspect-video">
                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                  <ImageIcon className="w-10 h-10 text-gray-500" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                  {item === 1 ? "20:33" : "16:39"}
                </div>
              </div>
              <div className="flex px-2 pt-2">
                <div className="w-9 h-9 rounded-full bg-gray-600 flex-shrink-0"></div>
                <div className="ml-2 flex-1">
                  <p
                    className={`${viewMode === "dark" ? "text-white" : "text-black"} text-sm font-medium line-clamp-2`}
                  >
                    Video Title Goes Here
                  </p>
                  <p className={`${viewMode === "dark" ? "text-gray-400" : "text-gray-500"} text-xs`}>
                    Channel Name • 10K views • 3 days ago
                  </p>
                </div>
                <button className={viewMode === "dark" ? "text-white" : "text-black"}>
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div
          className={`flex justify-between items-center px-4 py-3 ${viewMode === "dark" ? "bg-black text-white border-t border-gray-800" : "bg-white text-black border-t border-gray-200"}`}
        >
          <div className="flex flex-col items-center">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">홈</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" />
            </svg>
            <span className="text-xs mt-1">Shorts</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <div className="w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center">
              <Plus className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z" />
            </svg>
            <span className="text-xs mt-1">구독</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">나</span>
          </div>
        </div>
      </div>
    )
  }

  const renderMobileSearchContent = () => {
    return (
      <div className="flex flex-col">
        {/* Status Bar */}
        <div
          className={`flex justify-between items-center px-4 py-2 ${viewMode === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <div className="text-sm font-semibold">8:37</div>
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div className={`h-3 w-1 ${viewMode === "dark" ? "bg-white" : "bg-gray-700"} rounded-sm`}></div>
              <div className={`h-3 w-1 ${viewMode === "dark" ? "bg-white" : "bg-gray-700"} rounded-sm`}></div>
              <div className={`h-3 w-1 ${viewMode === "dark" ? "bg-white" : "bg-gray-700"} rounded-sm`}></div>
              <div className={`h-3 w-1 ${viewMode === "dark" ? "bg-white" : "bg-gray-700"} rounded-sm`}></div>
            </div>
            <div className="text-xs">98%</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`flex items-center px-2 py-2 ${viewMode === "dark" ? "bg-black" : "bg-white"}`}>
          <button className={viewMode === "dark" ? "text-white" : "text-black"}>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div
            className={`flex-1 mx-2 ${viewMode === "dark" ? "bg-gray-800" : "bg-gray-100"} rounded-full flex items-center px-4 py-1`}
          >
            <span className={`${viewMode === "dark" ? "text-white" : "text-gray-800"} text-sm flex-1`}>한화이글스</span>
            <X className="w-4 h-4 text-gray-400" />
          </div>
          <button className={viewMode === "dark" ? "text-white" : "text-black"}>
            <Mic className="w-5 h-5" />
          </button>
          <button className={viewMode === "dark" ? "text-white" : "text-black"}>
            <Cast className="w-5 h-5" />
          </button>
          <button className={viewMode === "dark" ? "text-white" : "text-black"}>
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Main Video */}
        <div className={`flex flex-col ${viewMode === "dark" ? "bg-black" : "bg-white"}`}>
          <div className="mb-4">
            <div className="relative aspect-video">
              {thumbnail ? (
                <Image
                  src={thumbnail}
                  alt="Your thumbnail"
                  fill
                  className="object-cover"
                  sizes="360px"
                  priority
                  quality={100}
                />
              ) : (
                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                  <ImageIcon className="w-10 h-10 text-gray-500" />
                </div>
              )}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                {metadata.duration || "3:24"}
              </div>
            </div>
            <div className="flex px-2 pt-2">
              <div className="w-9 h-9 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
                {metadata.channelName ? metadata.channelName[0].toUpperCase() : "Y"}
              </div>
              <div className="ml-2 flex-1">
                <p className={`${viewMode === "dark" ? "text-white" : "text-black"} text-sm font-medium line-clamp-2`}>
                  {metadata.title || "여기에 영상 제목이 표시됩니다"}
                </p>
                <p className={`${viewMode === "dark" ? "text-gray-400" : "text-gray-500"} text-xs`}>
                  {metadata.channelName || "내 채널"} • {metadata.views || "조회수 10만회"} • 3일 전
                </p>
              </div>
              <button className={viewMode === "dark" ? "text-white" : "text-black"}>
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main News Section */}
          <div className="px-4 mb-4">
            <h3 className={`${viewMode === "dark" ? "text-white" : "text-black"} font-medium text-base mb-2`}>
              주요 뉴스
            </h3>
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
              <div className="w-40 flex-shrink-0">
                <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden">
                  {thumbnail ? (
                    <Image
                      src={thumbnail}
                      alt="Your thumbnail"
                      fill
                      className="object-cover"
                      sizes="160px"
                      quality={100}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-gray-500" />
                    </div>
                  )}
                  <div className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 py-0.5 rounded flex items-center">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-0.5">
                      <path
                        fill="currentColor"
                        d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2,.5L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"
                      ></path>
                    </svg>
                    SHORTS
                  </div>
                </div>
                <p className={`${viewMode === "dark" ? "text-white" : "text-black"} text-xs mt-1 line-clamp-2`}>
                  대전 한화생명 불파크 첫 시범경기!
                </p>
              </div>
              <div className="w-40 flex-shrink-0">
                <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 py-0.5 rounded">LIVE</div>
                </div>
                <p className={`${viewMode === "dark" ? "text-white" : "text-black"} text-xs mt-1 line-clamp-2`}>
                  한화 vs 삼성 경기 하이라이트
                </p>
              </div>
            </div>
          </div>

          {/* Additional Videos */}
          <div className="mb-4">
            <div className="relative aspect-video">
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                <ImageIcon className="w-10 h-10 text-gray-500" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                {metadata.duration || "5:42"}
              </div>
            </div>
            <div className="flex px-2 pt-2">
              <div className="w-9 h-9 rounded-full bg-yellow-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
                {metadata.channelName ? metadata.channelName[0].toUpperCase() : "Y"}
              </div>
              <div className="ml-2 flex-1">
                <p className={`${viewMode === "dark" ? "text-white" : "text-black"} text-sm font-medium line-clamp-2`}>
                  {metadata.title || "여기에 영상 제목이 표시됩니다"}
                </p>
                <p className={`${viewMode === "dark" ? "text-gray-400" : "text-gray-500"} text-xs`}>
                  {metadata.channelName || "내 채널"} • {metadata.views || "조회수 10만회"} • 3일 전
                </p>
              </div>
              <button className={viewMode === "dark" ? "text-white" : "text-black"}>
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div
            className={`flex justify-between items-center px-4 py-3 mt-auto ${viewMode === "dark" ? "bg-black text-white border-t border-gray-800" : "bg-white text-black border-t border-gray-200"}`}
          >
            <div className="flex flex-col items-center text-gray-400">
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1">홈</span>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" />
              </svg>
              <span className="text-xs mt-1">Shorts</span>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <div className="w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                <Plus className="w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z" />
              </svg>
              <span className="text-xs mt-1">구독</span>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">나</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderHomeContent = (deviceType: "desktop" | "tablet"): React.ReactElement => {
    if (deviceType === "desktop") {
      return renderRecommendedContent("desktop")
    }

    return (
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, item) => (
          <div key={item} className="space-y-2">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
              {item === 0 && thumbnail ? (
                <Image
                  src={thumbnail}
                  alt="Your thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={100}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                </div>
              )}
              {item === 0 && (
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                  {metadata.duration || "9:59"}
                </div>
              )}
            </div>
            <div className="flex">
              <div className="w-9 h-9 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
                {item === 0 ? (metadata.channelName ? metadata.channelName[0].toUpperCase() : "Y") : "C"}
              </div>
              <div className="ml-2">
                <p className={`font-medium text-sm truncate ${viewMode === "dark" ? "text-white" : "text-gray-800"}`}>
                  {item === 0 ? (metadata.title || "여기에 영상 제목이 표시됩니다") : "Video Title Goes Here"}
                </p>
                <p className={`text-xs ${viewMode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  {item === 0 ? (metadata.channelName || "내 채널") : "Channel Name"}
                </p>
                <p className={`text-xs ${viewMode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  {item === 0 ? (metadata.views || "조회수 10만회") : "10K views"} • 3일 전
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderSearchContent = (deviceType: "desktop" | "tablet") => {
    const itemCount = deviceType === "desktop" ? 5 : 4

    return (
      <div className="space-y-4">
        <div className={`mb-4 px-2 py-3 ${viewMode === "dark" ? "bg-gray-800" : "bg-gray-100"} rounded-lg`}>
          <div className="flex items-center">
            <div className={`flex-1 text-base ${viewMode === "dark" ? "text-white" : "text-gray-800"}`}>
              검색 결과: <span className="font-medium">유튜브 썸네일</span>
            </div>
          </div>
        </div>

        {Array.from({ length: itemCount }).map((_, item) => (
          <div key={item} className="flex gap-4">
            <div className="w-60 aspect-video bg-gray-200 rounded-md overflow-hidden relative flex-shrink-0">
              {item === 0 && thumbnail ? (
                <Image
                  src={thumbnail}
                  alt="Your thumbnail"
                  fill
                  className="object-cover"
                  sizes="240px"
                  quality={100}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                </div>
              )}
              {item === 0 && (
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                  {metadata.duration || "9:59"}
                </div>
              )}
            </div>
            <div className={`flex-1 ${viewMode === "dark" ? "text-white" : "text-gray-800"}`}>
              <p className="font-medium text-sm line-clamp-2">
                {item === 0 ? (metadata.title || "여기에 영상 제목이 표시됩니다") : "클릭을 유도하는 매력적인 유튜브 썸네일 만드는 방법"}
              </p>
              <p className={`text-xs ${viewMode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                {item === 0 ? (metadata.channelName || "내 채널") : "채널명"}
              </p>
              <p className={`text-xs ${viewMode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                {item === 0 ? (metadata.views || "조회수 10만회") : "조회수 10만회"} • 3일 전
              </p>
              <p className={`mt-1 text-xs line-clamp-2 ${viewMode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                CTR을 높이고 유튜브에서 영상 성과를 개선하는 썸네일 디자인 방법을 알아보세요.
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderRecommendedContent = (deviceType: "desktop" | "tablet"): React.ReactElement => {
    if (deviceType === "tablet") {
      return renderHomeContent("tablet")
    }

    return (
      <div>
        <div className={`mb-4 ${viewMode === "dark" ? "text-white" : "text-gray-800"}`}>
          <h3 className="text-base font-medium">맞춤 동영상</h3>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, item) => (
            <div key={item} className="space-y-2">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                {item === 0 && thumbnail ? (
                  <Image
                    src={thumbnail}
                    alt="Your thumbnail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-gray-400" />
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                  {item === 0 ? (metadata.duration || "9:59") : `${Math.floor(Math.random() * 10) + 1}:${Math.floor(Math.random() * 50) + 10}`}
                </div>
              </div>
              <div className={viewMode === "dark" ? "text-white" : "text-gray-800"}>
                <p className="font-medium text-sm line-clamp-2">
                  {item === 0 ? (metadata.title || "여기에 영상 제목이 표시됩니다") : "Recommended Video Title Example"}
                </p>
                <p className={`text-xs ${viewMode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  {item === 0 ? (metadata.channelName || "내 채널") : "Channel Name"}
                </p>
                <p className={`text-xs ${viewMode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  {item === 0 ? (metadata.views || "조회수 10만회") : `${Math.floor(Math.random() * 100) + 1}K views`} • {Math.floor(Math.random() * 7) + 1} days ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={toggleViewMode} className="flex items-center gap-2">
            {viewMode === "light" ? (
              <>
                <Sun className="h-4 w-4" />
                <span>라이트 모드</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" />
                <span>다크 모드</span>
              </>
            )}
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-600">유튜브 화면:</span>
          <Tabs value={youtubeView} onValueChange={(value) => setYoutubeView(value as "home" | "search")} className="w-[200px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="home"
                className="flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                <span>홈 피드</span>
              </TabsTrigger>
              <TabsTrigger
                value="search"
                className="flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                <span>검색 결과</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Tabs defaultValue="mobile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mobile" className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            <span>모바일</span>
          </TabsTrigger>
          <TabsTrigger value="desktop" className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            <span>데스크톱</span>
          </TabsTrigger>
          <TabsTrigger value="tablet" className="flex items-center gap-2">
            <Tablet className="h-4 w-4" />
            <span>태블릿</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mobile" className="mt-6">
          <div className="max-w-[375px] mx-auto overflow-hidden rounded-xl border border-gray-300 shadow-md">
            {youtubeView === "home" && renderMobileHomeContent()}
            {youtubeView === "search" && renderMobileSearchContent()}
          </div>
        </TabsContent>

        <TabsContent value="desktop" className="mt-6">
          <div className={`border rounded-lg overflow-hidden ${viewMode === "dark" ? "bg-gray-900" : "bg-white"}`}>
            <div className={`p-4 border-b ${viewMode === "dark" ? "border-gray-700 text-white" : "border-gray-200"}`}>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  Y
                </div>
                <span className="ml-2 font-medium">YouTube</span>
              </div>
            </div>
            <div className="p-6">
              {youtubeView === "home" && renderHomeContent("desktop")}
              {youtubeView === "search" && renderSearchContent("desktop")}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tablet" className="mt-6">
          <div className="max-w-[768px] mx-auto">
            <div className={`border rounded-lg overflow-hidden ${viewMode === "dark" ? "bg-gray-900" : "bg-white"}`}>
              <div className={`p-4 border-b ${viewMode === "dark" ? "border-gray-700 text-white" : "border-gray-200"}`}>
                <div className="flex items-center">
                  <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    Y
                  </div>
                  <span className="ml-2 font-medium">YouTube</span>
                </div>
              </div>
              <div className="p-4">
                {youtubeView === "home" && renderHomeContent("tablet")}
                {youtubeView === "search" && renderSearchContent("tablet")}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

