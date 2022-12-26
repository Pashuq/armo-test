import moment from "moment";
import React from "react";
import UserForm from "../features/users/UsersForm";
import { createUser } from "../features/users/asyncUsersActions";
import { useAppDispatch } from "../redux-hooks";
import { IUser } from "../types";

function SinglePage() {
  const dispatch = useAppDispatch();

  const prepareData = (data: Omit<IUser, "id">) => {
    return {
      ...data,
      birthDate: moment(data.birthDate).format("LLL"),
    };
  };

  const addUser = (data: any) => {
    const newData = prepareData(data);
    dispatch(createUser({ userData: newData }));
  };

  return (
    <>
      <UserForm handleSubmitForm={addUser} setting="create" />
    </>
  );
}

export default SinglePage;
