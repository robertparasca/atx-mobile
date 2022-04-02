/**
 * @format
 */
import * as React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import App from './App';
import {store} from './src/redux/store';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
