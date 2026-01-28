import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

/**
 * IBM Plex Sans font weights are typically loaded with these names in Expo.
 * Ensure these fonts are loaded in App.tsx using expo-font.
 */
type FontWeight = 'regular' | 'medium' | 'semiBold' | 'bold' | 'italic';

interface StyledTextProps extends TextProps {
  weight?: FontWeight;
  size?: number;
  color?: string;
  centered?: boolean;
}

const StyledText: React.FC<StyledTextProps> = ({
  style,
  children,
  weight = 'regular',
  size = 16,
  color = '#1C1C1E', // iOS Dark Gray/Black
  centered = false,
  ...props
}) => {
  const getFontFamily = (): string => {
    switch (weight) {
      case 'medium':
        return 'IBMPlexSans-Medium';
      case 'semiBold':
        return 'IBMPlexSans-SemiBold';
      case 'bold':
        return 'IBMPlexSans-Bold';
      case 'italic':
        return 'IBMPlexSans-Italic';
      default:
        return 'IBMPlexSans-Regular';
    }
  };

  const dynamicStyles = {
    fontFamily: getFontFamily(),
    fontSize: size,
    color: color,
    textAlign: centered ? ('center' as const) : ('left' as const),
  };

  return (
    <Text style={[styles.base, dynamicStyles, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default StyledText;