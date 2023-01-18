import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* 'headerShown: false' ile sayfaların baslığını kaldırdık */}
        <Stack.Screen
          name="Welcome"
          component={Welcome} />
        <Stack.Screen
          name='MemberSign'
          component={MemberSign} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
