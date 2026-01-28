export const Colors = {
  primary: '#007AFF', // Classic iOS Blue
  background: '#F2F2F7', // iOS System Background (Secondary)
  surface: '#FFFFFF',
  text: '#000000',
  secondaryText: '#8E8E93',
  border: '#C6C6C8',
  error: '#FF3B30',
  success: '#34C759',
} as const;

export const Typography = {
  fonts: {
    regular: 'IBMPlexSans-Regular',
    medium: 'IBMPlexSans-Medium',
    bold: 'IBMPlexSans-Bold',
    semiBold: 'IBMPlexSans-SemiBold',
  },
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const Layout = {
  borderRadius: {
    small: 8,
    medium: 12,
    large: 16,
    round: 999,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
} as const;

const theme = {
  colors: Colors,
  typography: Typography,
  spacing: Spacing,
  layout: Layout,
};

export default theme;