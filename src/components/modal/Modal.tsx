import { FlexView } from '@components/common';
import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  width?: number;
  height?: number;
  children: ReactNode;
  closePortal: (param: any) => void;
}

const modalCSS: CSSObject = {
  position: `fixed`,
  top: 0,
  left: 0,
  width: `100%`,
  height: `100%`,
};

const backgoundCSS: CSSObject = {
  position: `fixed`,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
  backgroundColor: `rgba(0, 0, 0, 0.3)`,
};

export default ({ width, height, children, closePortal }: ModalProps) => {
  const container = document.getElementById(`root-modal`);

  const contentCSS: CSSObject = {
    maxWidth: `calc(100% - 80px)`,
    padding: `20px 40px`,
    backgroundColor: `#FFF`,
    borderRadius: `20px`,
    zIndex: 20,
    ...(width && { width: `${width}px` }),
    ...(height && { height: `${height}px` }),
  };

  return container
    ? createPortal(
        <FlexView css={modalCSS} center>
          <FlexView
            css={backgoundCSS}
            role="presentation"
            onClick={closePortal}
          />
          <FlexView css={contentCSS}>{children}</FlexView>
        </FlexView>,
        container,
      )
    : null;
};
