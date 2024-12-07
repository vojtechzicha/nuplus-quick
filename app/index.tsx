import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    setIsLoading(true)

    // Simulate network delay
    setTimeout(() => {
      if (password === 'heslo') {
        // Password matches, navigate to home screen
        router.replace('/home')
      } else {
        // Show error alert for incorrect password
        Alert.alert(
          'Chyba přihlášení',
          'Nesprávné přihlašovací údaje. Zkontrolujte prosím své údaje.',
          [{ text: 'OK' }]
        )
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Přihlášení do IS NEWTON</Text>
        <View style={styles.headerLine} />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>UČo nebo přezdívka</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder=''
              placeholderTextColor='#666'
              editable={!isLoading}
            />
            <View style={styles.inputIcon}>
              <Ionicons name='person-outline' size={20} color='white' />
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Primární heslo</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder=''
              placeholderTextColor='#666'
              editable={!isLoading}
            />
            <View style={styles.inputIcon}>
              <Ionicons name='key-outline' size={20} color='white' />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text style={styles.loginButtonText}>
            {isLoading ? 'Přihlašování...' : 'Přihlásit'}
          </Text>
        </TouchableOpacity>

        <View style={styles.disclaimerContainer}>
          <Ionicons name='information-circle-outline' size={20} color='#666' />
          <Text style={styles.disclaimerText}>
            Uložením hesla v prohlížeči přebíráte osobní odpovědnost za jeho
            zneužití.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  header: {
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    color: '#333',
    marginBottom: 8,
  },
  headerLine: {
    height: 2,
    backgroundColor: '#1a1f2e',
    width: 100,
  },
  formContainer: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
  },
  inputIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#1a237e',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  loginButtonDisabled: {
    backgroundColor: '#999',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disclaimerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
  },
  disclaimerText: {
    flex: 1,
    marginLeft: 8,
    color: '#666',
    fontSize: 12,
  },
})

export default LoginScreen
