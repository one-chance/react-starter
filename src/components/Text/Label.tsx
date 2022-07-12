import { CSSObject, jsx } from '@emotion/react';
import { forwardRef, LabelHTMLAttributes } from 'react';

export type Props = LabelHTMLAttributes<HTMLLabelElement> & {
  error?: boolean;
};

export default forwardRef<HTMLInputElement, Props>(
  ({ error, ...props }: Props, ref) => {
    const css: CSSObject = {
      ...{
        color: `gray`,
        cursor: `text`,
        position: `absolute`,
        // fontFamily: 'AppleSDGothicNeo',
        wordWrap: `break-word`,
        minWidth: `fit-content`,
      },
      ...(error && { color: `red` }),
    };

    return jsx(`label`, { css, ref, ...props });
  },
);
