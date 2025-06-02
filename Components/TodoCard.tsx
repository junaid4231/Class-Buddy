import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BouncyCheckBox from 'react-native-bouncy-checkbox';

interface TodoCardProps {
  text: string;
  date: string;
  category: string;
}

export default function TodoCard({text, date, category}: TodoCardProps) {
  return (
    <View style={styles.cardBody}>
      <View style={styles.cardTxt}>
        <BouncyCheckBox fillColor="#1A6B7E" />
        <Text numberOfLines={1}>{text}</Text>
      </View>
      <View style={styles.cardSection}>
        <Text style={styles.date}>Due Date: {date}</Text>
        <Text style={styles.category}>• {category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    width: '100%',
    height: 90,
    flex: 1,
    marginVertical: 8,
  },
  cardTxt: {
    backgroundColor: 'white',
    flex: 0.8,
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
  },
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  date: {color: 'green'},
  category: {color: '#1A6B7E'},
});
