// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
//   Alert,
// } from 'react-native';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// // import DocumentPicker from 'react-native-document-picker';

// const AssignmentDetailScreen: React.FC = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const {assignment, subject} = route.params as {assignment: any; subject: any};

//   const [activeTab, setActiveTab] = useState<
//     'submission' | 'instructions' | 'comments'
//   >('submission');
//   const [assignmentNote, setAssignmentNote] = useState('');
//   const [attachedFile, setAttachedFile] = useState<any>(null);

//   const handleBack = () => {
//     navigation.goBack();
//   };

//   const handleAttachFile = async () => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       setAttachedFile(result[0]);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         // User cancelled the picker
//       } else {
//         Alert.alert('Error', 'Failed to pick document');
//       }
//     }
//   };

//   const handleSubmit = () => {
//     if (!attachedFile && !assignmentNote.trim()) {
//       Alert.alert(
//         'Error',
//         'Please add a note or attach a file before submitting',
//       );
//       return;
//     }

//     Alert.alert(
//       'Submit Assignment',
//       'Are you sure you want to submit this assignment?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'Submit',
//           onPress: () => {
//             Alert.alert('Success', 'Assignment submitted successfully!');
//             navigation.goBack();
//           },
//         },
//       ],
//     );
//   };

//   const handleCancel = () => {
//     setAssignmentNote('');
//     setAttachedFile(null);
//   };

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'submission':
//         return (
//           <View style={styles.tabContent}>
//             <Text style={styles.label}>Assignment Note</Text>
//             <TextInput
//               style={styles.textInput}
//               placeholder="Add your assignment notes here..."
//               value={assignmentNote}
//               onChangeText={setAssignmentNote}
//               multiline
//               numberOfLines={6}
//               textAlignVertical="top"
//             />

//             <View style={styles.fileSection}>
//               <Text style={styles.label}>FILE</Text>
//               <TouchableOpacity
//                 style={styles.attachButton}
//                 onPress={handleAttachFile}>
//                 <Icon name="attach-file" size={20} color="#666" />
//                 <Text style={styles.attachButtonText}>Attach Assignment</Text>
//               </TouchableOpacity>

//               {attachedFile && (
//                 <View style={styles.attachedFile}>
//                   <Icon name="description" size={16} color="#666" />
//                   <Text style={styles.fileName}>{attachedFile.name}</Text>
//                   <TouchableOpacity onPress={() => setAttachedFile(null)}>
//                     <Icon name="close" size={16} color="#666" />
//                   </TouchableOpacity>
//                 </View>
//               )}
//             </View>

//             <View style={styles.actionButtons}>
//               <TouchableOpacity
//                 style={styles.cancelButton}
//                 onPress={handleCancel}>
//                 <Text style={styles.cancelButtonText}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.submitButton}
//                 onPress={handleSubmit}>
//                 <Text style={styles.submitButtonText}>Submit</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         );
//       case 'instructions':
//         return (
//           <View style={styles.tabContent}>
//             <Text style={styles.instructionsText}>
//               {assignment.description}
//             </Text>
//             <Text style={styles.instructionsText}>
//               Make sure to follow all guidelines and submit before the due date.
//             </Text>
//           </View>
//         );
//       case 'comments':
//         return (
//           <View style={styles.tabContent}>
//             <Text style={styles.noCommentsText}>No comments yet</Text>
//           </View>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleBack} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Assignments</Text>
//         <View style={styles.placeholder} />
//       </View>

//       <ScrollView style={styles.container}>
//         <View style={styles.assignmentHeader}>
//           <Text style={styles.assignmentTitle}>{assignment.title}</Text>
//           <Text style={styles.dueDate}>Due date: {assignment.dueDate}</Text>
//         </View>

//         <View style={styles.tabContainer}>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'submission' && styles.activeTab]}
//             onPress={() => setActiveTab('submission')}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === 'submission' && styles.activeTabText,
//               ]}>
//               Submission
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.tab,
//               activeTab === 'instructions' && styles.activeTab,
//             ]}
//             onPress={() => setActiveTab('instructions')}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === 'instructions' && styles.activeTabText,
//               ]}>
//               Instructions
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'comments' && styles.activeTab]}
//             onPress={() => setActiveTab('comments')}>
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === 'comments' && styles.activeTabText,
//               ]}>
//               Comments
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {renderTabContent()}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default AssignmentDetailScreen;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: '#F5F5F5',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E0E0E0',
//   },
//   backButton: {
//     padding: 8,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   placeholder: {
//     width: 40,
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   assignmentHeader: {
//     marginBottom: 24,
//   },
//   assignmentTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   dueDate: {
//     fontSize: 14,
//     color: '#666',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E0E0E0',
//     marginBottom: 20,
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#1A6B7E',
//   },
//   tabText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   activeTabText: {
//     color: '#1A6B7E',
//     fontWeight: '600',
//   },
//   tabContent: {
//     flex: 1,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 8,
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//     marginBottom: 20,
//     minHeight: 120,
//   },
//   fileSection: {
//     marginBottom: 30,
//   },
//   attachButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F0F0F0',
//     padding: 12,
//     borderRadius: 8,
//     justifyContent: 'center',
//     gap: 8,
//   },
//   attachButtonText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   attachedFile: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F8F8F8',
//     padding: 8,
//     borderRadius: 6,
//     marginTop: 8,
//     gap: 8,
//   },
//   fileName: {
//     flex: 1,
//     fontSize: 14,
//     color: '#333',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     gap: 12,
//     marginTop: 20,
//   },
//   cancelButton: {
//     flex: 1,
//     backgroundColor: '#F0F0F0',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   cancelButtonText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   submitButton: {
//     flex: 1,
//     backgroundColor: '#1A6B7E',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   submitButtonText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   instructionsText: {
//     fontSize: 16,
//     color: '#333',
//     lineHeight: 24,
//     marginBottom: 16,
//   },
//   noCommentsText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginTop: 40,
//   },
// });

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AssignmentDetailScreen() {
  return (
    <View>
      <Text>AssignmentDetailScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
