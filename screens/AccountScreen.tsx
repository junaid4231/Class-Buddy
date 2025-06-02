import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.Container}>
        {/* Header */}
        <View style={styles.headingContainer}>
          <Text style={styles.headingTxt}>Account</Text>
          <Text style={styles.descriptionTxt}>
            Find info related to your Account, logout, help and about the app.
          </Text>
        </View>

        {/* Options */}
        <View style={styles.bodyContainer}>
          <AccountOption icon="person-circle-outline" label="Profile" />
          <AccountOption icon="create-outline" label="Edit Info" />
          <AccountOption icon="help-circle-outline" label="Help" />
          <AccountOption icon="information-circle-outline" label="About App" />
          <AccountOption icon="log-out-outline" label="Logout" isDanger />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const AccountOption = ({
  icon,
  label,
  isDanger,
}: {
  icon: string;
  label: string;
  isDanger?: boolean;
}) => (
  <TouchableOpacity style={styles.optionRow}>
    <View style={styles.iconLabel}>
      <Icon name={icon} size={22} color={isDanger ? 'red' : '#1A6B7E'} />
      <Text style={[styles.optionText, isDanger && {color: 'red'}]}>
        {label}
      </Text>
    </View>
    <Icon name="chevron-forward" size={20} color="#999" />
  </TouchableOpacity>
);

export default AccountScreen;

const styles = StyleSheet.create({
  Container: {
    margin: 16,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  headingContainer: {
    marginBottom: 20,
  },
  headingTxt: {
    fontSize: 24,
    color: '#1A6B7E',
    fontWeight: 'bold',
  },
  descriptionTxt: {
    marginTop: 8,
    fontSize: 14,
    color: '#444',
  },
  bodyContainer: {
    marginTop: 16,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#1A6B7E',
  },
});
