import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Feather } from '@react-native-vector-icons/feather';

import React, { useCallback, useState } from 'react';
import Dashboard from './DashboardContainer';
import Settings from './SettingsContainer';
import Sidemenu from './SidemenuContainer';

import AppContext from '../Services/AppContext';
import { LogBox } from 'react-native';

const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

LogBox.ignoreAllLogs();

const Tabs = () => (
  <BottomTabs.Navigator initialRouteName="Dashboard">
    <BottomTabs.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarButtonTestID: 'DashboardTab',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Feather name="list" color={color} size={22} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarButtonTestID: 'SettingsTab',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Feather name="settings" color={color} size={22} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

function Navigation() {
  const [onlyShowBitcoin, setOnlyShowBitcoin] = useState(false);
  const [onlyShowWinners, setOnlyShowWinners] = useState(false);
  const [onlyShowLosers, setOnlyShowLosers] = useState(false);

  const toggleOnlyShowBitcoin = useCallback(() => {
    setOnlyShowBitcoin(!onlyShowBitcoin);
  }, [onlyShowBitcoin, setOnlyShowBitcoin]);

  const toggleOnlyShowWinners = useCallback(() => {
    setOnlyShowWinners(!onlyShowWinners);
    if (onlyShowLosers) {
      setOnlyShowLosers(false);
    }
  }, [onlyShowWinners, onlyShowLosers]);

  const toggleOnlyShowLosers = useCallback(() => {
    setOnlyShowLosers(!onlyShowLosers);
    if (onlyShowWinners) {
      setOnlyShowWinners(false);
    }
  }, [onlyShowLosers, onlyShowWinners]);

  return (
    <AppContext.Provider
      value={{
        onlyShowBitcoin,
        onlyShowWinners,
        onlyShowLosers,
        toggleOnlyShowBitcoin,
        toggleOnlyShowWinners,
        toggleOnlyShowLosers,
      }}
    >
      <Drawer.Navigator drawerContent={Sidemenu}>
        <Drawer.Screen name="Tabs" component={Tabs} />
      </Drawer.Navigator>
    </AppContext.Provider>
  );
}

export default Navigation;
