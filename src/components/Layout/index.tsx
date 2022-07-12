import FooterRouter from '@routes/FooterRouter';
import HeaderRouter from '@routes/HeaderRouter';
import MainRouter from '@routes/MainRouter';
import GlobalStyles from '@styles/GlobalStyles';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Header = (props: Props) => (
  <header {...props} style={{ position: `sticky`, top: 0 }}>
    <HeaderRouter />
  </header>
);

export const Main = (props: Props) => (
  <main {...props} style={{ padding: `20px` }}>
    <MainRouter />
  </main>
);

export const Footer = (props: Props) => (
  <footer {...props}>
    <FooterRouter />
  </footer>
);

export const Root = ({ children }: Props) => (
  <>
    <GlobalStyles />
    {children}
  </>
);
