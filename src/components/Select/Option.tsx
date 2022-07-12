import { CSSObject } from '@emotion/react';
import React, { useRef, useEffect } from 'react';

import { FlexView, Text } from '@components/Common';

type OptionProps = {
  css?: CSSObject;
  values: string[];
  selected: string;
  onSelect: (index: number) => void;
};

const firstBorder: CSSObject = {
  borderRadius: `8px 8px 0 0`,
};

const lastBorder: CSSObject = {
  borderRadius: `0 0 8px 8px`,
};

export default ({ css, values, selected, onSelect }: OptionProps) => {
  const refs = useRef<HTMLDivElement[]>([]);

  const optionCSS: CSSObject = {
    lineHeight: `32px`,
    paddingLeft: `8px`,
    cursor: `pointer`,
    outline: `none`,
    ':hover': {
      backgroundColor: `#F3F4F8`,
    },
    css,
  };

  useEffect(() => {
    const index = values.indexOf(selected);
    if (index !== -1) refs.current[index].focus();
    else refs.current[0].focus();
  }, [selected]);

  return (
    <>
      {values.map((option: string, idx: number) => (
        <FlexView
          key={option}
          ref={(e: HTMLDivElement) => (refs.current[idx] = e)}
          css={{
            ...optionCSS,
            ...(idx === 0 && firstBorder),
            ...(idx === values.length - 1 && lastBorder),
          }}
          items="start"
          tabIndex={0}
          onBlur={() => (refs.current[idx].style.backgroundColor = `#FFF`)}
          onClick={() => onSelect(idx)}
          onFocus={() => (refs.current[idx].style.backgroundColor = `#F3F4F8`)}
          onKeyDown={e => {
            if (e.key === `Enter`) onSelect(idx);
            else if (e.key === `ArrowDown`) {
              (refs.current[idx].nextElementSibling as HTMLElement)?.focus();
            } else if (e.key === `ArrowUp`) {
              (
                refs.current[idx].previousElementSibling as HTMLElement
              )?.focus();
            } else {
              e.preventDefault();
            }
          }}
        >
          <Text color="#4D4D4D" fill noDrag small start>
            {option}
          </Text>
        </FlexView>
      ))}
    </>
  );
};
