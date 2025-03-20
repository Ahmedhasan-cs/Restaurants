import {useState} from 'react';
import { useReduxDispatch, useReduxSelector } from '@util/redux/store';
import { hasError, inLoading, loginRequest } from '@util/redux/slice/authenticationSlice';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

interface UseLoginReturn {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  isFormSubmitted: boolean;
  submit: () => void;
  isLoading: boolean;
  error: string | null;
}

export const useLogin = (): Readonly<UseLoginReturn> => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const dispatch = useReduxDispatch();
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = password.length >= 6;

  const isLoading = useReduxSelector(inLoading);
  const error = useReduxSelector(hasError);

  function submit() {
    setIsFormSubmitted(true);

    if (!isEmailValid || !isPasswordValid) return;

    handleLogin();
  }

  function handleLogin() {
    try {
      dispatch(loginRequest({ email, password }));
    } catch (err) {
      console.log("Login failed. Please try again.");
    } finally {
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isEmailValid,
    isPasswordValid,
    isFormSubmitted,
    submit,
    isLoading,
    error
  };
};