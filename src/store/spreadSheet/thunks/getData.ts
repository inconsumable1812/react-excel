import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchData } from 'api/fetchData/fetchData'

export const getData = createAsyncThunk('fetchData', async () => {
  const result = await fetchData()

  if (result instanceof Error) {
    return Promise.reject(result)
  }

  return result
})
