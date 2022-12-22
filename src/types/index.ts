export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  access: string;
  birthDate: number;
}

export interface IUsersSliceState {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
  users: IUser[];
}

export type Order = "asc" | "desc";
