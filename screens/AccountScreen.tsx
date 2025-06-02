import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

const AccountScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.Container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTxt}>Account</Text>
          <Text style={styles.descriptionTxt}>
            Find info related to your Account, logout, help and about the app.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

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
