import { ScrollView, StyleSheet } from 'react-native'

import ChatLine from '@/components/ChatLine/ChatLine'
import { Chat } from '@/domain/chat'
import { useState } from 'react'

export default function ChatsScreen() {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      picture: '',
      title: 'some',
      lastMessage: null,
    },
  ])
  return (
    <ScrollView style={styles.container}>
      {chats.map((chat) => {
        return <ChatLine chat={chat} key={chat.id} />
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},
})
