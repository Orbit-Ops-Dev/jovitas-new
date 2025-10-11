import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import {
  NotFoundContainer,
  ErrorCode,
  ErrorMessage,
  ErrorDescription,
} from '../styles/pages/NotFoundPageStyles';

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
