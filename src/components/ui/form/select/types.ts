interface DataSelect {
  value: string
  text: string
}

interface PropSelectInput {
  iconCheck?: JSX.Element
  item?: (
    data: {
      value: string
      text: string
    },
    iconCheck: JSX.Element
  ) => JSX.Element
  data: DataSelect[]
  placeholder?: string
  id?: string
  name?: string
  className?: string
  onChange?(value: DataSelect): void
}

interface PropSelectItem {
  value: DataSelect
  iconCheck: React.ReactElement
  className?: string
}

export type { DataSelect, PropSelectInput, PropSelectItem }
