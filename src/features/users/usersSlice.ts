import { createSlice } from "@reduxjs/toolkit";
import { IUsersSliceState } from "../../types";
import {
  createUser,
  deleteUserById,
  fetchAllUsers,
  updateUserById,
} from "./asyncUsersActions";

const initialState: IUsersSliceState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  isSubmited: false,
  message: "",
  users: [],
};

const usersSlice = createSlice({
  name: "@users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.isSubmited = false;
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
      })
      .addCase(updateUserById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.isSubmited = false;
        state.message = "";
      })
      .addCase(updateUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(updateUserById.fulfilled, (state, action) => {
        state.isSubmited = true;
        state.isLoading = false;
        state.isSuccess = true;
        let idx = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        state.users[idx] = action.payload;
      })
      .addCase(deleteUserById.pending, (state) => {
        state.isSubmited = false;
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(deleteUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(deleteUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        let idx = state.users.findIndex(
          (user) => user.id === Number(action.payload)
        );
        state.users.splice(idx, 1);
      })
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.isSubmited = false;
        state.message = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isSubmited = true;
        state.isLoading = false;
        state.isSuccess = true;
        state.users.push(action.payload);
      });
  },
});
export default usersSlice.reducer;
export const {} = usersSlice.actions;
