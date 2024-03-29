import { CSSObject } from '@emotion/react';

export const fontSizes: { [key: string]: CSSObject } = {
  xxSmall: { fontSize: `0.625rem` }, // 10pt
  xSmall: { fontSize: `0.75rem` }, // 12pt
  small: { fontSize: `0.875rem` }, // 14pt
  normal: { fontSize: `1rem` }, // 16pt
  large: { fontSize: `1.125rem` }, // 18pt
  xLarge: { fontSize: `1.875rem` }, // 30pt
  xxLarge: { fontSize: `2.125rem` }, //
};

export const FontSizes = {
  xxSmall: `0.625rem`, // 10pt
  xSmall: `0.75rem`, // 12pt
  small: `0.875rem`, // 14pt
  normal: `1rem`, // 16pt
  large: `1.125rem`, // 18pt
  xLarge: `1.875rem`, // 30pt
  xxLarge: `2.125rem`, //
};

export const fontWeights: { [key: string]: CSSObject } = {
  thin: { fontWeight: 100 },
  extraLight: { fontWeight: 200 },
  light: { fontWeight: 300 },
  regular: { fontWeight: 400 },
  medium: { fontWeight: 500 },
  semiBold: { fontWeight: 600 },
  bold: { fontWeight: 700 },
  extraBold: { fontWeight: 800 },
  black: { fontWeight: 900 },
};

export const FontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const Colors = {
  primary: `#358CFE`,
  black: `#515355`,
  white: `#FFFFFF`,
  green: `#79cb20`,
  red: `#FB4E4E`,
  gray: `#BEBFC0`,
};

export const BreakPoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
