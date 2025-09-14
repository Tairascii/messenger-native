import { Message } from '@/domain/message'
import { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import MessageBubble from '../MessageBubble/MessageBubble'

const mock = new Array(30).fill(0).map((item, index) => ({
  id: index,
  text: 'hi' + index,
  isEdited: false,
  createdAt: '',
  senderID: index % 2 == 0 ? '1' : '0',
}))
const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(mock)
  return (
    <FlatList<Message>
      data={messages}
      renderItem={({ item }) => (
        <MessageBubble key={item.id} userID={'1'} message={item} />
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
