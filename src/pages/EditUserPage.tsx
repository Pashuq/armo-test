import { useParams, useNavigate } from "react-router-dom";

import UserForm from "../features/users/UsersForm";
import { selectUsersState } from "../features/users/usersSelectors";
import { useAppDispatch, useAppSelector } from "../redux-hooks";
import { useEffect } from "react";
import { IUser } from "../types/index";
import moment from "moment";
import { updateUserById } from "../features/users/asyncUsersActions";

function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(selectUsersState);

  const data =
    id &&
    users.length &&
    users.find((user) => {
      return user.id === Number(id);
    });

  useEffect(() => {
    if (!users.length) {
      navigate("/");
    }
  }, []);

  const prepareData = (data: IUser) => {
    return {
      ...data,
      birthDate: moment(data.birthDate).format("LLL"),
      id: id ? Number(id) : Number(0),
    };
  };

  const EditUser = (data: IUser) => {
    const newData = prepareData(data);

    if (id) {
      dispatch(updateUserById({ id, userData: newData }));
    }
  };

  return (
    <>
      {data && (
        <UserForm handleSubmitForm={EditUser} setting="edit" userInfo={data} />
      )}
    </>
  );
}

export default EditUserPage;
