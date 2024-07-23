/* eslint-disable prettier/prettier */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  WorkoutPlans: undefined;
  MealPrep: undefined;
  Profile: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
export type RouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>;
