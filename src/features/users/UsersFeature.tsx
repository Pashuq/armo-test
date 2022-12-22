import { useAppSelector } from "../../redux-hooks";
import { Skeleton } from "@mui/material";

import UsersTable from "../../components/UsersTable/UsersTable";
import { selectUsersState } from "./usersSelectors";
import { IUser } from "../../types";

function UsersFeature() {
  const { users, isError, isLoading, isSuccess } =
    useAppSelector(selectUsersState);

  function createData(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    access: string,
    birthDate: string
  ): IUser {
    return {
      id,
      firstName,
      lastName,
      email,
      access,
      birthDate,
    };
  }

  const rows = [
    createData(6, "ARRA", "305", "3.7", "true", "0"),
    createData(7, "BARRA", "452", "25.0", "true", "4"),
    createData(8, "CARRA", "262", "16.0", "true", "77"),
    createData(9, "DARRA", "159", "6.0", "true", "12"),
    createData(10, "GARRA", "356", "16.0", "true", "7"),
    createData(11, "MARRA", "408", "3.2", "true", "7"),
    createData(12, "PARRA", "237", "9.0", "true", "7"),
    createData(13, "FARRA", "375", "0.0", "true", "7"),
    createData(14, "TARRA", "518", "26.0", "true", "7"),
    createData(15, "OARRA", "392", "0.2", "true", "7"),
    createData(16, "REAARRA", "318", "0", "true", "7"),
    createData(17, "TRARA", "360", "19.0", "true", "7"),
    createData(18, "STARA", "437", "18.0", "true", "7"),
  ];

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
