import {
  createSlice,
  createEntityAdapter
} from '@reduxjs/toolkit'

export interface AppData {
  userName: string,
  userId: string,
  tokenId: string,
  localSessionId: string
}

const appDataEntity = createEntityAdapter<AppData>()

export const appDataSlice = createSlice({
  name: 'appData',
  initialState: {
    appData: { }
  },
  reducers: {
    test(state, action) {
      state.appData = { username: 'yo' }
    }
  }
})

export type AppDataSlice = {
  [appDataSlice.name]: ReturnType<typeof appDataSlice['reducer']>
}
