/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from '../navigators/RootNavigation';
import {Provider} from 'react-redux';
import store from '@util/redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
