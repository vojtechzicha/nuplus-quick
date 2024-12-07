import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router'

const ScheduleScreen = () => {
  const [selectedView, setSelectedView] = useState('Celý semestr')
  const router = useRouter()

  const viewOptions = [
    'Celý rozvrh',
    'Celý semestr',
    'Aktuální týden',
    'Následující týden',
  ]

  const timeSlots = ['8:00', '9:40', '11:20', '13:30', '15:10', '16:50']

  const scheduleData = [
    {
      day: 'Pá',
      date: '11. 10.',
      classes: [
        {
          time: '16:50',
          code: 'B_PH_PR2_k/301',
          name: 'Studijní praxe 2',
          location: 'Zoom.Brno1',
        },
      ],
    },
    {
      day: 'So',
      date: '12. 10.',
      classes: [
        {
          time: '9:40',
          code: 'B_PH_PMT_k/301',
          name: 'Praktické techniky',
          location: 'PH Učebna 02',
        },
        // {
        //   time: '11:20',
        //   code: 'B_PH_FIL_k/301',
        //   name: 'Filozofie pro manažery',
        //   location: 'PH Učebna 06',
        // },
        {
          time: '13:30',
          code: 'B_PH_FIL_k/301',
          name: 'Filozofie pro manažery',
          location: 'PH Učebna 06',
        },
      ],
    },
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
          headerTitle: 'Rozvrh',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false,
          presentation: 'modal',
          animation: 'slide_from_right',
        }}
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.viewOptions}>
              {viewOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.viewOption,
                    selectedView === option && styles.selectedViewOption,
                  ]}
                  onPress={() => setSelectedView(option)}
                >
                  <Text
                    style={[
                      styles.viewOptionText,
                      selectedView === option && styles.selectedViewOptionText,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name='list' size={24} color='#666' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name='print' size={24} color='#666' />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.timelineHeader}>
          {timeSlots.map(time => (
            <Text key={time} style={styles.timeSlot}>
              {time}
            </Text>
          ))}
        </View>

        <ScrollView style={styles.scheduleContainer}>
          {scheduleData.map((daySchedule, index) => (
            <View key={index} style={styles.dayRow}>
              <View style={styles.dayInfo}>
                <Text style={styles.dayText}>{daySchedule.day}</Text>
                <Text style={styles.dateText}>{daySchedule.date}</Text>
              </View>
              <View style={styles.classesContainer}>
                {daySchedule.classes.map((classItem, classIndex) => (
                  <View
                    key={classIndex}
                    style={[
                      styles.classBlock,
                      {
                        marginLeft: `${
                          (timeSlots.indexOf(classItem.time) * 100) /
                          timeSlots.length
                        }%`,
                      },
                    ]}
                  >
                    <Text style={styles.classCode}>{classItem.code}</Text>
                    <Text style={styles.className}>{classItem.name}</Text>
                    <Text style={styles.classLocation}>
                      {classItem.location}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
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
  backButton: {
    padding: 8,
    marginLeft: 8,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
  },
  viewOptions: {
    flexDirection: 'row',
    padding: 8,
  },
  viewOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  selectedViewOption: {
    backgroundColor: '#ffd700',
  },
  viewOptionText: {
    color: '#666',
  },
  selectedViewOptionText: {
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  iconButton: {
    padding: 8,
  },
  timelineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  timeSlot: {
    color: '#666',
    fontSize: 12,
  },
  scheduleContainer: {
    flex: 1,
  },
  dayRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dayInfo: {
    width: 60,
    backgroundColor: '#1a237e',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dateText: {
    color: 'white',
    fontSize: 12,
  },
  classesContainer: {
    flex: 1,
    position: 'relative',
    minHeight: 100,
  },
  classBlock: {
    position: 'absolute',
    backgroundColor: '#e3f2fd',
    padding: 8,
    borderRadius: 4,
    width: '30%',
    margin: 4,
  },
  classCode: {
    fontSize: 12,
    color: '#1a237e',
  },
  className: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  classLocation: {
    fontSize: 12,
    color: '#666',
  },
})

export default ScheduleScreen
