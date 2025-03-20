import {useLogin} from '@features/authentication/hooks/useLogin';
import {renderHook, act} from '@testing-library/react-native';
import {loginRequest} from '@util/redux/slice/authenticationSlice';
import {useReduxDispatch, useReduxSelector} from '@util/redux/store';

jest.mock('@util/api/apiManager', () => ({
  USE_MOCK: true,
}));

jest.mock('@util/redux/store', () => ({
  useReduxDispatch: jest.fn(() => jest.fn()), // Double mock to return a mock dispatch function
  useReduxSelector: jest.fn(() => jest.fn()),
}));

describe('useLogin Hook', () => {
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn(() => jest.fn());
    (useReduxDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useReduxSelector as jest.Mock).mockImplementation(selector => {
      if (selector === expect.any(Function)) {
        return false;
      }
      return null;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize with default values', () => {
    const {result} = renderHook(() => useLogin());
    expect(result.current.email).toBe('');
    expect(result.current.password).toBe('');
    expect(result.current.isFormSubmitted).toBe(false);
    expect(result.current.isEmailValid).toBe(false);
    expect(result.current.isPasswordValid).toBe(false);
  });

  it('should update email and validate correctly', () => {
    const {result} = renderHook(() => useLogin());

    act(() => {
      result.current.setEmail('test@example.com');
    });

    expect(result.current.email).toBe('test@example.com');
    expect(result.current.isEmailValid).toBe(true);
  });

  it('should update password and validate correctly', () => {
    const {result} = renderHook(() => useLogin());

    act(() => {
      result.current.setPassword('123456');
    });

    expect(result.current.password).toBe('123456');
    expect(result.current.isPasswordValid).toBe(true);
  });

  it('should set form submitted state and not dispatch if form is invalid', () => {
    const {result} = renderHook(() => useLogin());

    act(() => {
      result.current.setEmail('invalid-email');
      result.current.setPassword('123');
      result.current.submit();
    });

    expect(result.current.isFormSubmitted).toBe(true);
    expect(result.current.isPasswordValid).toBe(false);
    expect(result.current.isEmailValid).toBe(false);
  });
});
