import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "John Travolta" },
  { id: "1", name: "Keanu Reeves" },
  { id: "2", name: "Sean Penn" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
