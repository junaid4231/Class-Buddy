import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

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
          <TouchableOpacity>
            <View style={[styles.subjectCard, styles.cardElevation]}>
              <Text style={styles.subHeadingTxt}>Mobile App</Text>
              <Text style={styles.subDescriptionTxt}>
                Mobile app studies with Prof. Akhzar Nazir
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.subjectCard, styles.cardElevation]}>
              <Text style={styles.subHeadingTxt}>Operating Systems</Text>
              <Text style={styles.subDescriptionTxt}>
                Learn operating systems basic to advance with Prof.Naseer
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.subjectCard, styles.cardElevation]}>
              <Text style={styles.subHeadingTxt}>Artificial Intelligence</Text>
              <Text style={styles.subDescriptionTxt}>
                Ride the world of Artificial Intelligence with Dr Wajahat Qazi
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.subjectCard, styles.cardElevation]}>
              <Text style={styles.subHeadingTxt}>Financial Accounting</Text>
              <Text style={styles.subDescriptionTxt}>
                Handle Finances with Prof Naila Yousaf
              </Text>
            </View>
          </TouchableOpacity>
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
