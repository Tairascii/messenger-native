import ChatInput from '@/components/ChatInput/ChatInput'
import { ThemedView } from '@/components/themed-view'
import { useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native'

export default function ChatScreen() {
  const { id } = useLocalSearchParams()
  return (
    <ThemedView
      style={{ flex: 1 }}
    >
      <ChatInput />
    </ThemedView>
  )
}
