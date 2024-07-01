import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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
import CreateHeader from '../../../core/components/Headers/CreateHeader';
import AddMoreEnvsButton from '../components/AddMoreEnvsButton';
import LoadingIndicator from '../../../core/components/Loading/LoadingIndicator';

const Environments = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [environments, setEnvironments] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedEnvironment, setSelectedEnvironment] = useState({});
  const [plants, setPlants] = useState();
  const [selectedPlants, setSelectedPlants] = useState([]);

  const HandleDeleteEnvironment = id => {
    removeEnvironment(id);
    setShowConfirm(false);
    loadData();
    navigation.navigate('Index', 'Environments');
  };
  async function loadData() {
    setIsLoading(true);
    try {
      const environmentsArray = await getEnvironments();
      setEnvironments(environmentsArray);
    } catch (error) {
      console.error(error);
    }
    try {
      const plantsArray = await getPlants();
      setPlants(plantsArray);
    } catch (error) {
      console.error(error);
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
    return <LoadingIndicator translation={translation} colors={theme} />;
  }

  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <CreateHeader
        translation={translation}
        isDarkMode={isDarkMode}
        colors={theme}
        message={
          translation.environments && translation.environments.environments.Envs
        }
      />
      {environments.length > 0 ? (
        <AddMoreEnvsButton
          navigation={navigation}
          translation={translation}
          icons={icons}
          theme={theme}
        />
      ) : null}

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
        <View
          style={[
            styles.container,
            {backgroundColor: theme.envs.noEnvs.background},
          ]}>
          <NoEnvs
            icons={icons}
            colors={theme}
            translation={translation}
            navigation={navigation}
          />
        </View>
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
});
