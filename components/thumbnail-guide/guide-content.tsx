"use client"

import { Upload, Smartphone, Monitor, Tablet, Edit2, CheckSquare } from 'lucide-react'
import { InputControls } from './input-controls'
import { Checklist } from './checklist'
import { GuideLink } from './guide-link'

export function GuideContent() {
  return (
    <div className="space-y-12 pt-8">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          [유튜브 썸네일 미리보기, 이렇게 활용하세요!]
        </h2>
        <p className="text-gray-600 mb-8">
          유튜브 썸네일은 클릭을 유도하는 첫 번째 시선입니다. 하지만 멋지게 만든 썸네일도 실제 유튜브에서 어떻게 보일지 모른다면, 효과가 반감될 수 있죠.
          썸뷰에서는 누구나 쉽게, 빠르게, 정확하게 썸네일의 실사용 모습을 확인할 수 있습니다.
        </p>

        <div className="space-y-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl">①</span>
              <Upload className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900">썸네일 업로드하기</h3>
            </div>
            <p className="text-gray-600 mb-2">
              상단의 박스에 썸네일 이미지를 드래그 앤 드롭하거나, &apos;썸네일 선택하기&apos; 버튼을 클릭해 파일을 업로드하세요.
            </p>
            <p className="text-sm text-gray-500">
              지원 포맷: JPG, PNG | 권장 크기: 1280x720px | 최대 용량: 5MB
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl">②</span>
              <div className="flex space-x-1">
                <Smartphone className="h-5 w-5 text-blue-500" />
                <Monitor className="h-5 w-5 text-blue-500" />
                <Tablet className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">다양한 기기에서 미리보기 자동 생성</h3>
            </div>
            <p className="text-gray-600">
              업로드 후, 모바일·데스크톱·태블릿에서 실제 유튜브에 보여지는 방식으로 자동 미리보기가 제공됩니다.
              각 기기를 선택해 시뮬레이션을 전환해보세요.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl">③</span>
              <Edit2 className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900">제목, 길이 조정으로 상황별 테스트</h3>
            </div>
            <p className="text-gray-600 mb-6">
              기본 제공되는 영상 제목은 더블클릭해 수정할 수 있습니다.
              길이, 채널명, 조회수 등도 변경해 다양한 조건에서의 표시 상태를 테스트할 수 있어요.
            </p>
            <InputControls />
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl">④</span>
              <CheckSquare className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900">클릭률 높은 썸네일인지 체크하기</h3>
            </div>
            <p className="text-gray-600 mb-6">
              위 항목을 기준으로 직접 체크해 보면서 최적의 썸네일을 완성해 보세요.
            </p>
            <Checklist />
          </div>
        </div>

        <div className="mt-12">
          <GuideLink />
        </div>
      </div>
    </div>
  )
} 