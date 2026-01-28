import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';

/**
 * Define the navigation parameters for type safety.
 * In a real-world app, these would be exported from a central navigation types file.
 */
type RootStackParamList = {
  Home: undefined;
  Secondary: undefined;
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = (): void => {
    navigation.navigate('Secondary');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Hello Expo Snack</Text>
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={handlePress}
          accessibilityRole="button"
          accessibilityLabel="Go to secondary page"
        >
          <Text style={styles.buttonText}>Go to Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7', // Standard iOS system background color
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'IBMPlexSans-SemiBold', // Assumes IBM Plex is loaded in App.tsx
    fontSize: 28,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 40,
    letterSpacing: -0.5,
  },
  button: {
    backgroundColor: '#007AFF', // Standard iOS blue
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    ...Platform.select({
      ios: {
        width: '80%',
      },
      android: {
        width: '80%',
      },
    }),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'IBMPlexSans-Medium',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default HomeScreen;