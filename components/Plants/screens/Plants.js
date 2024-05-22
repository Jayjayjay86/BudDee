import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import NoPlants from '../components/NoPlants';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import PlantsList from '../components/PlantsList';
import {envData} from '../../../core/constants/dummy';

import {getEnvironments} from '../../../database/environments';
import {useFocusEffect} from '@react-navigation/native';
import {getPlants} from '../../../database/plants';

const Plants = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [environments, setEnvironments] = useState(envData);
  const [plants, setPlants] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);

  const HandleDeletePlants = id => {};

  async function loadData() {
    setIsLoading(true);
    try {
      const environmentsArray = await getEnvironments();
      setEnvironments(environmentsArray);
    } catch (error) {
      console.error('Error In Plants.js:', error);
    }
    try {
      const plantsArray = await getPlants();
      setPlants(plantsArray);
    } catch (error) {
      console.error('Error In Plants.js:', error);
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
    <View
      style={[
        styles.container,
        {backgroundColor: theme.envs.noEnvs.background},
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      {plants.length > 0 ? (
        <PlantsList
          setConfirmDeleteVisible={setConfirmDeleteVisible}
          HandleDeletePlants={HandleDeletePlants}
          colors={theme}
          environmentData={environments}
          icons={icons}
          navigation={navigation}
          translation={translation}
          confirmDeleteVisible={confirmDeleteVisible}
          setSelectedPlants={setSelectedPlants}
          selectedPlants={selectedPlants}
          plants={plants}
          setPlants={setPlants}
        />
      ) : (
        <NoPlants
          colors={theme}
          translation={translation}
          navigation={navigation}
          isDarkMode={isDarkMode}
        />
      )}
    </View>
  );
};

export default Plants;

const styles = StyleSheet.create({
  container: {},
  display: {alignItems: 'center'},
  noplants: {width: 290, height: 540},
  arrow: {width: 50, height: 50},
  addplants: {
    width: 55,
    height: 55,
    borderColor: 'rgba(222,222,222,1)',
    borderWidth: 1,
    backgroundColor: 'rgba(0,155,0,0.1)',
    borderRadius: 40,
    justifyContent: 'flex-end',
  },
  imageDisplay: {},
  imageBox: {
    alignContent: 'center',
    width: 'auto',
    padding: 2,
    justifyContent: 'flex-end',
  },
  button: {flexDirection: 'row', justifyContent: 'flex-end'},
  nopeText: {fontSize: 15, fontFamily: 'Poppins-Regular'},
});
