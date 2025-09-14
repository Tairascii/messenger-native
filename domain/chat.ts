export interface Chat {
  id: string
  picture: string | null
  title: string
  lastMessage: {
    text: string
    createdAt: string
    senderID: string
  } | null
}
