import { Box, Container, Typography } from "@mui/material";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

function Layout() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Main />
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
