// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// function App(): React.JSX.Element {
//   return (

//   );
// }

// const styles = StyleSheet.create({

// });

// export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs'; // You’ll create this next
import upStatusBar from './Components/UpStatusBar';
import UpStatusBar from './Components/UpStatusBar';

export default function App() {
  return (
    <NavigationContainer>
      <UpStatusBar />
      <BottomTabs />
    </NavigationContainer>
  );
}
