import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import NoPlants from '../components/NoPlants';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

const NoPlantsImage = require('../../../assets/images/no_plants.png');
const arrowImage = require('../../../assets/images/arrow.png');
const addPlantsButton = require('../../../assets/images/buttons/add_pots.png');

const plantsData = [];

const Plants = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [plants, setPlants] = useState([]);

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
        <>
          <Image style={styles.noplants} source={NoPlantsImage} />
          <Image style={styles.arrow} source={arrowImage} />
          <TouchableOpacity onPress={() => {}}>
            <Image style={styles.addplants} source={addPlantsButton} />
          </TouchableOpacity>
        </>
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
