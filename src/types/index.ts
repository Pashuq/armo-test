export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  access: string;
  birthDate: string;
}

export interface IUsersSliceInitialState {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
  users: IUser[];
}
