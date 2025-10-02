import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ColorModeContext, LanguageContext } from './App'; 

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AI-Clasification
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
              <ToggleButton value="en-US" aria-label="English">EN</ToggleButton>
              <ToggleButton value="uk-UA" aria-label="Ukrainian">UA</ToggleButton>
            </ToggleButtonGroup>
            
            <IconButton 
              onClick={colorMode.toggleColorMode} 
              color="inherit"
              aria-label="Toggle light/dark theme"
            >
              {theme.palette.mode === 'dark' 
                ? <Typography component="span" sx={{ fontSize: 24 }}>☀️</Typography> 
                : <Typography component="span" sx={{ fontSize: 24 }}>🌙</Typography>}
            </IconButton>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
}
