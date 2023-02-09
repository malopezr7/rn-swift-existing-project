/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Root from './src/core/Root';

AppRegistry.registerComponent(appName, () => Root);
