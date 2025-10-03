import React from 'react';
import styled from 'styled-components';

interface GridProps {
  children: React.ReactNode;
  columns?: number | { mobile?: number; tablet?: number; desktop?: number };
  gap?: string;
}

const StyledGrid = styled.div<{
  $columns: GridProps['columns'];
  $gap: string;
}>`
  display: grid;
  gap: ${({ $gap }) => $gap};

  /* Handle responsive columns */
  ${({ $columns, theme }) => {
    if (typeof $columns === 'number') {
      return `
        grid-template-columns: repeat(${$columns}, 1fr);

        @media (max-width: ${theme.breakpoints.tablet}) {
          grid-template-columns: repeat(${Math.min($columns, 2)}, 1fr);
        }

        @media (max-width: ${theme.breakpoints.mobile}) {
          grid-template-columns: 1fr;
        }
      `;
    } else {
      const { mobile = 1, tablet = 2, desktop = 3 } = $columns || {};
      return `
        grid-template-columns: repeat(${desktop}, 1fr);

        @media (max-width: ${theme.breakpoints.tablet}) {
          grid-template-columns: repeat(${tablet}, 1fr);
        }

        @media (max-width: ${theme.breakpoints.mobile}) {
          grid-template-columns: repeat(${mobile}, 1fr);
        }
      `;
    }
  }}
`;

const Grid: React.FC<GridProps> = ({
  children,
  columns = 3,
  gap = '2rem',
}) => {
  return (
    <StyledGrid $columns={columns} $gap={gap}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
