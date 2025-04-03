"use client"

import { useState, useEffect } from "react"
import { useAppStore } from "@/lib/store"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type ReadabilityScore = {
  overall: number
  contrast: number
  textSize: number
  clutter: number
}

type ReadabilityTip = {
  type: "success" | "warning" | "info"
  title: string
  description: string
}

export function ReadabilityAnalysis() {
  const { thumbnail } = useAppStore()
  const [scores, setScores] = useState<ReadabilityScore>({
    overall: 0,
    contrast: 0,
    textSize: 0,
    clutter: 0,
  })
  const [tips, setTips] = useState<ReadabilityTip[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  useEffect(() => {
    if (thumbnail) {
      analyzeReadability()
    }
  }, [thumbnail])

  const analyzeReadability = () => {
    // In a real implementation, this would analyze the actual image
    // For this demo, we'll simulate analysis with random scores
    setIsAnalyzing(true)

    // Simulate API call delay
    setTimeout(() => {
      const mockScores = {
        overall: Math.floor(Math.random() * 40) + 60, // 60-100
        contrast: Math.floor(Math.random() * 40) + 60,
        textSize: Math.floor(Math.random() * 40) + 60,
        clutter: Math.floor(Math.random() * 40) + 60,
      }

      setScores(mockScores)

      // Generate tips based on scores
      const newTips: ReadabilityTip[] = []

      if (mockScores.contrast < 70) {
        newTips.push({
          type: "warning",
          title: "대비 개선 필요",
          description:
            "텍스트와 배경 간의 대비가 낮습니다. 텍스트를 더 읽기 쉽게 만들기 위해 그림자 효과나 반투명 오버레이를 사용해 보세요.",
        })
      } else {
        newTips.push({
          type: "success",
          title: "좋은 대비",
          description: "썸네일의 요소 간 대비가 좋아 읽기 쉽습니다.",
        })
      }

      if (mockScores.textSize < 75) {
        newTips.push({
          type: "warning",
          title: "텍스트 크기 개선 필요",
          description:
            "모바일 시청자에게 텍스트가 너무 작게 보일 수 있습니다. 더 큰 텍스트를 사용하거나 단어 수를 줄이는 것이 좋습니다.",
        })
      }

      if (mockScores.clutter < 80) {
        newTips.push({
          type: "warning",
          title: "시각적 혼잡도 줄이기",
          description: "썸네일에 너무 많은 요소가 있어 주목도가 분산될 수 있습니다. 하나의 명확한 메시지에 집중하세요.",
        })
      }

      newTips.push({
        type: "info",
        title: "유튜브 추천사항",
        description: "유튜브는 높은 대비, 최소한의 텍스트, 명확한 초점을 가진 썸네일을 권장합니다.",
      })

      setTips(newTips)
      setIsAnalyzing(false)
    }, 1500)
  }

  if (!thumbnail) {
    return (
      <div className="text-center py-8">
        <Info className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-700 mb-2">업로드된 썸네일 없음</h3>
        <p className="text-gray-500">가독성 분석을 보려면 썸네일을 업로드하세요</p>
      </div>
    )
  }

  if (isAnalyzing) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <h3 className="text-lg font-medium text-gray-700 mb-2">썸네일 분석 중</h3>
        <p className="text-gray-500">잠시만 기다려주세요...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">전체 점수</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">{scores.overall}%</span>
              <Progress value={scores.overall} className="h-2 w-24" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">대비</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">{scores.contrast}%</span>
              <Progress value={scores.contrast} className="h-2 w-24" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">텍스트 크기</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">{scores.textSize}%</span>
              <Progress value={scores.textSize} className="h-2 w-24" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">시각적 명확성</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">{scores.clutter}%</span>
              <Progress value={scores.clutter} className="h-2 w-24" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium">개선 팁</h3>
        {tips.map((tip, index) => (
          <Alert key={index} variant={tip.type === "warning" ? "destructive" : "default"}>
            {tip.type === "success" && <CheckCircle className="h-4 w-4" />}
            {tip.type === "warning" && <AlertTriangle className="h-4 w-4" />}
            {tip.type === "info" && <Info className="h-4 w-4" />}
            <AlertTitle>{tip.title}</AlertTitle>
            <AlertDescription>{tip.description}</AlertDescription>
          </Alert>
        ))}
      </div>
    </div>
  )
}

