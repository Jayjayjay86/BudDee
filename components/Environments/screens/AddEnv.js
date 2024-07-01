import {
  ScrollView,
  StatusBar,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {EnvironmentObject} from '../../../core/constants/Misc';

import MeasurementSelector from '../components/MeasurementSelector';

import NameInput from '../components/NameInput';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';
import CreateHeader from '../../../core/components/Headers/CreateHeader';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import LightHourSelector from '../components/LightHourSelector';
import {
  createEnvironment,
  updateEnvironment,
} from '../../../database/environments';
import {createPlants} from '../../../database/plants';

const AddEnv = ({navigation, route}) => {
  const {plantData} = route.params ?? [];
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [envObject, setEnvObject] = useState(EnvironmentObject);
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handlePressNext = async () => {
    if (envObject.name === '') {
      ToastAndroid.show(
        translation.environments &&
          translation.environments.environments.EnterName,
        ToastAndroid.BOTTOM,
      );
      return;
    }
    if (envObject.roomDetails.height === '') {
      ToastAndroid.show(
        translation.environments &&
          translation.environments.environments.EnterHeight,
        ToastAndroid.BOTTOM,
      );
      return;
    }
    if (envObject.roomDetails.width === '') {
      ToastAndroid.show(
        translation.environments &&
          translation.environments.environments.EnterWidth,
        ToastAndroid.BOTTOM,
      );
      return;
    }
    if (envObject.roomDetails.length === '') {
      ToastAndroid.show(
        translation.environments &&
          translation.environments.environments.EnterLength,
        ToastAndroid.BOTTOM,
      );
      return;
    }
    if (envObject.lightHours === '') {
      ToastAndroid.show(
        translation.environments &&
          translation.environments.environments.EnterHours,
        ToastAndroid.BOTTOM,
      );
      return;
    }

    const newEnvironmentId = await createEnvironment({
      ...envObject,
    });

    if (plantData) {
      const newPlantData = {
        ...plantData,
        environmentId: newEnvironmentId,
      };
      const batchId = await createPlants(newPlantData);
      updateEnvironment({
        ...envObject,
        plants: newEnvironmentId.plants.push(batchId),
        id: newEnvironmentId,
      });
      ToastAndroid.show(
        translation.environments &&
          translation.environments.environments.EnvironmentUpdated,
        ToastAndroid.BOTTOM,
      );
      navigation.navigate('Index');
    } else {
      ToastAndroid.show(
        translation.environments &&
          translation.environments.environments.EnvironmentCreated,
        ToastAndroid.BOTTOM,
      );
      navigation.navigate('Index');
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />

      <CreateHeader
        colors={theme}
        message={
          translation.environments &&
          translation.environments.addEnv.HeaderMessage
        }
      />

      <ScrollView style={styles.formContainer}>
        <NameInput
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
        <LightHourSelector
          translation={translation}
          setEnvObject={setEnvObject}
          envObject={envObject}
          colors={theme}
        />
      </ScrollView>
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
  formContainer: {flex: 1, margin: 10},
});
