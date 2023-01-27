import { SpreadSheet } from 'types'
import { delay } from 'utils'

export const fetchData = async (): Promise<SpreadSheet | Error> => {
  try {
    const response = await fetch('/get-data')

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }

    await delay(300) // for demonstration

    const data = await response.json()

    return data
  } catch (error) {
    return <globalThis.Error>error
  }
}
