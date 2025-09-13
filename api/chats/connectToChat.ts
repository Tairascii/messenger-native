import { accessTokenCookieKey } from "@/constants/keys"
import { getCookie } from "typescript-cookie"

export const connectToChat = (chatID: string): WebSocket => {
  const token = getCookie(accessTokenCookieKey)
  return new WebSocket(`ws://localhost:8081/api/v1/chats/connect/${chatID}?token=${token}`)
}
