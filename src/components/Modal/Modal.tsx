import React, { FC, ReactNode} from 'react';

import './Modal.scss';

export interface ModalProps {
  children?: ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ children, open,setOpen }) => {

  const handleClick=(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    if(e.currentTarget !== e.target){
      return
    }
    setOpen && setOpen(false)
  }
  return (
    <div style={!open ? { display: 'none' } : {}}>
      <div className="JUI_modal" onClick={handleClick}>
        <div className="JUI_modal_content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
