import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { defaults } from 'lodash';

import { initialState } from './initialState'

const slice = createSlice({
  name: 'spreadSheet',
  initialState,
  reducers: {
    changeHeaders(state, action) {
      state.headers = action.payload
    },
    changeRows(state, action) {
      state.rows = action.payload
    },
    clearSpreadSheet(state) {
      state.headers = []
      state.rows = []
    }
  }
})

const { changeHeaders, changeRows, clearSpreadSheet } = slice.actions

const { reducer } = slice

export { reducer, changeHeaders, changeRows, clearSpreadSheet }
