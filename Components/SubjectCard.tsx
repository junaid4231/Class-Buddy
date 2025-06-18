// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React from 'react';

// interface SubjectCardProps {
//   title: string;
//   description: string;
// }

// const SubjectCard: React.FC<SubjectCardProps> = ({title, description}) => {
//   return (
//     <TouchableOpacity>
//       <View style={[styles.subjectCard, styles.cardElevation]}>
//         <Text style={styles.subHeadingTxt}>{title}</Text>
//         <Text style={styles.subDescriptionTxt}>{description}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default SubjectCard;

// const styles = StyleSheet.create({
//   subjectCard: {
//     height: 140,
//     width: 310,
//     borderWidth: 1,
//     borderColor: '#1A6B7E',
//     borderRadius: 14,
//     padding: 12,
//     marginVertical: 10,
//   },
//   cardElevation: {
//     elevation: 5, // Android shadow
//     shadowColor: '#000', // iOS shadow color
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     backgroundColor: 'white', // Always set backgroundColor for shadow to appear
//     borderRadius: 10, // Optional, for rounded corners
//     padding: 15,
//   },

//   subHeadingTxt: {
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   subDescriptionTxt: {
//     marginTop: 14,
//   },
// });

//claude
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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
  const getSubjectColor = (index: number) => {
    const colors = [
      '#FF6B6B', // Red
      '#4ECDC4', // Teal
      '#45B7D1', // Blue
      '#96CEB4', // Green
      '#FECA57', // Yellow
      '#A55EEA', // Purple
    ];

    return colors[index % colors.length];
  };

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        {backgroundColor: getSubjectColor(colorIndex)},
      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </TouchableOpacity>
  );
};

export default SubjectCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 20,
  },
});
