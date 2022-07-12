import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export default ({ children, ...props }: AnchorProps) => (
  <a {...props}>{children}</a>
);
