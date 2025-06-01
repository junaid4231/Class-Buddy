import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import NotificationCard from '../Components/NotificationCard';

const NotificationsScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.Container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTxt}>Notifications</Text>
          <Text style={styles.descriptionTxt}>
            Find info related to ongoing and upcoming events and activities.
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          <NotificationCard
            text="Sports trial will be held in main cricket ground before football final match."
            time="Updated 3hrs ago"
            category="Sports"
          />
          <NotificationCard
            text="Students are required to wear thier student cards while inside the
                    university campus especially in labs."
            time="Updated 4hrs ago"
            category="Admin"
          />
          <NotificationCard
            text="Live panel talk about freelancing in going to strat in seminar room A block."
            time="Updated 2hrs ago"
            category="Admin"
          />
          <NotificationCard
            text="Submit the TOA assignment no 4 before 11:59pm on June 01, 2025."
            time="Updated 4hrs ago"
            category="TOA"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

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
