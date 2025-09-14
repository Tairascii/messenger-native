import { Message } from '@/domain/message'
import { useUserStore } from '@/stores/user'
import { FlatList, StyleSheet } from 'react-native'
import MessageBubble from '../MessageBubble/MessageBubble'

interface ChatProps {
  messages: Message[]
}

const Chat = ({ messages }: ChatProps) => {
  const { profile } = useUserStore()
  return (
    <FlatList<Message>
      data={messages}
      renderItem={({ item }) => (
        <MessageBubble key={item.id} userID={profile.id} message={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
      inverted
      style={styles.container}
      contentContainerStyle={styles.messagesContainer}
    />
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  messagesContainer: {
    gap: 2,
  },
})
