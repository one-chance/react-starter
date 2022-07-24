import { jsx } from '@emotion/react';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export default ({ ...props }: AnchorProps) => jsx(`a`, { ...props });
