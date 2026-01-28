export const colors = {
  /**
   * Primary brand color (iOS System Blue)
   */
  primary: '#007AFF',

  /**
   * Background color for screens (iOS System Grouped Background)
   */
  background: '#F2F2F7',

  /**
   * Surface color for cards, inputs, and modals
   */
  surface: '#FFFFFF',

  /**
   * Main text color (iOS Label)
   */
  text: '#000000',

  /**
   * Secondary text color for hints and captions (iOS Secondary Label)
   */
  textSecondary: '#8E8E93',

  /**
   * Color for borders and dividers (iOS Separator)
   */
  border: '#C6C6C8',

  /**
   * Error color for validation and destructive actions (iOS System Red)
   */
  error: '#FF3B30',

  /**
   * Success color (iOS System Green)
   */
  success: '#34C759',

  /**
   * Warning color (iOS System Yellow)
   */
  warning: '#FFCC00',

  /**
   * Utility colors
   */
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

/**
 * Type definition for the application color palette
 */
export type ColorTheme = typeof colors;