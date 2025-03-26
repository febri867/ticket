import { Theme, ThemeOptions } from './src/assets/theme/type';

declare module '@mui/material/styles' {
  export function createTheme(options?: ThemeOptions): Theme;
}
