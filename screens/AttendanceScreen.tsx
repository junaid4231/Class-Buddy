import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AttendanceCard from '../Components/AttendanceCard';

const AttendanceScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.Container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTxt}>Attendance</Text>
          <Text style={styles.descriptionTxt}>
            Find info related to your overall and individual attendance.
          </Text>
        </View>

        <View style={styles.bodyContainer}>
          {/* <AttendanceCard title="MAD" description="Next Class on Monday" /> */}
          <AttendanceCard
            title="MAD"
            subtitle="Next Class on Monday"
            percentage="99%"
          />
          <AttendanceCard
            title="AI"
            subtitle="Next Class on Wednesday"
            percentage="100%"
          />
          <AttendanceCard
            title="OS"
            subtitle="Next Class on Tuesday"
            percentage="79%"
          />
          <AttendanceCard
            title="TOA"
            subtitle="Next Class on Tuesday"
            percentage="73%"
          />
          <AttendanceCard
            title="FA"
            subtitle="Next Class on Tuesday"
            percentage="86%"
          />
          <AttendanceCard
            title="MVC"
            subtitle="Next Class on Tuesday"
            percentage="74%"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttendanceScreen;

const styles = StyleSheet.create({
  Container: {
    margin: 16,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  headingContainer: {},
  headingTxt: {
    fontSize: 24,
    color: '#1A6B7E',
    fontWeight: 'bold',
  },
  descriptionTxt: {
    marginVertical: 12,
  },
  bodyContainer: {},
});
