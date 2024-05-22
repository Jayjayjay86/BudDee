import {Modal, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import BottomToolBar from '../../../core/components/Headers/BottomToolBar';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import ModalSelector from 'react-native-modal-selector';
import {useFocusEffect} from '@react-navigation/native';
import {
  getEnvironments,
  updateEnvironment,
} from '../../../database/environments';
import {plantObject} from '../../../core/objects/types';
import {createPlants} from '../../../database/plants';

const SelectEnv = ({navigation, route}) => {
  const {plantData} = route.params ?? {};
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [environmentArray, setEnvironmentArray] = useState([{}]);
  const [selectedEnvironment, setSelectedEnvironment] = useState({});

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handlePressNext = async () => {
    try {
      if (selectedEnvironment) {
        const newPlants = await createPlants({
          ...plantObject,
          environmentId: selectedEnvironment.id,
        });
      }
      await updateEnvironment(selectedEnvironment);
      await loadData();
      ToastAndroid.show('Plants Saved', ToastAndroid.BOTTOM);
      navigation.navigate('Index', 'Plants');
    } catch (error) {}
  };
  const [isLoading, setIsLoading] = useState(true);

  async function loadData() {
    setIsLoading(true);
    try {
      const environmentsArray = await getEnvironments();

      const mappedEnvironmentsArray = environmentsArray.map(
        (environ, index) => {
          return {...environ, key: index + 1, label: environ.name};
        },
      );

      setEnvironmentArray(mappedEnvironmentsArray);
    } catch (error) {
      console.error('Error In Environments.js:', error);
    }

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
    <View style={styles.container}>
      <View style={styles.selectForm}>
        <Text>{translation.plants && translation.plants.selectEnv.Choose}</Text>
      </View>
      <ModalSelector
        onChange={value => {
          setSelectedEnvironment({...value, plants: plantData});
        }}
        data={environmentArray}
      />
      <BottomToolBar
        colors={theme}
        icons={icons}
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

export default SelectEnv;

const styles = StyleSheet.create({
  container: {height: '100%'},
  selectForm: {flex: 1},
});
