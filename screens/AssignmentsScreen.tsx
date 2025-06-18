import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Assignment, Subject, RootStackParamList} from '../types'; // adjust path as needed

type AssignmentsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Assignments'
>;
type AssignmentsScreenRouteProp = RouteProp<RootStackParamList, 'Assignments'>;

const AssignmentsScreen: React.FC = () => {
  const navigation = useNavigation<AssignmentsScreenNavigationProp>();
  const route = useRoute<AssignmentsScreenRouteProp>();
  const {subject} = route.params;

  const [assignments] = useState<Assignment[]>([
    {
      id: '1',
      title: 'Write about Immanuel Kant',
      description:
        "Write about Immanuel Kant in 500 words - use pen and your brain only don't Copy!",
      dueDate: '30th Nov',
      status: 'pending',
    },
    {
      id: '2',
      title: 'Write about Einstein',
      description:
        "Write about Einstein 500 words kant inwords- use pen and your brain only don't Copy!",
      dueDate: '1st Dec',
      status: 'pending',
    },
  ]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAssignmentPress = (assignment: Assignment) => {
    navigation.navigate('AssignmentDetail', {assignment, subject});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assignments</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Pending Assignments</Text>
        </View>

        <View style={styles.assignmentsList}>
          {assignments.map(assignment => (
            <TouchableOpacity
              key={assignment.id}
              style={styles.assignmentCard}
              onPress={() => handleAssignmentPress(assignment)}>
              <View style={styles.assignmentContent}>
                <Text style={styles.assignmentTitle}>{assignment.title}</Text>
                <Text style={styles.assignmentDescription} numberOfLines={2}>
                  {assignment.description}
                </Text>
              </View>

              <View style={styles.dueDateContainer}>
                <Icon name="schedule" size={16} color="#666" />
                <Text style={styles.dueDateLabel}>Due Date:</Text>
                <Text style={styles.dueDate}>{assignment.dueDate}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssignmentsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  assignmentsList: {
    gap: 12,
  },
  assignmentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  assignmentContent: {
    marginBottom: 12,
  },
  assignmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  assignmentDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  dueDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dueDateLabel: {
    fontSize: 12,
    color: '#666',
  },
  dueDate: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
});
