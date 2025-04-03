"use client"

import { create } from "zustand"

type AppState = {
  thumbnail: string | null
  setThumbnail: (url: string | null) => void
}

export const useAppStore = create<AppState>((set) => ({
  thumbnail: null,
  setThumbnail: (url) => set({ thumbnail: url }),
}))

