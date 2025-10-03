import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['5xl']} 0;
`;

const ErrorCode = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['7xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }
`;

const ErrorMessage = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const ErrorDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const NotFoundPage: React.FC = () => {
  return (
    <Section>
      <Container>
        <NotFoundContainer>
          <ErrorCode>404</ErrorCode>
          <ErrorMessage>Page Not Found</ErrorMessage>
          <ErrorDescription>
            Sorry, the page you're looking for doesn't exist.
          </ErrorDescription>
          <Link to="/">
            <Button variant="primary" size="large">
              Go Back Home
            </Button>
          </Link>
        </NotFoundContainer>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
