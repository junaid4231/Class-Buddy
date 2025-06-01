import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import CustomCard from '../Components/CustomCard';

const SubjectsScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.Container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTxt}>Subjects</Text>
          <Text style={styles.descriptionTxt}>
            Find info related to your assignments, grades, syllabus and more.
          </Text>
        </View>

        <View style={styles.bodyContainer}>
          <CustomCard
            title="Mobile App"
            description="Mobile app studies with Prof. Akhzar Nazir"
          />
          <CustomCard
            title="Operating Systems"
            description="Learn operating systems basic to advance with Prof.Naseer"
          />
          <CustomCard
            title="Artificial Intelligence"
            description="Ride the world of Artificial Intelligence with Dr Wajahat Qazi"
          />
          <CustomCard
            title="Financial Accounting"
            description="Handle Finances with Prof Naila Yousaf"
          />

          <CustomCard
            title={'Theory of Autometa'}
            description={'Autometa world expolration with Dr. Ashfaq Ahmad'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubjectsScreen;

const styles = StyleSheet.create({
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
  },
  bodyContainer: {},
});
