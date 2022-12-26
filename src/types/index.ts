export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  access: string;
  birthDate: number;
}

export interface IUserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  access: string;
  birthDate: string;
}

export interface IUsersSliceState {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isSubmited: boolean;
  message: string;
  users: IUser[];
}

export interface IUserDataToBody {
  birthDate: string;
  firstName: string;
  lastName: string;
  email: string;
  access: string;
}

export type Order = "asc" | "desc";
