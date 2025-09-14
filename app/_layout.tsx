import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { Stack } from 'expo-router'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/use-color-scheme'
import { useUserStore } from '@/stores/user'
import { useEffect } from 'react'

export const unstable_settings = {
  anchor: '(auth)',
}

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const { getProfile } = useUserStore()

  useEffect(() => {
    getProfile()
  }, [getProfile])

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  )
}
