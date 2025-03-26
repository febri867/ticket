import { createTheme } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import palette from './palette';
import React from 'react';

// [NOTE] Material UI default theme object https://mui.com/material-ui/customization/default-theme/
const theme = createTheme({
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export const ThemeProvider = (props) => {
  return <EmotionThemeProvider theme={theme}>{props.children}</EmotionThemeProvider>;
};
