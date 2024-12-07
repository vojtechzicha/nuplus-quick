import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack, Link } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function HomeScreen() {
  const menuItems = [
    { id: 1, title: 'POŠTA', icon: 'mail-outline', link: null },
    { id: 2, title: 'ROZVRH', icon: 'calendar-outline', link: 'timetable' },
    { id: 3, title: 'PŘEDMĚTY', icon: 'book-outline', link: null },
    { id: 4, title: 'STUDENT', icon: 'person-outline', link: 'student' },
    { id: 5, title: 'SOUBORY', icon: 'document-outline', link: null },
    { id: 6, title: 'FINANCE', icon: 'wallet-outline', link: null },
  ]

  const socialIcons = [
    { id: 1, name: 'logo-linkedin' },
    { id: 2, name: 'logo-facebook' },
    { id: 3, name: 'logo-youtube' },
    { id: 4, name: 'logo-instagram' },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./../assets/images/nu-logo.jpeg')}
          style={styles.logo}
          resizeMode='contain'
        />
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name='search' size={24} color='white' />
          </TouchableOpacity>
          <View style={styles.languageButtons}>
            <TouchableOpacity>
              <Text style={styles.languageText}>🇬🇧</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.languageText}>🇸🇰</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.importantSection}>
        <Text style={styles.importantTitle}>Důležité:</Text>
        <Text style={styles.importantText}>
          ☑️ Dana Petrbokova - SZZ LEDEN 2025
        </Text>
      </View>

      <View style={styles.menuGrid}>
        {menuItems.map(item =>
          item.link ? (
            <Link key={item.id} href={item.link} asChild>
              <TouchableOpacity style={styles.menuItem}>
                <Ionicons name={item.icon} size={32} color='#000' />
                <Text style={styles.menuItemText}>{item.title}</Text>
              </TouchableOpacity>
            </Link>
          ) : (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <Ionicons name={item.icon} size={32} color='#000' />
              <Text style={styles.menuItemText}>{item.title}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreButtonText}>VÍCE</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <View style={styles.socialIcons}>
          {socialIcons.map(icon => (
            <TouchableOpacity key={icon.id} style={styles.socialIcon}>
              <Ionicons name={icon.name} size={24} color='#666' />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.accreditations}>
          {/* Add your accreditation logos here */}
        </View>
        <Text style={styles.copyright}>
          © 2024 NEWTON University Group, s.r.o.
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1f2e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 40,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    marginRight: 16,
  },
  languageButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  languageText: {
    fontSize: 20,
  },
  importantSection: {
    backgroundColor: '#f90',
    padding: 16,
  },
  importantTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  importantText: {
    color: '#000',
    marginTop: 4,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
  },
  menuItem: {
    backgroundColor: 'white',
    width: '30%',
    aspectRatio: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  menuItemText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  moreButton: {
    backgroundColor: '#f90',
    padding: 12,
    marginHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  moreButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  footer: {
    padding: 16,
    marginTop: 'auto',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 16,
  },
  accreditations: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  copyright: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
  },
})
