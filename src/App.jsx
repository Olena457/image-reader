import { useState, useMemo, lazy, Suspense } from 'react';
import { ColorModeContext } from './components/contexts/ColorModeContext.js';
import { LanguageContext } from './components/contexts/LanguageContext.js';
import { getAppTheme } from './theme.js';
import SectionContainer from './components/SectionContainer/SectionContainer.jsx';
import {
  ThemeProvider,
  Container,
  CssBaseline,
  CircularProgress,
  Box,
} from '@mui/material';

import Header from './components/Header/Header.jsx';

const LazyReaderImage = lazy(() =>
  import('./components/ReaderImage/ReaderImage.jsx')
);

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
          <Container>
            <Suspense
              fallback={
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                  <CircularProgress />
                </Box>
              }
            >
              <LazyReaderImage />
            </Suspense>
          </Container>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </LanguageContext.Provider>
  );
}
export default App;
