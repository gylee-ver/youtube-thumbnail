"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function GuideLink() {
  return (
    <Link 
      href="/tips"
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
    >
      <span>썸네일 제작 가이드 더 보기</span>
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  )
} 