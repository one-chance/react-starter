import { jsx } from '@emotion/react';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export default ({ ...props }: ImageProps) => jsx(`img`, { ...props });
