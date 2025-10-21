import { styled } from 'styled-components';

export const Card = styled.div<{ $hasGallery: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: ${({ theme }) => theme.transitions.normal};
  overflow: hidden;
  cursor: ${({ $hasGallery }) => ($hasGallery ? 'pointer' : 'default')};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-4px);
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing['2xl']};
`;

export const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const CheckMark = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

export const ViewGalleryText = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;
