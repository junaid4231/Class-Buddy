import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface NotificationCardProps {
  text: string;
  time: string;
  category: string;
}

export default function NotificationCard({
  text,
  time,
  category,
}: NotificationCardProps) {
  return (
    <View style={styles.cardBody}>
      <View style={styles.cardTxt}>
        <Text numberOfLines={2}>{text}</Text>
      </View>
      <View style={styles.cardSection}>
        <Text style={styles.updateTime}>{time}</Text>
        <Text style={styles.category}>• {category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    width: '100%',
    height: 100,
    flex: 1,
    marginVertical: 8,
  },
  cardTxt: {
    backgroundColor: 'white',
    flex: 0.8,
    padding: 10,
    borderRadius: 8,
    elevation: 5,
  },
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  updateTime: {color: 'grey'},
  category: {color: '#1A6B7E'},
});
