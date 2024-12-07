import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const menuItems = [
    { id: 1, title: 'POŠTA', icon: 'mail-outline' },
    { id: 2, title: 'ROZVRH', icon: 'calendar-outline' },
    { id: 3, title: 'PŘEDMĚTY', icon: 'book-outline' },
    { id: 4, title: 'STUDENT', icon: 'person-outline' },
    { id: 5, title: 'SOUBORY', icon: 'document-outline' },
    { id: 6, title: 'FINANCE', icon: 'wallet-outline' },
  ]

  const socialIcons = [
    { id: 1, name: 'logo-linkedin' },
    { id: 2, name: 'logo-facebook' },
    { id: 3, name: 'logo-youtube' },
    { id: 4, name: 'logo-instagram' },
  ]

  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen
          name='home'
          options={{ headerShown: false, title: 'Přehled' }}
        />
        <Stack.Screen options={{ title: 'Rozvrh' }} name='timetable' />
        <Stack.Screen options={{ title: 'Student' }} name='student' />
      </Stack>
      <StatusBar style='auto' />
    </ThemeProvider>
  )
}
