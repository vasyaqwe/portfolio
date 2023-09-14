import { nav } from "@/config"
import { Section } from "@/types"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface StoreState {
    activeSection: Section
    setActiveSection: (activeSection: Section) => void
    linkLastClickedAt: number
    setlinkLastClickedAt: (linkLastClickedAt: number) => void
}

export const useGlobalStore = create<StoreState>()(
    persist(
        (set) => ({
            activeSection: nav[0].label,
            setActiveSection: (activeSection) => set(() => ({ activeSection })),
            linkLastClickedAt: 0,
            setlinkLastClickedAt: (linkLastClickedAt) =>
                set(() => ({ linkLastClickedAt })),
        }),
        {
            name: "store",
            storage: createJSONStorage(() => localStorage),
        }
    )
)
