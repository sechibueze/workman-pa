import { createStackNavigator } from '@react-navigation/stack';

import {
  FORGOT_PASSWORD_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  TASK_FEED_SCREEN,
  WELCOME_SCREEN,
} from '../constants/screens.constant';
import WelcomeScreen from 'app/screens/WelcomeScreen';
import LoginScreen from 'app/screens/LoginScreen';
import RegisterScreen from 'app/screens/RegisterScreen';
import ForgotPasswordScreen from 'app/screens/ForgotPasswordScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TasksScreen from '../screens/TasksScreen';
const BottomTabsNavigator = createBottomTabNavigator();
const AppStackNavigator = createStackNavigator();

const AppNavigator = ({ currentUser }) => {
  return !currentUser ? (
    <AppStackNavigator.Navigator>
      <AppStackNavigator.Screen
        name={WELCOME_SCREEN}
        component={WelcomeScreen}
      />
      <AppStackNavigator.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <AppStackNavigator.Screen
        name={REGISTER_SCREEN}
        component={RegisterScreen}
      />
      <AppStackNavigator.Screen
        name={FORGOT_PASSWORD_SCREEN}
        component={ForgotPasswordScreen}
      />
    </AppStackNavigator.Navigator>
  ) : (
    <BottomTabsNavigator.Navigator>
      <BottomTabsNavigator.Screen
        name={TASK_FEED_SCREEN}
        component={TasksScreen}
      />
    </BottomTabsNavigator.Navigator>
  );
};

export default AppNavigator;
