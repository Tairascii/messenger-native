import { ScrollView, StyleSheet } from 'react-native'

import ChatLine from '@/components/ChatLine/ChatLine'
import { Chat } from '@/domain/chat'
import { useEffect, useState } from 'react'
import { getChats } from '@/api/chats/getChats'

export default function ChatsScreen() {
  const [chats, setChats] = useState<Chat[]>([])

  useEffect(() => {
    const get = async () => {
      const chats = await getChats()
      setChats(chats)
    }

    get()
  }, [])
  
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
