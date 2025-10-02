import { createTheme } from "@mui/material/styles";
import { deepOrange, teal } from "@mui/material/colors";



// Function to create theme (light/dark)
export const getAppTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#08191fff" : teal[300], // Brighter teal for dark mode
      },
      secondary: {
        main: mode === "light" ? "#2e9ab5ff" : deepOrange[500],
      },

      // Dark Mode specific colors
      ...(mode === "dark" && {
        background: {
          default: "#0a0a0a", // Deeper dark background
          paper: "#1e1e1e", // Dark background for cards and AppBar
        },
        text: {
          primary: "#ffffff",
          secondary: "#bdbdbd",
        },
      }),
      // Light Mode specific colors
      ...(mode === "light" && {
        background: {
          default: "#f5f5f5", // Very light, neutral background
          paper: "#ffffff",
        },
        text: {
          primary: "#0a0a0a",
          secondary: "#4d535b",
        },
      }),
    },
    typography: {
      fontFamily: ['"Roboto"', "sans-serif"].join(","),
    },

    gradients: {
      headerFooter: #1f1bf4ff,
    },
  });
