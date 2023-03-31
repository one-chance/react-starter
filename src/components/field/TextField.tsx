import { FlexView, Input } from '@components/common';
import { Label } from '@components/text';
import { CSSObject } from '@emotion/react';
import { ChangeEvent, forwardRef, useState } from 'react';

type TextFieldProps = {
  type?: 'text' | 'password';
  autoComplete?: string;
  label?: string;
  name?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  value: string;
  onChange: (e: string) => void;
  onKeyDown?: () => void;
};

export default forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      type,
      autoComplete,
      label,
      name,
      readOnly,
      autoFocus,
      value,
      onChange,
      onKeyDown,
    }: TextFieldProps,
    ref,
  ) => {
    const [focus, setFocus] = useState(false);
    // const [value, setValue] = useState(``);

    const wrapperCSS: CSSObject = {
      border: `1px solid #D5D5D5`,
      borderRadius: `10px`,
      width: `360px`,
      height: `48px`,
      padding: `0 16px`,
      // ...(focus && { borderColor: `#358CFE` }),
    };

    const labelCSS: CSSObject = {
      transitionDuration: `0.2s`,
      ...(focus || value !== ``
        ? {
            fontSize: `12px`,
            transform: `translateY(-12px)`,
          }
        : {
            fontSize: `16px`,
          }),
    };

    const inputCSS: CSSObject = {
      lineHeight: `30px`,
      border: 0,
      padding: 0,
      backgroundColor: `transparent`,
      ...(type === `password` && {
        // color: '#358CFE',
        fontSize: `1.5rem`,
        // letterSpacing: '-5px'
      }),
    };

    return (
      <FlexView content="center" css={wrapperCSS}>
        <FlexView css={label && { paddingTop: `15px` }}>
          {label && (
            <Label css={labelCSS} htmlFor={label}>
              {label}
            </Label>
          )}
          <Input
            ref={ref}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            css={inputCSS}
            id={label}
            name={name}
            readOnly={readOnly}
            type={type}
            value={value}
            onBlur={() => setFocus(false)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              onChange(e.target.value);
              // setValue(e.target.value);
            }}
            onFocus={() => setFocus(true)}
            onKeyDown={e => {
              if (e.key === `Enter` && onKeyDown) onKeyDown();
            }}
          />
        </FlexView>
      </FlexView>
    );
  },
);
