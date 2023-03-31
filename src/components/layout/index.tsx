import FooterRouter from '@routes/FooterRouter';
import HeaderRouter from '@routes/HeaderRouter';
import MainRouter from '@routes/MainRouter';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type LayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export const Header = (props: LayoutProps) => (
  <header {...props} style={{ position: `sticky`, top: 0 }}>
    <HeaderRouter />
  </header>
);

export const Main = (props: LayoutProps) => (
  <main {...props} style={{ padding: `20px` }}>
    <MainRouter />
  </main>
);

export const Footer = (props: LayoutProps) => (
  <footer {...props}>
    <FooterRouter />
  </footer>
);
