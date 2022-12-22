import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSliceReducer from "./features/users/usersSlice";

const rootReducer = combineReducers({
  users: usersSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
