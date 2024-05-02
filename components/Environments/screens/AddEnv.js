import {StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {useFocusEffect} from '@react-navigation/native';
import {en, th} from '../../../core/constants/Locales';
import {getOptions} from '../../../database/options';
import {EnvironmentObject} from '../../../core/constants/Misc';

import LightSelector from '../components/LightSelector';
import MeasurementSelector from '../components/MeasurementSelector';
import OtherDetailsSelector from '../components/OtherDetailsSelector';
import NameInput from '../components/NameInput';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';
import CreateHeader from '../../../core/components/Headers/CreateHeader';

import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

const AddEnv = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const [envObject, setEnvObject] = useState(EnvironmentObject);

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handlePressNext = () => {
    navigation.navigate('Index');
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <CreateHeader
        colors={theme}
        message={
          translation.environments &&
          translation.environments.addEnv.HeaderMessage
        }
      />
      <View style={styles.formContainer}>
        <NameInput
          translation={translation}
          setEnvObject={setEnvObject}
          envObject={envObject}
          colors={theme}
        />
        <LightSelector
          translation={translation}
          setEnvObject={setEnvObject}
          envObject={envObject}
          colors={theme}
        />
        <MeasurementSelector
          translation={translation}
          setEnvObject={setEnvObject}
          envObject={envObject}
          colors={theme}
        />
        <OtherDetailsSelector
          translation={translation}
          setEnvObject={setEnvObject}
          envObject={envObject}
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
          translation.core && translation.core.headers.bottomToolBar.Next
        }
      />
    </View>
  );
};

export default AddEnv;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  formContainer: {flex: 1},
});
