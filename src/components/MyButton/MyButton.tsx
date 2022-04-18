import React from 'react';
import './MyButton.css';

interface MyButtonProps {
  label: string;
}

const MyButton: React.FC<MyButtonProps> = ({ label }) => {
  return <button className="JUI_button">{label}</button>;
};

export default MyButton;
