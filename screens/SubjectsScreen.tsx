// import React from 'react';
// import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
// import SubjectCard from '../Components/SubjectCard';

// const SubjectsScreen: React.FC = () => {
//   return (
//     <SafeAreaView>
//       <ScrollView style={styles.Container}>
//         <View style={styles.headingContainer}>
//           <Text style={styles.headingTxt}>Subjects</Text>
//           <Text style={styles.descriptionTxt}>
//             Find info related to your assignments, grades, syllabus and more.
//           </Text>
//         </View>

//         <View style={styles.bodyContainer}>
//           <SubjectCard
//             title="Mobile App"
//             description="Mobile app studies with Prof. Akhzar Nazir"
//           />
//           <SubjectCard
//             title="Operating Systems"
//             description="Learn operating systems basic to advance with Prof.Naseer"
//           />
//           <SubjectCard
//             title="Artificial Intelligence"
//             description="Ride the world of Artificial Intelligence with Dr Wajahat Qazi"
//           />
//           <SubjectCard
//             title="Financial Accounting"
//             description="Handle Finances with Prof Naila Yousaf"
//           />

//           <SubjectCard
//             title={'Theory of Autometa'}
//             description={'Autometa world expolration with Dr. Ashfaq Ahmad'}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SubjectsScreen;

// const styles = StyleSheet.create({
//   Container: {
//     margin: 16,
//     paddingVertical: 8,
//     paddingHorizontal: 6,
//   },
//   headingContainer: {},
//   headingTxt: {
//     fontSize: 24,
//     color: '#1A6B7E',
//     fontWeight: 'bold',
//   },
//   descriptionTxt: {
//     marginVertical: 12,
//   },
//   bodyContainer: {},
// });

//claude
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SubjectCard from '../Components/SubjectCard';
import {RootStackParamList, Subject} from '../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'SubjectDetail'>;

const SubjectsScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const subjects: Subject[] = [
    {
      id: '1',
      title: 'Mobile App',
      description: 'Mobile app studies with Prof. Akhzar Nazir',
      professor: 'Prof. Akhzar Nazir',
    },
    {
      id: '2',
      title: 'Operating Systems',
      description: 'Learn operating systems basic to advance with Prof.Naseer',
      professor: 'Prof. Naseer',
    },
    {
      id: '3',
      title: 'Artificial Intelligence',
      description:
        'Ride the world of Artificial Intelligence with Dr Wajahat Qazi',
      professor: 'Dr Wajahat Qazi',
    },
    {
      id: '4',
      title: 'Financial Accounting',
      description: 'Handle Finances with Prof Naila Yousaf',
      professor: 'Prof Naila Yousaf',
    },
    {
      id: '5',
      title: 'Theory of Autometa',
      description: 'Autometa world exploration with Dr. Ashfaq Ahmad',
      professor: 'Dr. Ashfaq Ahmad',
    },
  ];

  const handleSubjectPress = (subject: Subject) => {
    navigation.navigate('SubjectDetail', {subject});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.Container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTxt}>Subjects</Text>
          <Text style={styles.descriptionTxt}>
            Find info related to your assignments, grades, syllabus and more.
          </Text>
        </View>

        <View style={styles.bodyContainer}>
          {subjects.map((subject, index) => (
            <SubjectCard
              key={subject.id}
              title={subject.title}
              description={subject.description}
              onPress={() => handleSubjectPress(subject)}
              colorIndex={index}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubjectsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  Container: {
    margin: 16,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  headingContainer: {},
  headingTxt: {
    fontSize: 24,
    color: '#1A6B7E',
    fontWeight: 'bold',
  },
  descriptionTxt: {
    marginVertical: 12,
    color: '#666',
  },
  bodyContainer: {},
});
