import { ThemeProvider } from "@mui/material/styles";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import myCustomTheme from "./theme.js";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={myCustomTheme}>
        <Container>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">AI-Clasification</Typography>
            </Toolbar>
          </AppBar>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
