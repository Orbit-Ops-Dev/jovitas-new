export const theme = {
  colors: {
    // Primary Brand Colors
    primary: '#0d1b2b', // Teal blue - main brand color
    primaryLight: '#6CB4A8', // Lighter teal - hover states
    primaryDark: '#3A7A8A', // Darker teal - pressed states

    // Secondary Brand Colors
    secondary: '#6CB4A8', // Secondary color
    secondaryDark: '#5A9D91', // Secondary dark

    // Neutrals
    dark: '#2C2C2C', // Headings, dark text
    gray: '#666666', // Body text
    gray100: '#F5F5F5', // Very light gray
    gray300: '#D1D1D1', // Light gray
    gray400: '#A0A0A0', // Medium gray
    gray500: '#808080', // Medium gray
    gray700: '#4D4D4D', // Dark gray
    lightGray: '#F7F7F7', // Section backgrounds
    border: '#E5E5E5', // Borders, dividers
    white: '#FFFFFF', // Main background

    // Background Colors
    bgPrimary: '#FFFFFF', // Primary background
    bgSecondary: '#F7F7F7', // Secondary background
    bgDark: '#2C2C2C', // Dark background

    // Semantic Colors
    success: '#4CAF50', // Success messages
    error: '#F44336', // Error messages
    warning: '#FF9800', // Warnings
    info: '#2196F3', // Info messages

    // Text Colors
    textPrimary: '#2C2C2C',
    textSecondary: '#666666',
    textLight: '#999999',
    textWhite: '#FFFFFF',
    textInverse: '#FFFFFF', // Text on dark backgrounds
  },

  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
    '4xl': '5rem', // 80px
    '5xl': '6rem', // 96px
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },

  typography: {
    fontFamily: {
      primary: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      heading: "'Montserrat', 'Inter', sans-serif",
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '1.875rem', // 30px
      '3xl': '2.25rem', // 36px
      '4xl': '3rem', // 48px
      '5xl': '3.75rem', // 60px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
    card: '0 2px 8px rgba(0, 0, 0, 0.08)',
    cardHover: '0 8px 16px rgba(0, 0, 0, 0.12)',
  },

  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },

  borderRadius: {
    sm: '4px',
    base: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  container: {
    maxWidth: '1200px',
    padding: '1rem',
  },

  zIndex: {
    base: 1,
    dropdown: 100,
    sticky: 1000,
    overlay: 2000,
    modal: 3000,
    tooltip: 4000,
  },
} as const;

export type Theme = typeof theme;

export default theme;
