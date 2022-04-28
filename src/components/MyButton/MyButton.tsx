import React from 'react';
import './MyButton.scss';

export interface MyButtonProps {
  label: string;
  children?: React.ReactNode;
}

const MyButton: React.FC<MyButtonProps> = ({ label }) => {
  return <button className="JUI_button">{label}</button>;
};

export default MyButton;
