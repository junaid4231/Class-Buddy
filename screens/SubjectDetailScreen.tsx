// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const SubjectDetailScreen: React.FC = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const {subject} = route.params as {subject: any};

//   const handleBack = () => {
//     navigation.goBack();
//   };

//   const navigateToAssignments = () => {
//     navigation.navigate('Assignments', {subject});
//   };

//   const navigateToSyllabus = () => {
//     navigation.navigate('Syllabus', {subject});
//   };

//   const navigateToStudyMaterial = () => {
//     navigation.navigate('StudyMaterial', {subject});
//   };

//   const navigateToGrades = () => {
//     navigation.navigate('Grades', {subject});
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleBack} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Subjects</Text>
//         <View style={styles.placeholder} />
//       </View>

//       <ScrollView style={styles.container}>
//         <View style={styles.subjectHeader}>
//           <Text style={styles.subjectTitle}>{subject.title}</Text>
//           <Text style={styles.subjectDescription}>{subject.description}</Text>
//         </View>

//         <View style={styles.menuContainer}>
//           <View style={styles.row}>
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={navigateToSyllabus}>
//               <Text style={styles.menuText}>Syllabus</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={navigateToAssignments}>
//               <Icon name="add" size={24} color="#666" />
//               <Text style={styles.menuText}>Submit Assignment</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.row}>
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={navigateToStudyMaterial}>
//               <Text style={styles.menuText}>Study Material</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={navigateToGrades}>
//               <Text style={styles.menuText}>Grades</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SubjectDetailScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Subject} from '../types'; // Adjust path if needed
import Icon from 'react-native-vector-icons/MaterialIcons';

type SubjectDetailNavProp = StackNavigationProp<
  RootStackParamList,
  'SubjectDetail'
>;

const SubjectDetailScreen: React.FC = () => {
  const navigation = useNavigation<SubjectDetailNavProp>();
  const route = useRoute();
  const {subject} = route.params as {subject: Subject};

  const handleBack = () => {
    navigation.goBack();
  };

  const navigateToAssignments = () => {
    navigation.navigate('Assignments', {subject});
  };

  const navigateToSyllabus = () => {
    navigation.navigate('Syllabus', {subject});
  };

  const navigateToStudyMaterial = () => {
    navigation.navigate('StudyMaterial', {subject});
  };

  const navigateToGrades = () => {
    navigation.navigate('Grades', {subject});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subject Detail</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.subjectHeader}>
          <Text style={styles.subjectTitle}>{subject.title}</Text>
          <Text style={styles.subjectDescription}>{subject.description}</Text>
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={navigateToAssignments}>
              <Icon name="assignment" size={24} color="#00796B" />
              <Text style={styles.menuText}>Assignments</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={navigateToSyllabus}>
              <Icon name="menu-book" size={24} color="#00796B" />
              <Text style={styles.menuText}>Syllabus</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={navigateToStudyMaterial}>
              <Icon name="folder" size={24} color="#00796B" />
              <Text style={styles.menuText}>Study Material</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={navigateToGrades}>
              <Icon name="grade" size={24} color="#00796B" />
              <Text style={styles.menuText}>Grades</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubjectDetailScreen;

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
  subjectHeader: {
    marginBottom: 32,
  },
  subjectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subjectDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  menuContainer: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  menuItem: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    marginTop: 4,
  },
});
