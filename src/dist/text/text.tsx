import { ReactNode } from 'react'

import clsxm from '~/utils/clsxm'

export interface PropsText {
  children: ReactNode
  className?: string
  fontSize?: OptionsFontSize
  variant?: VariantFont
}

export type OptionsFontSize = (typeof fontSize)[number]

export type VariantFont = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

export const ColorsFont: Record<VariantFont, { color: string }> = {
  primary: {
    color: 'violet-600',
  },
  secondary: {
    color: 'gray-700',
  },
  success: {
    color: 'green-400',
  },
  danger: {
    color: 'red-500',
  },
  warning: {
    color: 'yellow-400',
  },
  info: {
    color: 'sky-400',
  },
  light: {
    color: 'slate-300',
  },
  dark: {
    color: 'neutral-800',
  },
}

export const fontSize = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'] as const

export const FontSizeText = fontSize.reduce((current, size) => ({ ...current, [size]: `text-${size}` }), {}) as Record<
  OptionsFontSize,
  string
>

const Text = (props: PropsText) => {
  const { children, className, fontSize = 'base', variant = 'dark' } = props
  return <p className={clsxm(FontSizeText[fontSize], ColorsFont[variant].color, className ?? '')}>{children}</p>
}

export default Text
