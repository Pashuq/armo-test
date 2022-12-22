import { useAppSelector } from "../../redux-hooks";
import { Skeleton } from "@mui/material";

import UsersTable from "./UsersTable";
import { selectUsersState } from "./usersSelectors";
import { IUser } from "../../types";

function UsersFeature() {
  const { users, isError, isLoading, isSuccess } =
    useAppSelector(selectUsersState);

  const rows = users.map((user) => {
    return {
      ...user,
      access: `${user.access}`,
      birthDate: Date.parse(`${user.birthDate}`),
    };
  });

  return (
    <>
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%" height={"656px"} />
      ) : (
        <UsersTable rows={rows} />
      )}
    </>
  );
}

export default UsersFeature;
