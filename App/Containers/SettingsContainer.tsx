import React, { useContext, useMemo } from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Screen } from '../Components';

import { styles } from '../Common';
import AppContext from '../Services/AppContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Option({
  text,
  option,
  setOption,
}: {
  text: string;
  option: boolean;
  setOption: () => void;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {
          width: undefined,
          alignItems: 'center',
          marginHorizontal: 10,
          padding: 10,
        },
      ]}
      onPress={setOption}
    >
      <View style={styles.left}>
        <CheckBox value={option} />
      </View>
      <>
        <Text style={styles.h2}>{text}</Text>
      </>
    </TouchableOpacity>
  );
}

function Settings() {
  const {
    onlyShowBitcoin,
    onlyShowWinners,
    onlyShowLosers,
    toggleOnlyShowBitcoin,
    toggleOnlyShowWinners,
    toggleOnlyShowLosers,
  } = useContext(AppContext);

  return useMemo(
    () => (
      <Screen
        image="fishes"
        testID="settings"
        accessibilityLabel="settings"
        top={
          <View style={styles.titleWrapper}>
            <Text
              testID="settings-title"
              accessibilityLabel="settings-title"
              style={styles.h1}
            >
              Application Settings
            </Text>
          </View>
        }
      >
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <Option
            text={'Only show "Bitcoin" coins'}
            option={onlyShowBitcoin}
            setOption={toggleOnlyShowBitcoin}
          />
          <Option
            text={'Only show winners'}
            option={onlyShowWinners}
            setOption={toggleOnlyShowWinners}
          />
          <Option
            text={'Only show losers'}
            option={onlyShowLosers}
            setOption={toggleOnlyShowLosers}
          />
        </View>
      </Screen>
    ),
    [
      onlyShowBitcoin,
      onlyShowWinners,
      onlyShowLosers,
      toggleOnlyShowBitcoin,
      toggleOnlyShowWinners,
      toggleOnlyShowLosers,
    ],
  );
}

export default Settings;
('');
