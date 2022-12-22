import { Container, Typography } from "@mui/material";
import UsersTable from "../../components/UsersTable/UsersTable";

function Main() {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
      <UsersTable />
    </Container>
  );
}

export default Main;
