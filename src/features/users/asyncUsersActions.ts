import { createAsyncThunk } from "@reduxjs/toolkit";

import usersService from "./usersService";
import { IUser, IUsersSliceState } from "../../types/index";

export const fetchAllUsers = createAsyncThunk<
  IUser[],
  undefined,
  {
    state: {
      users: IUsersSliceState;
    };
  }
>(
  "@@todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      return (await usersService.fetchUsers()) as IUser[];
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { isLoading } = getState().users;
      if (isLoading) {
        return false;
      }
    },
  }
);
