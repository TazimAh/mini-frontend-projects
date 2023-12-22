import { Box, Container, Typography } from "@mui/material";
import Game from "./components/Game";

function App() {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "purple",
          height: "100vh",
        }}
        maxWidth="xl"
      >
        <Box>
          <Typography
            component="h2"
            variant="h2"
            textAlign="center"
            fontWeight="400"
            color="white"
          >
            Tik Tak Toe{" "}
            <span
              style={{
                fontSize: 20,
              }}
            >
              by Tazim
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Game />
        </Box>
      </Container>
    </>
  );
}

export default App;
