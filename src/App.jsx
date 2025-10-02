
import React, { useState, useMemo } from "react";
import { ThemeProvider, Container, CssBaseline } from "@mui/material";
import { getAppTheme } from "./theme";
import Header from "./Header";
import ReaderImage from "./ReaderImage";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const LanguageContext = React.createContext({
  language: "en-US",
  setLanguage: (lang) => {},
});

function App() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("themeMode") || "light";
  });

  const [language, setLanguage] = useState("en-US");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("themeMode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const languageSettings = useMemo(
    () => ({
      language,
      handleLanguageChange: (event, newLanguage) => {
        if (newLanguage !== null) {
          setLanguage(newLanguage);
        }
      },
    }),
    [language]
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <LanguageContext.Provider value={languageSettings}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Header />

          <Container sx={{ mt: 4, mb: 4 }} maxWidth="lg">
            <ReaderImage />
          </Container>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
