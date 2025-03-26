import { Theme as MuiTheme, ThemeOptions as MuiThemeOptions } from '@mui/material/styles';

import { PaletteOptions, Palette } from './palette/type';
import { CustomComponentOptions, CustomComponent } from './custom-component/type';

export interface ThemeOptions extends MuiThemeOptions {
  palette?: PaletteOptions;
  customComponent?: CustomComponentOptions;
}

export interface Theme extends MuiTheme {
  palette: Palette;
  customComponent: CustomComponent;
}
