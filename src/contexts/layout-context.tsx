'use client'
import React, { createContext, useContext, useState } from 'react'

interface LayoutContext {
  isSidebarOpen: boolean
  sidebarOpenToggle: () => void
}

const LayoutContext = createContext<LayoutContext | undefined>(undefined)

const LayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const sidebarOpenToggle = (): void => {
    setIsSidebarOpen(prev => !prev)
  }

  return <LayoutContext.Provider value={{ isSidebarOpen, sidebarOpenToggle }}>{children}</LayoutContext.Provider>
}

export const useLayoutContext = (): LayoutContext => {
  const context = useContext(LayoutContext)

  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutContextProvider')
  }

  return context
}

export default LayoutContextProvider
