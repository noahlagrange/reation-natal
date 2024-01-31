import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from './Button';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screen1 from './screen1';
import screen2 from './screen2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="screen1"
        component={screen1}
      />
      <Stack.Screen name="screen2" component={screen2} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

