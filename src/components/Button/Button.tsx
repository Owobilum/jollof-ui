import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string;
}

const StyledButton = styled.button`
  border: 1px dotted yellow;
  background: tomato;
  color: black;
  font-weight: 500;
`;

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
