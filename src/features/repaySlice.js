import { createSlice } from '@reduxjs/toolkit'

export const repaySlice = createSlice({
  name: 'repay',
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state, repay) => {
      state.value.push(repay)
    },
    decrement: (state, repay) => {
      state.value.indexOf(state.value(repay), 1)
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = repaySlice.actions

export default repaySlice.reducer