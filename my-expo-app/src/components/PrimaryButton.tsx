import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

/**
 * A reusable iOS-style button component.
 * Uses IBM Plex Sans styling if the font is loaded in the project.
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        disabled && styles.disabledButton,
        style,
      ]}
    >
      <Text style={[styles.text, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF', // Standard iOS Blue
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  disabledButton: {
    backgroundColor: '#A1A1A1',
    opacity: 0.6,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    // Assumes 'IBMPlexSans-SemiBold' is loaded in the App.tsx font hook
    fontFamily: Platform.select({
      ios: 'IBMPlexSans-SemiBold',
      android: 'IBMPlexSans-SemiBold',
      default: 'System',
    }),
    textAlign: 'center',
  },
});

export default PrimaryButton;