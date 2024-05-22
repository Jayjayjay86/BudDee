import {
  ScrollView,
  StatusBar,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {EnvironmentObject} from '../../../core/constants/Misc';
import LightSelector from '../components/LightSelector';
import MeasurementSelector from '../components/MeasurementSelector';
import OtherDetailsSelector from '../components/OtherDetailsSelector';
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
      ToastAndroid.show('Enter a Name', ToastAndroid.showWithGravity);
    }
    if (envObject.roomDetails.height === '') {
      ToastAndroid.show('Enter a Room Height', ToastAndroid.showWithGravity);
    }
    if (envObject.roomDetails.width === '') {
      ToastAndroid.show('Enter a Room Width', ToastAndroid.showWithGravity);
    }
    if (envObject.roomDetails.length === '') {
      ToastAndroid.show('Enter a Room Length', ToastAndroid.showWithGravity);
    }
    if (envObject.lightHours === '') {
      return;
    }

    const newEnvironmentId = await createEnvironment({
      ...envObject,
    });

    const newPlantData = await {
      ...plantData,
      environmentId: newEnvironmentId,
    };
    if (plantData) {
      await createPlants(newPlantData);
    }

    updateEnvironment({...envObject, id: newEnvironmentId});
    navigation.navigate('Index');
  };
  const HandleAddLight = () => {};

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
        <LightSelector
          navigation={navigation}
          translation={translation}
          setEnvObject={setEnvObject}
          envObject={envObject}
          colors={theme}
          icons={icons}
          HandleAddLight={HandleAddLight}
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
        <OtherDetailsSelector
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
