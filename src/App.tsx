import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Navbar from './components/common/navbar/internals';
import Footer from './components/common/footer/internals';
import PromoPopup from './components/common/popup/internals';

// Lazy load page components for better code splitting
const HomePage = lazy(() => import('./components/pages/home/internals'));
const ServicesPage = lazy(() => import('./components/pages/services/internals'));
const AboutPage = lazy(() => import('./components/pages/about/internals'));
const ContactPage = lazy(() => import('./components/pages/contact/internals'));
const NotFoundPage = lazy(() => import('./components/common/not-found/internals'));

// Component to handle scrolling to hash fragments
const ScrollToHashElement: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Remove the '#' from the hash
      const id = location.hash.replace('#', '');
      // Small delay to ensure the DOM is fully rendered
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll to top when navigating to a new page without hash
      // Use 'instant' to override the smooth scroll behavior from CSS
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToHashElement />
        <Navbar />
        {/* First-visit promotional popup */}
        <PromoPopup />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
