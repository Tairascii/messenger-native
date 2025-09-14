import { accessTokenCookieKey } from '@/constants/keys'
import * as SecureStore from 'expo-secure-store'

export const connectToChat = (chatID: string): WebSocket => {
  const token = SecureStore.getItem(accessTokenCookieKey)
  return new WebSocket(
    `ws://localhost:8082/api/v1/chats/connect/${chatID}?token=${token}`
  )
}
