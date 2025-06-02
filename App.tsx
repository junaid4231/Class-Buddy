import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs';
import UpStatusBar from './Components/UpStatusBar';

export default function App() {
  return (
    <NavigationContainer>
      <UpStatusBar />
      <BottomTabs />
    </NavigationContainer>
  );
}
