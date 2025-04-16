import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";

// Async action: Tăng giá trị sau 1 giây
export const incrementAsync = createAsyncThunk(
  "calculator/incrementAsync",
  async (amount) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(amount), 1000)
    );
  }
);

// Tạo slice
const calculatorSlice = createSlice({
  name: "calculator",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

// Export actions
export const { increment, decrement } = calculatorSlice.actions;
export default calculatorSlice.reducer;