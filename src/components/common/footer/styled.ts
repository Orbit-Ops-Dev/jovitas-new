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
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MobileFooterNav = styled.nav`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
    flex-wrap: nowrap;
  }
`;

export const MobileFooterLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.gray300};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xs};
  border-bottom: 3px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.primary : 'transparent'};
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
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

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  transition: all ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
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
