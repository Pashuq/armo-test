import { useEffect } from "react";
import { Container } from "@mui/material";

import { useAppDispatch } from "../../redux-hooks";
import { fetchAllUsers } from "../../features/users/asyncUsersActions";
import UsersFeature from "../../features/users/UsersFeature";

function Main() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
      <UsersFeature />
    </Container>
  );
}

export default Main;
