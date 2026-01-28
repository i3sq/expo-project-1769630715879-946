import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';

interface SafeContainerProps {
  children: ReactNode;
  style?: ViewStyle;
  edges?: Edge[];
}

/**
 * A reusable container component that uses SafeAreaView from react-native-safe-area-context
 * to ensure content is displayed within the safe area boundaries of the device.
 */
const SafeContainer: React.FC<SafeContainerProps> = ({
  children,
  style,
  edges = ['top', 'bottom', 'left', 'right'],
}) => {
  return (
    <SafeAreaView style={[styles.container, style]} edges={edges}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Standard iOS-style clean white background
  },
});

export default SafeContainer;