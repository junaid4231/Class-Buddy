import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

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
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(prev => !prev);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={[styles.cardBody, expanded && styles.expanded]}>
        <View style={styles.cardTxt}>
          <Text numberOfLines={expanded ? undefined : 2}>{text}</Text>
        </View>
        <View style={styles.cardSection}>
          <Text style={styles.updateTime}>{time}</Text>
          <Text style={styles.category}>• {category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    width: '100%',
    marginVertical: 8,
    flex: 1,
  },
  expanded: {
    // Optional extra styles when expanded
  },
  cardTxt: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    elevation: 5,
  },
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  updateTime: {color: 'grey'},
  category: {color: '#1A6B7E'},
});
