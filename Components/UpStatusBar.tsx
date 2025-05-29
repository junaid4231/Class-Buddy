import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

export default function UpStatusBar(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#1A6B7E'} />
      <View style={styles.upperBar}>
        <Text style={styles.heading}>Class Buddy</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  upperBar: {
    height: 50,
    backgroundColor: '#1A6B7E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
