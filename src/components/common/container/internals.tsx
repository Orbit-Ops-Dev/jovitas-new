import React from 'react';
import { ContainerProps } from './types';
import { StyledContainer } from './styled';

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '1200px',
  noPadding = false,
}) => {
  return (
    <StyledContainer $maxWidth={maxWidth} $noPadding={noPadding}>
      {children}
    </StyledContainer>
  );
};

export default Container;
