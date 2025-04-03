"use client"

import { Eye, MousePointerClick, TrendingUp, Target } from "lucide-react"

export function ImportanceContent() {
  return (
    <div className="space-y-12 pt-8">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          썸네일이 중요한 이유
        </h2>
        <p className="text-gray-600 mb-8">
          유튜브에서 썸네일은 시청자의 첫인상을 결정하는 중요한 요소입니다. 효과적인 썸네일은 클릭률을 높이고, 더 많은 시청자를 유입시키는 데 결정적인 역할을 합니다.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-[#FF4646] text-white rounded-full flex items-center justify-center">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">첫인상 결정</h3>
            <p className="text-gray-600">
              썸네일은 시청자가 영상을 처음 마주하는 요소입니다.
              <br />
              좋은 첫인상은 시청자의 호기심을 자극하고 클릭을 유도합니다.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-[#FF4646] text-white rounded-full flex items-center justify-center">
            <MousePointerClick className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">클릭률 향상</h3>
            <p className="text-gray-600">
              매력적인 썸네일은 높은 클릭률을 유도합니다.
              <br />
              클릭률이 높을수록 알고리즘에서 더 많은 노출 기회를 얻을 수 있습니다.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-[#FF4646] text-white rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">채널 성장</h3>
            <p className="text-gray-600">
              일관된 썸네일 스타일은 채널 브랜딩에 도움을 줍니다.
              <br />
              시청자들이 채널을 쉽게 인식하고 기억할 수 있게 합니다.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-[#FF4646] text-white rounded-full flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">타겟 시청자 유입</h3>
            <p className="text-gray-600">
              썸네일은 원하는 시청자층을 유입하는 데 도움을 줍니다.
              <br />
              타겟 시청자의 관심사와 선호도를 반영한 썸네일이 효과적입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 