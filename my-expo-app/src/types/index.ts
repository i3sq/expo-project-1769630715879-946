import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * Navigation Types
 */
export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
  NativeStackScreenProps<RootStackParamList, T>;

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

/**
 * Theme and UI Types
 */
export interface ColorPalette {
  primary: string;
  background: string;
  text: string;
  textSecondary: string;
  white: string;
  black: string;
  border: string;
  buttonBackground: string;
  buttonText: string;
}

export interface Spacing {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface AppTheme {
  colors: ColorPalette;
  spacing: Spacing;
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    full: number;
  };
}

/**
 * Font Family Types
 * Based on IBM Plex Sans requirement
 */
export enum AppFontFamily {
  Regular = 'IBMPlexSans-Regular',
  Medium = 'IBMPlexSans-Medium',
  SemiBold = 'IBMPlexSans-SemiBold',
  Bold = 'IBMPlexSans-Bold',
}

/**
 * Component specific types
 */
export type TypographyVariant = 'h1' | 'h2' | 'body' | 'label' | 'button';

export interface StyledTextProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  style?: any;
}

export interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export interface SafeContainerProps {
  children: React.ReactNode;
  style?: any;
  disableSafeArea?: boolean;
}