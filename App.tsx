// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import BottomTabs from './navigation/BottomTabs';
// import UpStatusBar from './Components/UpStatusBar';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <UpStatusBar />
//       <BottomTabs />
//     </NavigationContainer>
//   );
// }

// App.tsx
// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './navigation/BottomTabs';
import SubjectDetailScreen from './screens/SubjectDetailScreen';
import AssignmentsScreen from './screens/AssignmentsScreen'; // You need to create this
import AssignmentDetailScreen from './screens/AssignmentDetailScreen'; // You need to create this
import SyllabusScreen from './screens/SyllabusScreen'; // You need to create this
import StudyMaterialScreen from './screens/StudyMaterialScreen'; // You need to create this
import GradesScreen from './screens/GradesScreen'; // You need to create this
import {RootStackParamList} from './types';
import UpStatusBar from './Components/UpStatusBar';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <UpStatusBar />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={BottomTabs} />
        <Stack.Screen name="SubjectDetail" component={SubjectDetailScreen} />
        <Stack.Screen name="Assignments" component={AssignmentsScreen} />
        <Stack.Screen
          name="AssignmentDetail"
          component={AssignmentDetailScreen}
        />
        <Stack.Screen name="Syllabus" component={SyllabusScreen} />
        <Stack.Screen name="StudyMaterial" component={StudyMaterialScreen} />
        <Stack.Screen name="Grades" component={GradesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
