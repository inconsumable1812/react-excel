import { State } from './types'

export const initialState: State = {
  spreadSheet: {
    headers: [],
    rows: []
  },
  error: '',
  isLoading: false
}
