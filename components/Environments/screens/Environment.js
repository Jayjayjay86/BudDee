import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';
import CreateHeader from '../../../core/components/Headers/CreateHeader';
import NameInput from '../components/NameInput';
import LightSelector from '../components/LightSelector';
import MeasurementSelector from '../components/MeasurementSelector';
import LightHourSelector from '../components/LightHourSelector';
import OtherDetailsSelector from '../components/OtherDetailsSelector';

const Environment = ({navigation, route}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const {envData} = route.params;
  const parsedEnvData = JSON.parse(envData);

  const [envObject, setEnvObject] = useState(envData);
  const handleGoBack = () => {
    navigation.navigate('Index', {screen: 'Environments'});
  };
  const handlePressNext = () => {
    navigation.navigate('Index');
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.envs.noEnvs.background},
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <CreateHeader colors={theme} message={'Environment'} />

      <View style={styles.formContainer}>
        <NameInput
          translation={translation}
          setEnvObject={setEnvObject}
          envObject={parsedEnvData}
          colors={theme}
        />

        <MeasurementSelector
          translation={translation}
          setEnvObject={setEnvObject}
          envObject={parsedEnvData}
          colors={theme}
        />
        <LightHourSelector
          translation={translation}
          setEnvObject={setEnvObject}
          envObject={parsedEnvData}
          colors={theme}
        />
      </View>
      <BottomToolBar
        icons={icons}
        colors={theme}
        isDarkMode={isDarkMode}
        backMessage={
          translation.core && translation.core.headers.bottomToolBar.Back
        }
        handleGoBack={handleGoBack}
        handlePressNext={handlePressNext}
        nextMessage={
          translation.core && translation.core.headers.bottomToolBar.Save
        }
      />
    </View>
  );
};

export default Environment;

const styles = StyleSheet.create({
  container: {height: '100%'},
  formContainer: {flex: 1},
});
