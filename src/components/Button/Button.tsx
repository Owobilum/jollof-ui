import React, { FC } from 'react';
import './Button.scss';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  variant?: string;
}


const Button: FC<ButtonProps> = (props) => {

  const { children, color, backgroundColor,variant, style } = props;

  const _style: React.CSSProperties = style || {};

  let _variant;
  switch (variant) {
    // case 'contained':
    //   _variant='JUI-button_contained'      
    //   break;
    case 'outlined':
      _variant='JUI-button_outlined'
        break;
    default:
      _variant='JUI-button_contained'
      break;
  }

  if (backgroundColor) _style.backgroundColor = backgroundColor;
  if (color) _style.color = color;

  return (
    <button className={`JUI-button ${_variant}`} style={_style} {...props} >
      {children}
    </button>
  );
};

export default Button;
