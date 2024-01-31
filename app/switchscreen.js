import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screen1 from './screen1';
import screen2 from './screen2';
const Stack = createNativeStackNavigator();

export default function Swi() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="screen 1"
          component={screen1}
          options={{title: 'screen 1'}}
        />
        <Stack.Screen name="screen 2" component={screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};