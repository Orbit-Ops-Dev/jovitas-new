import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textInverse};
  padding-top: ${({ theme }) => theme.spacing['3xl']};
  padding-bottom: ${({ theme }) => theme.spacing['3xl']};
  padding-left: ${({ theme }) => theme.spacing.xl};
  padding-right: ${({ theme }) => theme.spacing.xl};
  margin-top: auto;
`;

export const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`;

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing['2xl']};
    align-items: center;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: ${({ theme }) => theme.spacing.sm};
  flex: 1.3;
  max-width: 260px;

  /* Matches BrandMark in the navbar. */
  img {
    height: 64px;
    width: auto;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
    text-align: center;
    max-width: 280px;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex: 1;
  max-width: 200px;
`;

export const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray300};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray700};
  padding-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin: 0;
`;
