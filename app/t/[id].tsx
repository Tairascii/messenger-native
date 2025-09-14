import Chat from '@/components/Chat/Chat'
import ChatInput from '@/components/ChatInput/ChatInput'
import { ThemedView } from '@/components/themed-view'
import { useLocalSearchParams } from 'expo-router'

export default function ChatScreen() {
  const { id } = useLocalSearchParams()
  return (
    <ThemedView style={{ flex: 1 }}>
      <Chat />
      <ChatInput />
    </ThemedView>
  )
}
