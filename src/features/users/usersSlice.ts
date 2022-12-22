import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersSliceState } from "../../types";
import { fetchAllUsers } from "./asyncUsersActions";

const initialState: IUsersSliceState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  users: [],
};

const usersSlice = createSlice({
  name: "@users",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {},
    toggleTodo: (state, action: PayloadAction<[]>) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      });
  },
});
export default usersSlice.reducer;
export const { addTodo, toggleTodo } = usersSlice.actions;
