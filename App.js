import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Welcome_Screen  from './screens/Welcome_Screen';
import  Sign_In_Screen from './screens/Sign_In_Screen';
import  Sign_Up_Zar_Screen from './screens/Sign_Up_Zar_Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
    <NavigationContainer>
   <Stack.Navigator>
        <Stack.Screen name="Welcome_Screen" component={Welcome_Screen} />
        <Stack.Screen name="Sign_In_Screen" component={Sign_In_Screen} />
        <Stack.Screen name="Sign_Up_Zar_Screen" component={Sign_Up_Zar_Screen} />

      </Stack.Navigator>
   </NavigationContainer>
    </TailwindProvider>
  );
}


  