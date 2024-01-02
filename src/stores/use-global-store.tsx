import { nav } from "@/config"
import { type Section } from "@/types"
import { create } from "zustand"

interface StoreState {
    activeSection: Section
    setActiveSection: (activeSection: Section) => void
    linkLastClickedAt: number
    setlinkLastClickedAt: (linkLastClickedAt: number) => void
}

export const useGlobalStore = create<StoreState>()((set) => ({
    activeSection: nav[0].label,
    setActiveSection: (activeSection) => set(() => ({ activeSection })),
    linkLastClickedAt: 0,
    setlinkLastClickedAt: (linkLastClickedAt) =>
        set(() => ({ linkLastClickedAt })),
}))
