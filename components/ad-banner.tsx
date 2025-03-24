"use client"

type AdBannerProps = {
  position: "top" | "side" | "bottom"
}

export function AdBanner({ position }: AdBannerProps) {
  // 광고 배너가 비활성화되었으므로 빈 div를 반환합니다
  // 레이아웃 유지를 위해 최소한의 공간만 차지하도록 설정합니다
  // position prop을 data-position 속성으로 사용하여 ESLint 에러 해결
  return <div className="hidden" data-position={position}>{/* 광고 배너 비활성화됨 */}</div>
}

