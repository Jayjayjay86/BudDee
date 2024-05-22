import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {EnvironmentObject, PlantObject} from '../../../core/constants/Misc';
import NoEnvs from '../components/NoEnvs';
import EnvList from '../components/EnvList';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import ConfirmDeleteEnvironment from './modal/ConfirmDeleteEnvironment';
import {
  getEnvironments,
  removeEnvironment,
} from '../../../database/environments';
import {useFocusEffect} from '@react-navigation/native';
import {getPlants} from '../../../database/plants';

const Environments = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [environments, setEnvironments] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPlantObject, setNewPlantObject] = useState(PlantObject);
  const [newEnvObject, setNewEnvObject] = useState(EnvironmentObject);
  const [selectedEnvironment, setSelectedEnvironment] = useState({});
  const [plants, setPlants] = useState();
  const [selectedPlants, setSelectedPlants] = useState([]);
  const HandleDeleteEnvironment = id => {
    removeEnvironment(id);
    setShowConfirm(false);
    loadData();
  };
  async function loadData() {
    setIsLoading(true);
    try {
      // Fetch all income and expense records
      const environmentsArray = await getEnvironments();
      setEnvironments(environmentsArray);
    } catch (error) {
      console.error('Error In Environments.js:', error);
    }
    try {
      const plantsArray = await getPlants();
      setPlants(plantsArray);
    } catch (error) {
      console.error('Error In envs.js:', error);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
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

      {environments.length > 0 ? (
        <EnvList
          plants={plants}
          selectedEnvironments={selectedEnvironment}
          setSelectedEnvironment={setSelectedEnvironment}
          showConfirm={showConfirm}
          setShowConfirm={setShowConfirm}
          navigation={navigation}
          colors={theme}
          icons={icons}
          data={environments}
          translation={translation}
          selectedPlants={selectedPlants}
          setSelectedPlants={setSelectedPlants}
        />
      ) : (
        <NoEnvs
          icons={icons}
          colors={theme}
          translation={translation}
          navigation={navigation}
        />
      )}
      <ConfirmDeleteEnvironment
        theme={theme}
        translation={translation}
        isVisible={showConfirm}
        setIsVisible={setShowConfirm}
        selectedEnvironment={selectedEnvironment}
        navigation={navigation}
        icons={icons}
        HandleDeleteEnvironment={HandleDeleteEnvironment}
      />
    </View>
  );
};

export default Environments;

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
