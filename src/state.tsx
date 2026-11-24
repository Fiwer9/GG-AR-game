import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import { cosmetics } from "./data/mock"

type AppState = {
  photoUrl: string | null
  setPhotoUrl: (url: string | null) => void
  equippedId: string
  equip: (id: string) => void
  equippedTitle: string
}

const StateContext = createContext<AppState | null>(null)

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)
  const [equippedId, setEquippedId] = useState("cap")

  const value = useMemo<AppState>(() => {
    const equipped = cosmetics.find((item) => item.id === equippedId)
    return {
      photoUrl,
      setPhotoUrl,
      equippedId,
      equip: (id: string) => {
        const item = cosmetics.find((entry) => entry.id === id)
        if (item?.owned) setEquippedId(id)
      },
      equippedTitle: equipped?.title ?? "Кепка",
    }
  }, [equippedId, photoUrl])

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

export function useAppState() {
  const value = useContext(StateContext)
  if (!value) throw new Error("AppStateProvider is missing")
  return value
}
