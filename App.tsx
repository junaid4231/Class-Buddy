import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    // <SafeAreaView>
    //   <ScrollView>
    //     <StatusBar backgroundColor={'#1A6B7E'} />
    //     <View>
    //       <Text>Class Buddy</Text>
    //     </View>
    //   </ScrollView>
    //   ``
    // </SafeAreaView>

    <SafeAreaView>
      <StatusBar backgroundColor={'#1A6B7E'} />
      <View style={styles.upperBar}>
        <Text style={styles.heading}>Class Buddy</Text>
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity>
          <Text> home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperBar: {
    height: 50,
    backgroundColor: '#1A6B7E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  navContainer: {},
});

export default App;
