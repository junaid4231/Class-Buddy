import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SubjectCardProps {
  title: string;
  description: string;
  onPress: () => void;
  colorIndex: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  title,
  description,
  onPress,
  colorIndex,
}) => {
  const getSubjectIcon = (index: number) => {
    const icons = [
      'laptop',
      'storage',
      'psychology',
      'account-balance',
      'book',
      'settings',
    ];
    return icons[index % icons.length];
  };
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name={getSubjectIcon(colorIndex)} size={28} color="#4A90A4" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SubjectCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 8,
    elevation: 5,
    shadowColor: '#1A6B7E',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 13,
    color: '#7F8C8D',
    lineHeight: 18,
  },
  iconContainer: {
    backgroundColor: '#E8F4F8',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
