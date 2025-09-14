import Ionicons from '@expo/vector-icons/Ionicons'
import { Pressable, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ChatInput {
  message: string
  setMessage: (msg: string) => void
  onSend: () => void
}
const ChatInput = ({ message, setMessage, onSend }: ChatInput) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <TextInput
        style={styles.input}
        placeholder="Aa"
        onChangeText={(msg) => setMessage(msg)}
        value={message}
        placeholderTextColor="#61666A"
      />
      <Pressable onPress={onSend}>
        <Ionicons name="send" size={24} color="#4E47F7" />
      </Pressable>
    </SafeAreaView>
  )
}

export default ChatInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  input: {
    height: 32,
    flex: 1,
    backgroundColor: '#F2F3F8',
    borderRadius: 20,
    paddingHorizontal: 12,
  },
})
