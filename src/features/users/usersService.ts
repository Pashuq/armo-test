import axios from "axios";
import { HOST, USERS } from "../../api/config";
import { IUser, IUserData, IUserDataToBody } from "../../types/index";

const createUser = async (userData: IUserDataToBody) => {
  const response = await axios.post(HOST + USERS, userData);
  return response.data as IUser;
};

const fetchUsers = async () => {
  const response = await axios.get(HOST + USERS);
  return response.data as IUser[];
};

const updateUser = async (userData: IUserData, id: string) => {
  const response = await axios.patch(HOST + USERS + "/" + id, userData);
  return response.data as IUser;
};

const deleteUser = async (id: string) => {
  const response = await axios.delete(HOST + USERS + "/" + id);

  return response.data;
};

const usersService = {
  createUser,
  fetchUsers,
  updateUser,
  deleteUser,
};

export default usersService;
