import React from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './styled';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
