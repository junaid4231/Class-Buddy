import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const SubjectsScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.navContainer}>
        <TouchableOpacity>
          <Text> Subjects are poor Dad</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SubjectsScreen;

const styles = StyleSheet.create({
  navContainer: {},
});
