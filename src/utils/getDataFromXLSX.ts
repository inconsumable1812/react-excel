import { read, utils } from 'xlsx'
import { convertToNumber } from './convertToNumber'

export async function getDataFromXLSX(files: File[]) {
  const file = files[0]
  const dataBuffer = await file.arrayBuffer()
  const workbook = read(dataBuffer, {
    type: 'binary',
    cellText: false,
    cellDates: true
  })

  const sheet = workbook.Sheets[workbook.SheetNames[0]]
  const data = utils.sheet_to_json<string[]>(sheet, {
    header: 1,
    dateNF: 'dd"."mm"."yyyy',
    raw: false
  })
  const preparedData = data.map((el) => el.map(convertToNumber))

  return preparedData
}
