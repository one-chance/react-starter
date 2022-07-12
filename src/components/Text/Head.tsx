import { CSSObject, jsx } from '@emotion/react';
import { HTMLAttributes } from 'react';

import { colors } from '@styles/Theme';

export type Props = (
  | HTMLAttributes<HTMLHeadingElement>
  | HTMLHeadingElement
) & {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  // component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
};

export default ({ h1, h2, h3, h4, h5, h6, color, ...props }: Props) => {
  const component =
    (h1 && `h1`) ||
    (h2 && `h2`) ||
    (h3 && `h3`) ||
    (h4 && `h4`) ||
    (h5 && `h5`) ||
    (h6 && `h6`);

  const css: CSSObject = {
    margin: 0,
    ...colors[color || `black`],
    // ...{ fontFamily: 'Noto Sans' }
  };

  return jsx(component || `h1`, { css, ...props });
};
