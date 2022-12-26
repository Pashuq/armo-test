import { Box, Container, Link, Typography } from "@mui/material";
import { AiOutlineGithub, AiOutlineProfile } from "react-icons/ai";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          sx={{ display: "flex", gap: "2em", justifyContent: "center" }}
        >
          <Link
            target={"_blank"}
            href="https://github.com/Pashuq"
            sx={{ display: "flex", gap: "0.3em", alignItems: "center" }}
          >
            <AiOutlineGithub />
            Pashuq
          </Link>

          <Link
            target={"_blank"}
            href="https://hh.ru/resume/bb84e0e8ff0b54c42b0039ed1f4c6943595667"
            sx={{ display: "flex", gap: "0.3em", alignItems: "center" }}
          >
            <AiOutlineProfile />
            resume
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
