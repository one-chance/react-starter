import { jsx } from '@emotion/react';
import { forwardRef, HTMLAttributes } from 'react';

export type ViewProps = HTMLAttributes<HTMLDivElement>;

export default forwardRef<HTMLDivElement, ViewProps>(
  ({ ...props }: ViewProps, ref) => jsx(`div`, { ref, ...props }),
);
