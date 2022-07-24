import { FlexView, Text, Input, InputProps } from '@components/Common';
import { Label } from '@components/Text';
import { CSSObject } from '@emotion/react';
import React, { forwardRef, useState } from 'react';

type FormFieldProps = InputProps & {
  type?: 'text' | 'password';
  autoComplete?: string;
  label?: string;
  name?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  error?: string;
};

export default forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      type,
      autoComplete,
      label,
      name,
      readOnly,
      autoFocus,
      error,
      ...props
    }: FormFieldProps,
    ref,
  ) => {
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState(``);

    const wrapperCSS: CSSObject = {
      border: `1px solid #D5D5D5`,
      borderRadius: `10px`,
      width: `360px`,
      height: `48px`,
      padding: `0 16px`,
      ...(focus && { borderColor: `#358CFE` }),
      // ...(error && {
      //   border: '1px solid red'
      // })
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
      <>
        <FlexView content="center" css={wrapperCSS}>
          <FlexView css={label && { paddingTop: `15px` }}>
            {label && (
              <Label css={labelCSS} htmlFor={label}>
                {label}
              </Label>
            )}
            <Input
              {...props}
              ref={ref}
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              css={inputCSS}
              name={name}
              readOnly={readOnly}
              type={type}
              onBlur={() => setFocus(false)}
              onFocus={() => setFocus(true)}
              onInput={e => setValue(e.currentTarget.value)}
            />
          </FlexView>
        </FlexView>
        {error && (
          <Text color="red" css={{ marginTop: `8px`, paddingLeft: `16px` }}>
            {error}
          </Text>
        )}
      </>
    );
  },
);
