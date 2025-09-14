import { Message } from '@/domain/message'
import { StyleSheet, Text, View } from 'react-native'

interface MessageBubbleProps {
  message: Message
  userID: string
}

const MessageBubble = ({ message, userID }: MessageBubbleProps) => {
  if (!userID) return

  const isMine = message.senderID === userID
  return (
    <View style={[styles.container, isMine && styles.mine]}>
      <Text style={[styles.text, isMine && styles.mineText]}>
        {message.text}
      </Text>
    </View>
  )
}

export default MessageBubble

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: '#ededed',
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
  },
  mine: {
    alignSelf: 'flex-end',
    backgroundColor: '#116cf6',
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
  mineText: {
    color: '#fff',
  },
})
