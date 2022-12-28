import { createTheme, lightTheme } from '@backstage/theme';

export const rainbowTheme = createTheme({
  palette: lightTheme.palette,
  fontFamily: 'Comic Sans MS',
  defaultPageTheme: 'home',
});
