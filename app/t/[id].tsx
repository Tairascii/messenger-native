import { connectToChat } from '@/api/chats/connectToChat'
import { getMessages } from '@/api/messages/getMessages'
import Chat from '@/components/Chat/Chat'
import ChatInput from '@/components/ChatInput/ChatInput'
import { ThemedView } from '@/components/themed-view'
import { Message } from '@/domain/message'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useRef, useState } from 'react'

export default function ChatScreen() {
  const { id: chatID } = useLocalSearchParams()
  if (typeof chatID !== 'string') return
  const connRef = useRef<WebSocket | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const get = async () => {
      const msgs = await getMessages(chatID)
      setMessages(msgs.reverse())
    }
    get()
  }, [])

  useEffect(() => {
    const conn = connectToChat(chatID)
    connRef.current = conn

    conn.onopen = (ev) => {
      console.log('connected')
    }

    conn.onerror = (ev) => {
      console.log('err', ev)
    }

    conn.onmessage = (ev) => {
      const msg = JSON.parse(ev.data)
      setMessages((prev) => [msg, ...prev])
    }

    conn.onclose = (ev) => {
      console.log('closed')
    }

    return () => conn.close()
  }, [])

  const onSend = () => {
    connRef.current?.send(`{ "text": "${message}" }`)
    setMessage('')
  }

  return (
    <ThemedView style={{ flex: 1 }}>
      <Chat messages={messages} />
      <ChatInput message={message} setMessage={setMessage} onSend={onSend} />
    </ThemedView>
  )
}
