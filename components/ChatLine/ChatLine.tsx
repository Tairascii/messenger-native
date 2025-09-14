import { Chat } from '@/domain/chat'
import { URLEnum } from '@/enums/url'
import { useUserStore } from '@/stores/user'
import { messageTime } from '@/utils/messageTime'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet } from 'react-native'
import { ThemedText } from '../themed-text'
import { ThemedView } from '../themed-view'

interface ChatLineProps {
  chat: Chat
}
const ChatLine = ({ chat }: ChatLineProps) => {
  const { profile } = useUserStore()
  const router = useRouter()
  const onChatSelect = () => {
    router.push(`${URLEnum.CHAT}/${chat.id}`)
  }

  const hasLastMessage = !!chat.lastMessage
  const getLastMessageText = (): string => {
    if (!hasLastMessage) {
      return `no messages yet`
    }
    let text = ''
    if (chat.lastMessage?.senderID === profile.id) {
      text += `You: `
    }
    return (
      text +
      `${chat.lastMessage?.text} · ${messageTime(chat.lastMessage?.createdAt)}`
    )
  }

  const getChatPicture = (): string => {
    if (chat.picture) {
      return chat.picture
    }

    return require('@/assets/images/default-picture.jpg')
  }

  return (
    <Pressable onPress={onChatSelect}>
      <ThemedView style={styles.container}>
        <Image source={getChatPicture()} style={styles.picture} />
        <ThemedView style={styles.info}>
          <ThemedText style={styles.title}>{chat.title}</ThemedText>
          <ThemedText style={styles.lastMessage}>
            {getLastMessageText()}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </Pressable>
  )
}

export default ChatLine

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 10,
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: '50%',
  },
  info: {},
  title: {
    fontWeight: 500,
  },
  lastMessage: {},
})
