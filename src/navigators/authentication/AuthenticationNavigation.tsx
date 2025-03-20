import Login from '@features/authentication/ui/components/LoginScreen';
import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './AuthenticationNavigatorProps';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthenticationNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigation;
