import { ThemeTypes } from '@shared/theme';

declare module 'styled-components/native' {
  interface DefaultTheme extends ThemeTypes {}
}
