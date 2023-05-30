import { FlexView, Text, Icon } from '@components/common';
import { CSSObject } from '@emotion/react';
import { ReactNode, useEffect, useState, useRef, HTMLAttributes } from 'react';

type SelectProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  width?: number;
  height?: number;
  children: ReactNode;
  disabled?: boolean;
  error?: boolean;
};

export default ({
  name,
  width,
  height,
  children,
  disabled,
  error,
  ...props
}: SelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const optionListRef = useRef<HTMLDivElement>(null);
  const [showOption, setShowOption] = useState(false);

  const wrapperCSS: CSSObject = {
    width: width || `100%`,
    userSelect: `none`,
  };

  const selectCSS: CSSObject = {
    minHeight: height || `40px`,
    cursor: `pointer`,
    padding: `0 8px`,
    backgroundColor: disabled ? `#DCDEEA` : `#FFF`,
    border: `1px solid #DCDEEA`,
    borderRadius: `4px`,
    ...(showOption && { border: `1px solid #358CFE` }),
    ...(error && { border: `1px solid red` }),
  };

  const optionListCSS: CSSObject = {
    position: `absolute`,
    marginTop: height || `40px`,
    width: width || `100%`,
    cursor: `pointer`,
    backgroundColor: `#FFF`,
    borderRadius: `4px`,
    boxShadow: `0 0 2px rgba(0, 0, 0, 0.3)`,
  };

  // useEffect(() => {
  //   setShowOption(false);
  // }, [name]);

  useEffect(() => {
    const autoClose = (e: CustomEvent<MouseEvent>) => {
      if (
        !selectRef.current?.contains(e.target as Node) &&
        !optionListRef.current?.contains(e.target as Node)
      ) {
        e.stopPropagation();
        setShowOption(false);
      }
    };

    window.addEventListener(`mousedown`, autoClose as EventListener);

    return () => {
      window.removeEventListener(`mousedown`, autoClose as EventListener);
    };
  }, []);

  return (
    <FlexView
      ref={selectRef}
      css={wrapperCSS}
      onClick={() => {
        if (!disabled) setShowOption(!showOption);
      }}
      {...props}
    >
      <FlexView content="between" css={selectCSS} items="center" row>
        <Text>{name}</Text>
        <Icon name={showOption ? `arrowUp` : `arrowDown`} size={16} />
      </FlexView>

      {showOption && (
        <FlexView ref={optionListRef} css={optionListCSS}>
          {children}
        </FlexView>
      )}
    </FlexView>
  );
};
