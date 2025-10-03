import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const StyledButton = styled.button<{
  $variant: ButtonProps['variant'];
  $size: ButtonProps['size'];
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  border: 2px solid transparent;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};

  /* Size variants */
  ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSize.sm};
        `;
      case 'large':
        return `
          padding: ${theme.spacing.lg} ${theme.spacing['2xl']};
          font-size: ${theme.typography.fontSize.lg};
        `;
      default: // medium
        return `
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.typography.fontSize.base};
        `;
    }
  }}

  /* Color variants */
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.secondaryDark};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
          }
        `;
      case 'text':
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          padding: ${theme.spacing.sm} ${theme.spacing.md};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.gray100};
          }
        `;
      default: // primary
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.primaryDark};
          }
        `;
    }
  }}

  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Active state */
  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  /* Focus state */
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

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
