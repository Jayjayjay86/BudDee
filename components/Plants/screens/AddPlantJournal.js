import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  EnvironmentObject,
  PlantActionObject,
} from '../../../core/constants/Misc';

import BottomToolBar from '../../../core/components/Headers/BottomToolBar';
import CreateHeader from '../../../core/components/Headers/CreateHeader';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import NewPlantActionList from '../../Actions/components/NewPlantActionList';
import {envData} from '../../../core/constants/dummy';
import {getEnvironments} from '../../../database/environments';
import {getPlants} from '../../../database/plants';
import {useFocusEffect} from '@react-navigation/native';

const AddPlantJournal = ({navigation, route}) => {
  const {plantData} = route.params ?? [];
  const {environmentData} = route.params ?? [];
  const [selectedEnvironment, setSelectedEnvironment] = useState({
    ...environmentData,
  });
  const [actionOptions, setActionOptions] = useState('');
  const [selectedPlants, setSelectedPlants] = useState([...plantData]);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [environments, setEnvironments] = useState(envData);
  const [plants, setPlants] = useState([]);
  const [actionObject, setActionObject] = useState({
    ...PlantActionObject,
    date: new Date(),
  });
  const [envObject, setEnvObject] = useState(EnvironmentObject);

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handlePressNext = () => {
    navigation.navigate('Index');
  };
  async function loadData() {
    setIsLoading(true);
    try {
      const environmentsArray = await getEnvironments();
      setEnvironments(environmentsArray);
    } catch (error) {}
    try {
      const plantsArray = await getPlants();
      setPlants(plantsArray);
      
    } catch (error) {}
    setIsLoading(false);
  }
  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <CreateHeader colors={theme} message={'Plant Journal'} />
      <View style={styles.formContainer}>
        <NewPlantActionList
          plants={plants}
          isDarkMode={isDarkMode}
          datePickerVisible={datePickerVisible}
          setDatePickerVisible={setDatePickerVisible}
          actionObject={actionObject}
          setActionObject={setActionObject}
          translation={translation}
          icons={icons}
          theme={theme}
          setSelectedPlants={setSelectedPlants}
          setActionOptions={setActionOptions}
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

export default AddPlantJournal;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  formContainer: {flex: 1},
});
