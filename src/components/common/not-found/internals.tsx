import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../section/Section.tsx';
import Container from '../container/internals.tsx';
import Button from '../button/internals.tsx';
import { NotFoundContainer, ErrorCode, ErrorMessage, ErrorDescription } from './styled.ts';

const NotFoundPage: React.FC = () => {
  // The SPA rewrite serves every URL with a 200, so tell crawlers not to index unknown paths.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page Not Found | Jovita's Cleaning Service";

    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.appendChild(robots);

    return () => {
      robots.remove();
      document.title = previousTitle;
    };
  }, []);

  return (
    <Section>
      <Container>
        <NotFoundContainer>
          <ErrorCode>404</ErrorCode>
          <ErrorMessage>Page Not Found</ErrorMessage>
          <ErrorDescription>Sorry, the page you're looking for doesn't exist.</ErrorDescription>
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
