import { accessTokenCookieKey } from '@/constants/keys'
import { Redirect } from 'expo-router'
import * as SecureStore from 'expo-secure-store'

export default function Index() {
  const isLoggedIn = !!SecureStore.getItem(accessTokenCookieKey)

  if (!isLoggedIn) {
    return <Redirect href="/(auth)/login" />
  }

  return <Redirect href="/(tabs)/home" />
}
