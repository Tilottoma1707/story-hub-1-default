import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNAvigator} from  'react-navigation-tabs'
import WriteStoryScreen from './Screens/WriteStoryScreen'
import ReadSoryScreen from './Screens/ReadStoryScreen' 
import ReadStoryScreen from './Screens/ReadStoryScreen';


export default function App() {
  return (
    <View>
     <AppContainer/>
    </View>
  );
}

const TabNavigator = createBottomTabNAvigator({
  ReadStory:{Screens:ReadStoryScreen},
  WriteStoryScreen:{Screens:WriteStoryScreen}
})



