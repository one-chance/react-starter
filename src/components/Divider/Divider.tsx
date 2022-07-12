import { CSSObject, jsx } from '@emotion/react';
import { HTMLAttributes } from 'react';

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  size?: number;
  margin?: string;
  color?: string;
  round?: boolean;
  vertical?: boolean;
};

export default ({
  size,
  margin,
  color,
  round,
  vertical,
  ...props
}: DividerProps) => {
  const css: CSSObject = {
    border: `none`,
    backgroundColor: color || `#000000`,
    margin: margin || 0,
    ...(vertical
      ? { width: size || `1px`, height: `auto` }
      : { width: `auto`, height: size || `1px` }),
    ...(round && { borderRadius: `10px` }),
  };

  return jsx(`hr`, { css, ...props });
};
