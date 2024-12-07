import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const SubjectsScreen = () => {
  const router = useRouter()

  const subjects = [
    { code: 'B_PH_BSE_k', name: 'Bakalářský seminář' },
    { code: 'B_PH_FIL_k', name: 'Filozofie pro manažery' },
    { code: 'B_PH_PMT_k', name: 'Praktické manažerské techniky' },
    { code: 'B_PH_POP_k', name: 'Podnikání a podnikatelské plánování' },
    { code: 'B_PH_PR2_k', name: 'Studijní praxe 2' },
    { code: 'B_PH_RIN_k', name: 'Řízení inovací' },
  ]

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Ionicons name='arrow-back' size={24} color='#000' />
            </TouchableOpacity>
          ),
          headerTitle: 'Moje předměty',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false,
          presentation: 'modal',
          animation: 'slide_from_right',
        }}
      />

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {subjects.map((subject, index) => (
            <TouchableOpacity
              key={index}
              style={styles.subjectItem}
              onPress={() => {
                /* Handle subject selection */
              }}
            >
              <Image
                source={require('../assets/images/nu-logo.jpeg')}
                style={styles.logo}
                resizeMode='contain'
              />
              <View style={styles.subjectInfo}>
                <Text style={styles.subjectCode}>{subject.code}</Text>
                <Text style={styles.subjectName}>{subject.name}</Text>
              </View>
              <Ionicons name='chevron-down' size={24} color='#666' />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  scrollView: {
    flex: 1,
  },
  backButton: {
    padding: 8,
    marginLeft: 8,
  },
  subjectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  subjectInfo: {
    flex: 1,
  },
  subjectCode: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  subjectName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
})

export default SubjectsScreen
