import React from 'react';
import classNames from 'classnames';

import './Button.scss';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'large' | 'fullwidth';
  animate?: boolean;
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'black';
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    variant = 'contained',
    size = 'small',
    animate,
    color = 'primary',
  } = props;
  const btnStyle = classNames(
    'JUI_button',
    { [`JUI_button_${variant}`]: true },
    { [`JUI_button_${size}`]: true },
    { [`JUI_button_animate`]: animate },
    { [`JUI_button_${color}`]: true }
  );

  return (
    <button className={btnStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
