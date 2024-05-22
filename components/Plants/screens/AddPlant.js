import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import CreateHeader from '../../../core/components/Headers/CreateHeader';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';

import {PlantObject, DisplayObject} from '../../../core/constants/Misc';
import BeginningsSelector from '../components/BeginningsSelector';
import StrainSelector from '../components/StrainSelector';
import PhaseSelector from '../components/PhaseSelector';
import CreateNewStrainButton from '../../../core/components/Strain/components/CreateNewStrainButton';
import CreateStrain from '../../../core/components/Strain/modal/CreateStrain';

import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import PotSizeSelector from '../components/PotSizeSelector';
import {useFocusEffect} from '@react-navigation/native';
import {getStrains} from '../../../database/strains';
import {
  getEnvironments,
  updateEnvironment,
} from '../../../database/environments';
import {createPlants} from '../../../database/plants';

const fakeenvs = [{}];

const AddPlant = ({navigation, route}) => {
  const {environmentData} = route.params ?? {};

  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [showStrain, setShowStrain] = useState(false);
  const [plantObject, setPlantObject] = useState(PlantObject);
  const [vegDatePickerVisible, setvegDatePickerVisible] = useState(false);
  const [displayPhase, setDisplayPhase] = useState(DisplayObject);
  const [environmentArray, setEnvironmentArray] = useState([{}]);
  const strainCreated = () => {};
  const handleCreateStrain = () => {
    setShowStrain(true);
  };

  const createStrainMenuEntry = {
    key: 0,

    component: (
      <CreateNewStrainButton
        handleCreateStrain={handleCreateStrain}
        icons={icons}
        translation={translation}
      />
    ),
  };
  const handlePressNext = () => {
    try {
      if (environmentData !== null) {
        const newPlantObject = {
          ...plantObject,
          environmentId: environmentData.id,
        };
        console.log('cuntcuntcunt', {...newPlantObject});
        const batchId = createPlants(newPlantObject);
        const updateOk = updateEnvironment({
          ...environmentData,
          plants: environmentData.plants.push(batchId),
        });

        console.log('yaryaryar', updateOk);
        ToastAndroid.show('Created,Updated', ToastAndroid.BOTTOM);
        navigation.navigate('Plants');
      } else {
        try {
          if (environmentArray.length < 1) {
            navigation.navigate('add_envs', {
              plantData: JSON.stringify(plantObject),
            });
          } else {
            navigation.navigate('select_env', {
              plantData: JSON.stringify(plantObject),
            });
          }
        } catch {}
      }
    } catch (error) {}
  };
  const handleGoBack = () => {
    navigation.navigate('Index');
  };
  const [strainArray, setStrainArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadData() {
    setIsLoading(true);
    try {
      // Fetch all income and expense records
      const environmentsArray = await getEnvironments();

      setEnvironmentArray(environmentsArray);
    } catch (error) {
      console.error('Error In Environments.js:', error);
    }
    try {
      const strainsArray = await getStrains();

      if (strainsArray.length === 0) {
        setStrainArray([createStrainMenuEntry]);
      } else {
        const mappedStrainArray = strainsArray.map((strain, index) => {
          return {...strain, key: index + 1, label: strain.strainName};
        });

        mappedStrainArray.push(createStrainMenuEntry);

        setStrainArray(mappedStrainArray);
      }
    } catch (error) {
      console.error('Error In Environments.js:', error);
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
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <CreateHeader
        colors={theme}
        message={translation.plants && translation.plants.addPlant.Create}
      />
      <View style={styles.form}>
        <ScrollView>
          <BeginningsSelector
            colors={theme}
            translation={translation}
            setPlantObject={setPlantObject}
            plantObject={plantObject}
          />
          <StrainSelector
            colors={theme}
            translation={translation}
            setPlantObject={setPlantObject}
            strains={strainArray}
            plantObject={plantObject}
          />
          <PotSizeSelector
            colors={theme}
            translation={translation}
            setPlantObject={setPlantObject}
            strainsData={strainArray}
          />
          <PhaseSelector
            isDarkMode={isDarkMode}
            colors={theme}
            translation={translation}
            setDisplayPhase={setDisplayPhase}
            displayPhase={displayPhase}
            setPlantObject={setPlantObject}
            setvegDatePickerVisible={setvegDatePickerVisible}
            plantObject={plantObject}
            vegDatePickerVisible={vegDatePickerVisible}
          />
        </ScrollView>
      </View>
      <BottomToolBar
        icons={icons}
        colors={theme}
        backMessage={
          translation.core && translation.core.headers.bottomToolBar.Back
        }
        handleGoBack={handleGoBack}
        handlePressNext={handlePressNext}
        nextMessage={
          translation.core && translation.core.headers.bottomToolBar.Next
        }
      />
      <CreateStrain
        translation={translation}
        colors={theme}
        isModalVisible={showStrain}
        setIsModalVisible={setShowStrain}
        navigation={navigation}
        icons={icons}
        strainCreated={strainCreated}
      />
    </View>
  );
};

export default AddPlant;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  form: {flex: 1, margin: 5},
  inputText: {fontSize: 14, fontFamily: 'Poppins-Regular', margin: 5},
  modalSelector: {margin: 15},
  modalSelectorPhase: {marginVertical: 10},
  phaseContainer: {},
  phaseSelect: {},
  phaseItems: {flexDirection: 'row', justifyContent: 'space-around'},
  phaseItem: {
    borderWidth: 2,
    minWidth: 90,
    alignItems: 'center',
    borderRadius: 5,
  },
  phaseHeader: {textAlign: 'center', fontSize: 20},
  phaseItemText: {fontFamily: 'Poppins-LightItalic', paddingHorizontal: 5},
  phaseImage: {width: 35, height: 35},
  datePicker: {},
  dateMarker: {
    fontFamily: 'Poppins-Regular',
    fontSize: 19,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  phaseBox: {
    marginVertical: 20,
  },
  formText: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  phaseInput: {
    flexDirection: 'row',
    width: '90%',

    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'baseline',
    marginHorizontal: 15,
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 50,
    textAlign: 'center',
  },
});
