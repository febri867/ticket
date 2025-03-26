import {
  Palette as MuiPalette,
  PaletteOptions as MuiPaletteOptions,
  PaletteColor as MuiPaletteColor,
} from '@mui/material/styles';

interface PaletteColor extends MuiPaletteColor {
  lighter?: string;
}

export interface PaletteOptions extends MuiPaletteOptions {
  primary: PaletteColor;
  secondary: PaletteColor;
  cactus?: PaletteColor;
  mist?: PaletteColor;
  ashpalth?: PaletteColor;
  yellow?: PaletteColor;
  red?: PaletteColor;
}

export interface Palette extends MuiPalette {
  primary: PaletteColor;
  secondary: PaletteColor;
  cactus: PaletteColor;
  mist: PaletteColor;
  ashpalth: PaletteColor;
  yellow: PaletteColor;
  red: PaletteColor;
}
