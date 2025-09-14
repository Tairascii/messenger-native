import ChatHeader from '@/components/ChatHeader/ChatHeader'
import { Stack } from 'expo-router'

export default function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ header: () => <ChatHeader /> }} />
    </Stack>
  )
}
