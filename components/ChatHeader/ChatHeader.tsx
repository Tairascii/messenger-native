import Feather from '@expo/vector-icons/Feather'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '../themed-text'
import { ThemedView } from '../themed-view'

const ChatHeader = () => {
  const router = useRouter()
  const chat = {
    id: '1',
    picture: '',
    title: 'some',
    lastMessage: null,
  }

  const onGoBack = () => {
    router.back()
  }

  const getChatPicture = (): string => {
    if (chat.picture) {
      return chat.picture
    }

    return require('@/assets/images/default-picture.jpg')
  }
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Pressable onPress={onGoBack}>
        <Feather name="chevron-left" size={24} color="#AA40FA" />
      </Pressable>
      <ThemedView style={styles.user}>
        <Image source={getChatPicture()} style={styles.picture} />
        <ThemedText style={styles.title}>{chat.title}</ThemedText>
      </ThemedView>
    </SafeAreaView>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: 14,
    paddingLeft: 16,
    paddingBottom: 10,
  },
  user: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  picture: {
    width: 36,
    height: 36,
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
  },
})
