import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import NoPlants from '../components/NoPlants';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import PlantsList from '../components/PlantsList';
import {envData} from '../../../core/constants/dummy';

import {getEnvironments} from '../../../database/environments';
import {useFocusEffect} from '@react-navigation/native';
import {getPlants} from '../../../database/plants';

import PlantHeader from '../components/PlantHeader';
import MovePlant from './modal/MovePlant';
import {getJournals} from '../../../database/journal';
import LoadingIndicator from '../../../core/components/Loading/LoadingIndicator';

const Plants = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [environments, setEnvironments] = useState(envData);
  const [journals, setJournals] = useState([]);
  const [plants, setPlants] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [isPlantsSelected, setIsPlantsSelected] = useState(false);
  const [showMovePlants, setShowMovePlants] = useState(false);

  const HandleDeletePlants = id => {};

  const HandlePressPlant = plant => {
    const plantJournal = journals.filter(entry => entry.plantId === plant.id);

    navigation.navigate('plant', {
      plantData: JSON.stringify([plant]),
      plantJournalData: JSON.stringify(plantJournal[0]),
    });
  };

  const HandleLongPressPlant = (plantIndex, plant) => {
    const newSelectedPlants = selectedPlants.includes(plant.id)
      ? selectedPlants.filter(plantItem => plantItem !== plant.id)
      : [...selectedPlants, plant.id];

    setSelectedPlants(newSelectedPlants);
    setIsPlantsSelected(newSelectedPlants.length > 0);
  };

  const pressNewAction = item => {
    navigation.navigate('add_plant_action', {
      environmentData: JSON.stringify(item),
      plantData: JSON.stringify(selectedPlants),
    });
  };
  const pressNewBatchButton = item => {
    navigation.navigate('add_plants', {
      environmentData: JSON.stringify(item),
    });
  };
  async function loadData() {
    setIsLoading(true);
    try {
      const environmentsArray = await getEnvironments();
      setEnvironments(environmentsArray);
    } catch (error) {}
    try {
      const plantJournals = await getJournals();
      setJournals(plantJournals);
    } catch (error) {}
    try {
      const plantsArray = await getPlants();
      setPlants(plantsArray);
    } catch (error) {}
    setIsPlantsSelected(false);
    setSelectedPlants([]);
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
    return <LoadingIndicator translation={translation} colors={theme} />;
  }
  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <PlantHeader
        isSelected={isPlantsSelected}
        action={setShowMovePlants}
        translation={translation}
        isDarkMode={isDarkMode}
        colors={theme}
        message={translation.plants && translation.plants.Plants}
      />
      {plants.length > 0 ? (
        <PlantsList
          pressNewAction={pressNewAction}
          pressNewBatchButton={pressNewBatchButton}
          HandlePressPlant={HandlePressPlant}
          HandleLongPressPlant={HandleLongPressPlant}
          isDarkMode={isDarkMode}
          isPlantsSelected={isPlantsSelected}
          setIsPlantsSelected={setIsPlantsSelected}
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
          loadData={loadData}
        />
      ) : (
        <View
          style={[
            styles.container,
            {backgroundColor: theme.envs.noEnvs.background},
          ]}>
          <NoPlants
            icons={icons}
            colors={theme}
            translation={translation}
            navigation={navigation}
            isDarkMode={isDarkMode}
          />
        </View>
      )}
      <MovePlant
        isVisible={showMovePlants}
        setIsVisible={setShowMovePlants}
        translation={translation}
        environmentArray={environments}
        icons={icons}
        theme={theme}
        navigation={navigation}
        selectedPlants={selectedPlants}
        updatePlants={loadData}
        plants={plants}
        isDarkMode={isDarkMode}
      />
    </View>
  );
};

export default Plants;

const styles = StyleSheet.create({
  container: {height: '100%'},
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
