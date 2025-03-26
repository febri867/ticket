import '@emotion/react';

import { Theme as CustomTheme } from '@/theme/type';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
