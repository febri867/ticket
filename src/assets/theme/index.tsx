import { createTheme } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import palette from './palette';
import customComponent from './custom-component';

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
  customComponent,
});

export const ThemeProvider = (props) => {
  return <EmotionThemeProvider theme={theme}>{props.children}</EmotionThemeProvider>;
};
