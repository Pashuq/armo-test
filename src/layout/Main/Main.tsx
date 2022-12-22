import { Container } from "@mui/material";
import { useEffect } from "react";
import UsersTable from "../../components/UsersTable/UsersTable";
import { useAppDispatch } from "../../redux-hooks";
import { fetchAllUsers } from "../../features/users/asyncUsersActions";

function Main() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
      <UsersTable />
    </Container>
  );
}

export default Main;
