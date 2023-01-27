import { Cell, RowData } from 'types'

export const getRows = (data: Cell[][], cols: string[]) => {
  const rows = data.map((d) => {
    return cols.reduce((obj: RowData, c, i) => {
      const cell = d[i]
      obj[c] = cell instanceof Date ? cell.getTime() : cell
      return obj
    }, {})
  })

  return rows
}
