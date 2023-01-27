import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { getData } from './thunks/getData'

const slice = createSlice({
  name: 'spreadSheet',
  initialState,
  reducers: {
    changeHeaders(state, action) {
      state.spreadSheet.headers = action.payload
    },
    changeRows(state, action) {
      state.spreadSheet.rows = action.payload
    },
    changeSpreadSheet(state, action) {
      state.spreadSheet.headers = action.payload.headers
      state.spreadSheet.rows = action.payload.rows
    },
    clearSpreadSheet(state) {
      state.spreadSheet.headers = []
      state.spreadSheet.rows = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false
        state.spreadSheet = action.payload
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Ошибка'
      })
  }
})

const { changeHeaders, changeRows, clearSpreadSheet, changeSpreadSheet } =
  slice.actions

const { reducer } = slice

export {
  reducer,
  changeHeaders,
  changeRows,
  clearSpreadSheet,
  changeSpreadSheet,
  getData
}
