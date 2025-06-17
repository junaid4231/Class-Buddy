import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface TodoCardProps {
  text: string;
  date: string;
  category: string;
  onCheck: () => void;
  isPendingDelete?: boolean;
}

const categoryColors = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#96CEB4',
  '#FFD166',
  '#6A0572',
];

const TodoCard: React.FC<TodoCardProps> = ({
  text,
  date,
  category,
  onCheck,
  isPendingDelete = false,
}) => {
  return (
    <View
      style={[
        styles.cardContainer,
        isPendingDelete && styles.pendingDeleteCard,
      ]}>
      <View style={styles.leftContent}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={onCheck}
          disabled={isPendingDelete}>
          <Icon
            name={isPendingDelete ? 'check-box' : 'check-box-outline-blank'}
            size={24}
            color={isPendingDelete ? '#4CAF50' : '#666'}
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text
            style={[styles.taskText, isPendingDelete && styles.completedText]}>
            {text}
          </Text>
          <Text style={styles.dateText}>
            <Text style={{color: '#1A6B7E'}}>Deadline: </Text>
            {date}
          </Text>
        </View>
      </View>

      <View style={[styles.categoryBadge, getCategoryColor(category)]}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
    </View>
  );
};

let colorCounter = 0;

// This version preserves the switch but loops through colors
const getCategoryColor = (_: string) => {
  const color = categoryColors[colorCounter % categoryColors.length];
  colorCounter++;

  return {backgroundColor: color};
};

export default TodoCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  pendingDeleteCard: {
    opacity: 0.6,
    backgroundColor: '#F0F0F0',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkbox: {
    marginRight: 12,
    padding: 4,
  },
  textContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
