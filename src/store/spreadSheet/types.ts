import { RowData } from 'types'

export type State = {
  headers: {
    field: string
    header: string
  }[]
  rows: RowData[]
}
