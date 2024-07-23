/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Dashboard from './src/screens/Dashboard';
import WorkoutPlansScreen from './src/screens/WorkoutPlansScreen';
import MealPrepScreen from './src/screens/MealPrepScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="WorkoutPlans" component={WorkoutPlansScreen} />
          <Stack.Screen name="MealPrep" component={MealPrepScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>g
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
