import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import AuthenticationNavigation from './authentication/AuthenticationNavigation';
import DashboardNavigation from './dashboard/DashboardNavigation';
import {useSelector} from 'react-redux';
import {isAuthorized} from '@util/redux/slice/authenticationSlice';

const RootNavigation = (): JSX.Element => {
  const isAuth = useSelector(isAuthorized);
  return (
    <NavigationContainer>
      {!isAuth && <AuthenticationNavigation />}
      {!!isAuth && <DashboardNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
