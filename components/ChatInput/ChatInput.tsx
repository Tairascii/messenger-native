import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ChatInput = () => {
  const [message, setMessage] = useState('')
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <TextInput
        style={styles.input}
        placeholder="Aa"
        onChangeText={(msg) => setMessage(msg)}
        value={message}
        placeholderTextColor="#61666A"
      />
      <Ionicons name="send" size={24} color="#4E47F7" />
    </SafeAreaView>
  )
}

export default ChatInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    position: 'absolute',
    bottom: 0,
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
