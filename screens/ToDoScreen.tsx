import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import TodoCard from '../Components/TodoCard';

const ToDoScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.Container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTxt}>To-do</Text>
          <Text style={styles.descriptionTxt}>
            Find info related todo tasks.
          </Text>
        </View>

        <View style={styles.bodyContainer}>
          <TodoCard text="TOA assignment" date="June 1" category="TOA" />
          <TodoCard text="MAD Quiz" date="June 1" category="MAD" />
          <TodoCard text="OS Quiz" date="June 2" category="OS" />
          <TodoCard text="FA Assignment" date="June 2" category="FA" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ToDoScreen;

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
