export const FONT_FAMILIES = {
  regular: 'IBMPlexSans_400Regular',
  medium: 'IBMPlexSans_500Medium',
  semiBold: 'IBMPlexSans_600SemiBold',
  bold: 'IBMPlexSans_700Bold',
  italic: 'IBMPlexSans_400Regular_Italic',
} as const;

export const FONT_SIZES = {
  tiny: 10,
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 20,
  xxlarge: 24,
  huge: 32,
  giant: 40,
} as const;

export const FONT_WEIGHTS = {
  regular: '400' as const,
  medium: '500' as const,
  semiBold: '600' as const,
  bold: '700' as const,
};

export const LINE_HEIGHTS = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
} as const;

export type FontFamily = keyof typeof FONT_FAMILIES;
export type FontSize = keyof typeof FONT_SIZES;

export default {
  families: FONT_FAMILIES,
  sizes: FONT_SIZES,
  weights: FONT_WEIGHTS,
  lineHeights: LINE_HEIGHTS,
};