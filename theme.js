import { createTheme } from "@mui/material/styles";

const myCustomTheme = createTheme({
  palette: {
    primary: {
      main: "#08191fff",
    },
    secondary: {
      main: "#2e9ab5ff",
    },
    dark: {
      main: "#30363d",
    },
    background: {
      default: "#f3f4f6",
      paper: "#ffffff",
    },
    text: {
      primary: "#30363d",
      secondary: "#4d535b",
    },
  },
  typography: {
    fontFamily: ['"Roboto"', "sans-serif"].join(","),
  },
  gradients: {
    headerFooter: `linear-gradient(
      75deg,
      #4a93ff,
      #00aef6,
      #00c3e5,
      #00d7d8,
      #00ebc3,
      #28ff90,
      #b4ff72,
      #f9ff28
    )`,
  },
});

export default myCustomTheme;
