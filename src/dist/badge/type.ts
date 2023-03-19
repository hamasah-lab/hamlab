export type VariantBadge = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

export const ColorsBadge: Record<VariantBadge, { color: string; bgColor: string }> = {
  primary: {
    color: 'text-white',
    bgColor: 'bg-violet-600',
  },
  secondary: {
    color: 'text-white',
    bgColor: 'bg-gray-700',
  },
  success: {
    color: 'text-white',
    bgColor: 'bg-green-400',
  },
  danger: {
    color: 'text-white',
    bgColor: 'bg-red-500',
  },
  warning: {
    color: 'text-white',
    bgColor: 'bg-yellow-400',
  },
  info: {
    color: 'text-white',
    bgColor: 'bg-sky-400',
  },
  light: {
    color: 'colors-custom-black',
    bgColor: 'bg-slate-300',
  },
  dark: {
    color: 'text-white',
    bgColor: 'bg-neutral-800',
  },
}
