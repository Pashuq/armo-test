import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { Skeleton } from "@mui/material";

import UsersTable from "./UsersTable";
import { selectUsersState } from "./usersSelectors";
import { fetchAllUsers } from "./asyncUsersActions";
import TableSkeleton from "../../components/TableSkeleton/TableSkeleton";

function UsersFeature() {
  const dispatch = useAppDispatch();

  const { users, isError, isLoading, isSuccess, message } =
    useAppSelector(selectUsersState);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const rows = users.map((user) => {
    return {
      ...user,
      access: `${user.access}`,
      birthDate: Date.parse(`${user.birthDate}`),
    };
  });

  return (
    <>
      {isLoading && <TableSkeleton />}
      {users.length === 0 && isSuccess && <p>users not found</p>}
      {isError && <p>{message}</p>}
      {isSuccess && <UsersTable rows={rows} />}
    </>
  );
}

export default UsersFeature;
