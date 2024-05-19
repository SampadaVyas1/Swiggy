import { createSlice } from "@reduxjs/toolkit";

const initialState = [{}];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push("kjk");
    },
  },
});
