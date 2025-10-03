import  { useState, useMemo } from 'react';
import { ColorModeContext } from './components/contexts/ColorModeContext.js';
import { LanguageContext } from './components/contexts/LanguageContext.js';
import { getAppTheme } from './theme.js';
import SectionContainer from './components/SectionContainer/SectionContainer.jsx';
import { ThemeProvider, Container, CssBaseline } from '@mui/material';

import Header from './components/Header/Header.jsx';
import ReaderImage from './components/ReaderImage/ReaderImage.jsx';


function App() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('themeMode') || 'light';
  });

  const [language, setLanguage] = useState('en-US');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const languageSettings = useMemo(
    () => ({
      language,
      handleLanguageChange: (_, newLanguage) => {
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
            <SectionContainer py={0} maxWidth="100%" mx="auto">
            <Header />
          </SectionContainer>
            <Container >
              <ReaderImage />
            </Container>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </LanguageContext.Provider>
  );
}
export default App;
