/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Redux
import { createStore } from 'redux'
import {Provider} from 'react-redux';
import allReducers from './src/reducers';

let store = createStore(allReducers);
const App = () => {
    <Provider store ={store}>

    </Provider>
}
AppRegistry.registerComponent(appName, () => App);
