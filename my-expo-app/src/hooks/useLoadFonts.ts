import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from '@expo-google-fonts/ibm-plex-sans';

/**
 * Custom hook to load IBM Plex Sans fonts and manage the splash screen state.
 * Returns a boolean indicating whether fonts are ready to be used.
 */
export const useLoadFonts = (): boolean => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Load the required IBM Plex Sans font weights
        await Font.loadAsync({
          'IBMPlexSans-Regular': IBMPlexSans_400Regular,
          'IBMPlexSans-Medium': IBMPlexSans_500Medium,
          'IBMPlexSans-SemiBold': IBMPlexSans_600SemiBold,
          'IBMPlexSans-Bold': IBMPlexSans_700Bold,
        });
      } catch (e) {
        console.warn('Error loading fonts:', e);
      } finally {
        // Mark fonts as loaded and hide the splash screen
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return fontsLoaded;
};