import React, { useCallback } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  ActivityIndicator
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { 
  useFonts, 
  IBMPlexSans_400Regular, 
  IBMPlexSans_600SemiBold 
} from '@expo-google-fonts/ibm-plex-sans';
import * as SplashScreen from 'expo-splash-screen';

// Prevent splash screen from auto-hiding while we load fonts
SplashScreen.preventAutoHideAsync();

// Navigation Types
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Home Screen Component
 */
const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Hello Expo Snack</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Details')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Go to Next Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

/**
 * Details Screen Component
 */
const DetailsScreen: React.FC<DetailsProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titleText}>Hello again</Text>
        <TouchableOpacity 
          style={[styles.button, styles.exitButton]}
          onPress={() => navigation.popToTop()}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Exit to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

/**
 * Main App Entry Point
 */
export default function App() {
  const [fontsLoaded] = useFonts({
    'IBMPlexSans-Regular': IBMPlexSans_400Regular,
    'IBMPlexSans-SemiBold': IBMPlexSans_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{ 
            headerShown: false,
            animation: 'slide_from_right'
          }}
        >
          <Stack.Screen name="Home" component= {HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7', // iOS Light Gray Background
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: 32,
    color: '#1C1C1E',
    marginBottom: 40,
    textAlign: 'center',
  },
  titleText: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 28,
    color: '#1C1C1E',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF', // iOS System Blue
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  exitButton: {
    backgroundColor: '#FF3B30', // iOS System Red
  },
  buttonText: {
    fontFamily: 'IBMPlexSans-SemiBold',
    color: '#FFFFFF',
    fontSize: 17,
    letterSpacing: -0.4,
  },
});