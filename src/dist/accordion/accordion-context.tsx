'use client'
import React, { createContext, useContext, useState } from 'react'

interface AccordionContext {
  hasOpen: number | undefined
  setHasOpen: (key: number | undefined) => void
}

const AccordionContext = createContext<AccordionContext | undefined>(undefined)

const LayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasOpen, setHasOpen] = useState<number | undefined>(undefined)

  return <AccordionContext.Provider value={{ hasOpen, setHasOpen }}>{children}</AccordionContext.Provider>
}

export const useAccordionContext = (): AccordionContext | undefined => {
  const context = useContext(AccordionContext)
  return context
}

export default LayoutContextProvider
