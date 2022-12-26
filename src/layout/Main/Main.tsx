import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import { useAppDispatch } from "../../redux-hooks";
import { fetchAllUsers } from "../../features/users/asyncUsersActions";
import UsersFeature from "../../features/users/UsersFeature";

function Main() {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
      <Outlet />
    </Container>
  );
}

export default Main;
