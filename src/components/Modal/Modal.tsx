import React, { FC, ReactNode } from 'react';

import Overlay from '../Overlay';
import './Modal.scss';

export interface ModalProps {
  children?: ReactNode;
  open?: boolean;
  handleClose?: () => void;
}

const Modal: FC<ModalProps> = ({ children, open }) => {
  return (
    <div style={!open ? { display: 'none' } : {}}>
      <div className="JUI_modal">
        <div className="JUI_modal_content">{children}</div>
      </div>
      <Overlay />
    </div>
  );
};

export default Modal;
