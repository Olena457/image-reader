import  { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ColorModeContext } from '../../components/contexts/ColorModeContext.js';
import { LanguageContext } from '../../components/contexts/LanguageContext.js';
import logoImage from '../../assets/logo.svg'


export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: {
              xs: '16px',
              sm: '20px',
            },
          }}
        >
          AI-Clasification
          <Box
            component="img"
            src={logoImage}
            alt="AI Icon"
            sx={{
              width: 'auto',
              ml: 0.5,
              height: {
                xs: '24px',
                sm: '34px',
              },
            }}
          />
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <ToggleButtonGroup
            value={language}
            exclusive
            onChange={handleLanguageChange}
            size="small"
            color="secondary"
            sx={{ bgcolor: 'background.default' }}
          >
            <ToggleButton value="en-US" aria-label="English">
              EN
            </ToggleButton>
            <ToggleButton value="uk-UA" aria-label="Ukrainian">
              UA
            </ToggleButton>
          </ToggleButtonGroup>

          <IconButton
            onClick={colorMode.toggleColorMode}
            aria-label="Toggle light/dark theme"
            sx={{
              boxShadow: 'none',
              outline: 'none',
              '&:hover, &:focus, &:active': {
                border: '1px solid #FFC300',
                boxShadow: '0 0 10px 0  #fdd03bff',
                outline: 'none',
              },
            }}
          >
            {theme.palette.mode === 'dark' ? (
              <Typography component="span" sx={{ fontSize: 24 }}>
                ☀️
              </Typography>
            ) : (
              <Typography component="span" sx={{ fontSize: 24 }}>
                🌙
              </Typography>
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
