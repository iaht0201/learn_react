import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { palette } from './palette';
import PropTypes from "prop-types";
import { useMemo } from 'react';
import { overrides } from './overrides';

export default function ThemeProvider({ children }) {
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      // typography,
      // shadows: shadows(),
      // customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};