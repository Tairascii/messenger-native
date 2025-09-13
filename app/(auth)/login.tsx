import { signIn } from '@/api/auth/auth'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Image } from 'expo-image'
import { useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'
import { accessTokenCookieKey, refreshTokeCookieKey } from '@/constants/keys'
import { useRouter } from "expo-router";
import { URLEnum } from '@/enums/url'

export default function Login() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })

  const onLogInClick = async () => {
    const { email, password } = form
    if (!email || !password) return
    const tokens = await signIn({ email, password })
    SecureStore.setItem(accessTokenCookieKey, tokens.accessToken)
    SecureStore.setItem(refreshTokeCookieKey, tokens.refreshToken)

    router.push(URLEnum.HOME)
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ThemedView style={styles.container}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Email or phone number"
            onChangeText={(email) => setForm({ ...form, email })}
            value={form.email}
            placeholderTextColor="#61666A"
            autoComplete="email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(password) => setForm({ ...form, password })}
            value={form.password}
            secureTextEntry
            placeholderTextColor="#61666A"
          />
          <Pressable style={styles.button} onPress={onLogInClick}>
            <ThemedText style={styles.buttonText}>Login</ThemedText>
          </Pressable>
          <Pressable style={styles.forgotButton} onPress={onLogInClick}>
            <ThemedText style={styles.forgotButtonText}>
              Forgotten your password?
            </ThemedText>
          </Pressable>
        </ThemedView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 16,
    height: 62,
    borderColor: '#e4e4e4',
    padding: 12,
    marginBottom: 12,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1164e0',
    borderRadius: 20,
    width: '100%',
    height: 44,
    marginBottom: 18,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
  logo: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '18%',
  },
  forgotButton: {
    height: 40,
  },
  forgotButtonText: {
    color: '#000',
    fontSize: 14,
  },
})
