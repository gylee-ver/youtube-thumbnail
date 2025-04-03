"use client"

import { create } from "zustand"
import type { ThumbnailMetadata } from "./types/thumbnail"

type AppState = {
  thumbnail: string | null
  setThumbnail: (url: string | null) => void
  metadata: ThumbnailMetadata
  setMetadata: (metadata: Partial<ThumbnailMetadata>) => void
}

export const useAppStore = create<AppState>((set) => ({
  thumbnail: null,
  setThumbnail: (url) => set({ thumbnail: url }),
  metadata: {
    title: "",
    channelName: "",
    views: "",
    duration: ""
  },
  setMetadata: (newMetadata) => set((state) => ({
    metadata: { ...state.metadata, ...newMetadata }
  })),
}))

