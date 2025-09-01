import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import React from 'react';
import Navigation from './App/Containers/NavigationContainer';
import { name as appName } from './app.json';

import { NavigationContainer } from '@react-navigation/native';

console.disableYellowBox = true;

export default function ContainerApp() {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    );
}

AppRegistry.registerComponent(appName, () => ContainerApp);
