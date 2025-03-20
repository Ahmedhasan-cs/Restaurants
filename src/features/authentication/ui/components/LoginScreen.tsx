import React, {useEffect} from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import InputRow from './InputRow';
import {useLogin} from '@features/authentication/hooks/useLogin';
import {styles} from '../styles/loginScreenStyle';

const LoginScreen = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    submit,
    isEmailValid,
    isPasswordValid,
    isFormSubmitted,
    error,
    isLoading,
  } = useLogin();

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
  }, [error]);

  return (
    <LinearGradient colors={['#6A11CB', '#2575FC']} style={styles.background}>
      <SafeAreaView style={styles.flexOne} edges={['top', 'left', 'right']}>
        <StatusBar barStyle={'light-content'} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Hello there, sign in to continue!
            </Text>

            <InputRow
              label="Username or email"
              value={email}
              onChangeText={setEmail}
              isValid={isEmailValid}
              isFormSubmitted={isFormSubmitted}
            />

            <InputRow
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              isValid={isPasswordValid}
              isFormSubmitted={isFormSubmitted}
            />

            <TouchableOpacity onPress={submit} style={[styles.signInButton]}>
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;
