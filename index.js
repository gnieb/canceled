/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const App = () => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

AppRegistry.registerComponent(appName, () => App);
 
