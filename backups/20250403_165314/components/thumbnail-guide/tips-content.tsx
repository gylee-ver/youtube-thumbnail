"use client"

import { Lightbulb, Target, Users, TrendingUp } from "lucide-react"

export function TipsContent() {
  return (
    <div className="space-y-12 pt-8">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          클릭률 높은 썸네일 제작 팁
        </h2>
        <p className="text-gray-600 mb-6">
          효과적인 썸네일은 클릭률을 높이고 채널 성장에 도움을 줍니다. 아래 팁들을 참고하여 더 나은 썸네일을 만들어보세요.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-[#FF4646] text-white rounded-full flex items-center justify-center">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">명확한 메시지 전달</h3>
            <p className="text-gray-600">
              썸네일의 핵심 메시지를 3초 안에 전달할 수 있도록 구성하세요.
              <br />
              복잡한 디자인보다는 직관적이고 이해하기 쉬운 디자인이 효과적입니다.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-[#FF4646] text-white rounded-full flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">타겟 시청자 고려</h3>
            <p className="text-gray-600">
              채널의 주요 시청자층을 고려하여 디자인하세요.
              <br />
              연령대, 관심사, 선호도에 맞는 스타일을 선택하면 효과적입니다.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-[#FF4646] text-white rounded-full flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">감정적 공감 유도</h3>
            <p className="text-gray-600">
              시청자의 감정을 자극하는 요소를 포함하세요.
              <br />
              호기심, 공감, 흥미를 유발하는 요소들이 클릭률을 높입니다.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-[#FF4646] text-white rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">트렌드 반영</h3>
            <p className="text-gray-600">
              현재 유행하는 디자인 요소나 스타일을 참고하세요.
              <br />
              단, 과도한 트렌드 추종은 오히려 역효과를 낼 수 있으니 주의하세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 