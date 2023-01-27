import { toCapitalize } from './toCapitalize'

export const getHeaders = (cols: string[]) => {
  const headers = cols.map((col) => ({
    field: col,
    header: toCapitalize(col.toString())
  }))

  return headers
}
