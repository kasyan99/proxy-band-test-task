import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

// Define a type for the slice state
interface CounterState {
  users: any
}

// Define the initial state using that type
const initialState: CounterState = {
  users: [],
}

export const Slice = createSlice({
  name: "Slice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default Slice.reducer
