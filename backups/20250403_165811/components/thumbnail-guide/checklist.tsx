"use client"

import { useState } from 'react'
import { Check } from 'lucide-react'

interface ChecklistProps {
  onComplete?: (isComplete: boolean) => void
}

export function Checklist({ onComplete }: ChecklistProps) {
  const [checks, setChecks] = useState({
    textSize: false,
    textAmount: false,
    contrast: false,
    faceExpression: false
  })

  const handleCheckChange = (key: keyof typeof checks) => {
    const newChecks = {
      ...checks,
      [key]: !checks[key]
    }
    setChecks(newChecks)
    
    // 모든 체크가 완료되었는지 확인
    const isComplete = Object.values(newChecks).every(Boolean)
    onComplete?.(isComplete)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="textSize"
          checked={checks.textSize}
          onChange={() => handleCheckChange('textSize')}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="textSize" className="text-sm text-gray-700">
          텍스트 크기가 충분히 큰가요?
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="textAmount"
          checked={checks.textAmount}
          onChange={() => handleCheckChange('textAmount')}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="textAmount" className="text-sm text-gray-700">
          텍스트가 너무 많지 않나요?
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="contrast"
          checked={checks.contrast}
          onChange={() => handleCheckChange('contrast')}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="contrast" className="text-sm text-gray-700">
          배경과 텍스트 색상 대비는 충분한가요?
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="faceExpression"
          checked={checks.faceExpression}
          onChange={() => handleCheckChange('faceExpression')}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="faceExpression" className="text-sm text-gray-700">
          인물 표정이 잘 보이나요?
        </label>
      </div>

      {Object.values(checks).every(Boolean) && (
        <div className="mt-4 p-3 bg-green-50 rounded-md flex items-center space-x-2">
          <Check className="h-5 w-5 text-green-500" />
          <span className="text-sm text-green-700">썸네일 점검 완료!</span>
        </div>
      )}
    </div>
  )
} 