import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Input.scss';

type ColorType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'grey'
  | 'black';

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children: ReactNode;
  type?: 'text' | 'email' | 'password' | 'number';
  lefticon?: string;
  righticon?: string;
  dimensions?: 'small' | 'large' | 'normal';
  color?: ColorType;
  activecolor?: ColorType;
  fullwidth?: boolean;
  handleClickIcon?: () => void;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    type = 'text',
    dimensions = 'normal',
    color = 'grey',
    activecolor = 'primary',
    fullwidth,
    lefticon,
    righticon,
    handleClickIcon,
  } = props;

  const inputParentStyle = classNames(
    'JUI_Input',
    { [`JUI_Input_${dimensions}`]: dimensions },
    { [`JUI_Input_notfull`]: !fullwidth },
    { [`JUI_Input_full`]: fullwidth }
  );

  const fieldStyle = classNames('JUI_Input_field', {
    [`JUI_Input_field_${activecolor}`]: activecolor,
    [`JUI_Input_field_outline_${color}`]: color,
  });

  const fieldBoxStyle = classNames('JUI_Input_field_container', {
    [`JUI_Input_full`]: fullwidth,
  });

  return (
    <div className={inputParentStyle}>
      {lefticon && (
        <div className="JUI_Input_icon_container" style={{ cursor: 'default' }}>
          <img src={lefticon} alt="icon" className="JUI_Input_icon" />
        </div>
      )}
      <div className={fieldBoxStyle}>
        <input type={type} {...props} className={fieldStyle} />
      </div>
      {righticon && (
        <div
          className="JUI_Input_icon_container"
          onClick={handleClickIcon}
          style={{ marginLeft: 5 }}
        >
          <img src={righticon} alt="icon" className="JUI_Input_icon" />
        </div>
      )}
    </div>
  );
};

export default Input;
