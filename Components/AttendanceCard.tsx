//Attendance card stylized
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface AttendanceCardProps {
  title: string;
  subtitle: string;
  percentage: string;
}
const AttendanceCard: React.FC<AttendanceCardProps> = ({
  title,
  subtitle,
  percentage,
}) => {
  // Extract the numeric part from the string and convert to number
  const numericPercentage = parseInt(percentage.replace('%', ''), 10);

  return (
    <View style={styles.card}>
      <View
        style={[
          styles.leftBar,
          numericPercentage >= 80 && {backgroundColor: 'green'},
        ]}
      />
      <View style={styles.cardContent}>
        <View style={styles.textSection}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Text
          style={[
            styles.percentage,
            numericPercentage >= 80 && {color: 'green'},
          ]}>
          {percentage}
        </Text>
      </View>
    </View>
  );
};

export default AttendanceCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'center',
  },
  leftBar: {
    width: 6,
    backgroundColor: '#E74C3C', // red color
    borderRadius: 6,
    height: '100%',
    marginRight: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  textSection: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  percentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E74C3C',
  },
});
