import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {EnvironmentObject, PlantObject} from '../../../core/constants/Misc';
import CreateEnv from '../../Plants/screens/modal/CreateEnv';
import {useFocusEffect} from '@react-navigation/native';
import {en, th} from '../../../core/constants/Locales';
import {getOptions} from '../../../database/options';

import NoEnvs from '../components/NoEnvs';
import EnvList from '../components/EnvList';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

const Environments = ({navigation}) => {
  const {theme, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const [plants, setPlants] = useState([]);

  const [showCreate, setShowCreate] = useState(false);
  const [newPlantObject, setNewPlantObject] = useState(PlantObject);
  const [newEnvObject, setNewEnvObject] = useState(EnvironmentObject);

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
        <EnvList />
      ) : (
        <NoEnvs
          isDarkMode={isDarkMode}
          colors={theme}
          translation={translation}
          setShowCreate={setShowCreate}
        />
      )}
      <CreateEnv
        isDarkMode={isDarkMode}
        colors={theme}
        translation={translation}
        navigation={navigation}
        isModalVisible={showCreate}
        setIsModalVisible={setShowCreate}
        setNewPlantObject={setNewPlantObject}
        envObject={newEnvObject}
        setEnvObject={setNewEnvObject}
      />
    </View>
  );
};

export default Environments;

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
