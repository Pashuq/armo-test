import { useAppSelector } from "../../redux-hooks";
import { Skeleton } from "@mui/material";

import UsersTable from "../../components/UsersTable/UsersTable";
import { selectUsersState } from "./usersSelectors";

function UsersFeature() {
  const { users, isError, isLoading, isSuccess } =
    useAppSelector(selectUsersState);

  return (
    <>
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%" height={"656px"} />
      ) : (
        <UsersTable />
      )}
    </>
  );
}

export default UsersFeature;
