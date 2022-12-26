import { createAsyncThunk } from "@reduxjs/toolkit";

import usersService from "./usersService";
import {
  IUser,
  IUserData,
  IUserDataToBody,
  IUsersSliceState,
} from "../../types/index";
import { _ActionCreatorWithPreparedPayload } from "@reduxjs/toolkit/dist/createAction";

export const fetchAllUsers = createAsyncThunk<
  IUser[],
  undefined,
  {
    state: {
      users: IUsersSliceState;
    };
  }
>(
  "@@users/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      return (await usersService.fetchUsers()) as IUser[];
    } catch (error) {
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

export const createUser = createAsyncThunk<
  IUser,
  {
    userData: IUserDataToBody;
  }
>("@@users/createUser", async ({ userData }, { rejectWithValue }) => {
  try {
    const response = await usersService.createUser(userData);
    return response;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return rejectWithValue(message);
  }
});

export const updateUserById = createAsyncThunk<
  IUser,
  { id: string; userData: IUserData }
>("@@users/updateUserById", async ({ userData, id }, { rejectWithValue }) => {
  try {
    const response = await usersService.updateUser(userData, id);
    return response;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return rejectWithValue(message);
  }
});

export const deleteUserById = createAsyncThunk<string, { id: string }>(
  "@@users/deleteById",
  async ({ id }, { rejectWithValue }) => {
    try {
      await usersService.deleteUser(id);
      return id;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);
