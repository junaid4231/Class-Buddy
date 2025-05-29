import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ToDoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Subjects Screen</Text>
    </View>
  );
};

export default ToDoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
