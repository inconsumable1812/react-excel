export type Cell = number | string
export type RowData = Record<string, Cell>
export type SpreadSheet = {
  headers: {
    field: string
    header: string
  }[]
  rows: RowData[]
}
