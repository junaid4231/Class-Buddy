import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

interface CustomCardProps {
  title: string;
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({title, description}) => {
  return (
    <TouchableOpacity>
      <View style={[styles.subjectCard, styles.cardElevation]}>
        <Text style={styles.subHeadingTxt}>{title}</Text>
        <Text style={styles.subDescriptionTxt}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  subjectCard: {
    height: 140,
    width: 310,
    borderWidth: 1,
    borderColor: '#1A6B7E',
    borderRadius: 14,
    padding: 12,
    marginVertical: 10,
  },
  cardElevation: {
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white', // Always set backgroundColor for shadow to appear
    borderRadius: 10, // Optional, for rounded corners
    padding: 15,
  },

  subHeadingTxt: {
    fontSize: 18,
    fontWeight: '600',
  },
  subDescriptionTxt: {
    marginTop: 14,
  },
});
