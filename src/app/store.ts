import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as spreadSheetReducer } from '../store/spreadSheet/slice'

export const store = configureStore({
  reducer: combineReducers({ spreadSheet: spreadSheetReducer }),
  devTools: true
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
