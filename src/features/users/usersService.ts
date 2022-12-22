import axios from "axios";
import { HOST, USERS } from "../../api/config";

//fetch users
const fetchUsers = async () => {
  const response = await axios.get(HOST + USERS);
  return response.data;
};

const usersService = {
  fetchUsers,
};

export default usersService;
