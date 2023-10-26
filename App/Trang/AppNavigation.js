import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrangHome from './TrangHome';
import TrangXe from './TrangXe';
import TrangThongTinXe from './TrangThongTinXe';

const Stack = createStackNavigator();

const AppNavigation =() => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='TrangHome' component={TrangHome}></Stack.Screen>
      <Stack.Screen name='TrangXe' component={TrangXe}></Stack.Screen>
      <Stack.Screen name='TrangThongTinXe' component={TrangThongTinXe}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  );
}
export default AppNavigation;

