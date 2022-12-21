import { AppBar, Box, Container, Toolbar } from "@mui/material";
import People from "@mui/icons-material/People";
import HeaderNavigation from "../../components/HeaderNavigaion/HeaderNavigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Container component="main" maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link to="/">
              <People
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  height: "35px",
                  width: "35px",
                }}
              />
            </Link>

            <HeaderNavigation />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
