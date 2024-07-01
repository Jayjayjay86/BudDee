import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import CreateHeader from '../../../core/components/Headers/CreateHeader';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';

import {PlantObject, DisplayObject} from '../../../core/constants/Misc';

import StrainSelector from '../components/StrainSelector';
import PhaseSelector from '../components/PhaseSelector';
import CreateNewStrainButton from '../../../core/components/Strain/components/CreateNewStrainButton';
import CreateStrain from '../../../core/components/Strain/modal/CreateStrain';

import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import {useTheme} from '../../../core/constants/Theme/ContextManager';

import {useFocusEffect} from '@react-navigation/native';
import {getStrains} from '../../../database/strains';
import {
  getEnvironments,
  updateEnvironment,
} from '../../../database/environments';
import {createPlants} from '../../../database/plants';
import FlowerBox from '../components/FlowerBox';
import HangBox from '../components/HangBox';
import VegBox from '../components/VegBox';

const AddPlant = ({navigation, route}) => {
  const {environmentData} = route.params ?? {};
  const [environmentArray, setEnvironmentArray] = useState([]);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const [plantObject, setPlantObject] = useState(PlantObject);

  const [showStrain, setShowStrain] = useState(false);
  const [vegDatePickerVisible, setvegDatePickerVisible] = useState(false);
  const [displayPhase, setDisplayPhase] = useState(DisplayObject);

  const strainCreated = async () => {
    await loadData();
  };
  const handleCreateStrain = () => {
    setShowStrain(true);
  };

  const createStrainMenuEntry = {
    key: 0,

    component: (
      <CreateNewStrainButton
        colors={theme}
        handleCreateStrain={handleCreateStrain}
        icons={icons}
        translation={translation}
      />
    ),
  };

  const handlePressNext = async () => {
    try {
      if (plantObject.fromType === '') {
        ToastAndroid.show('Please Select Beginning Type', ToastAndroid.BOTTOM);
        return;
      }
      if (plantObject.amount === '') {
        ToastAndroid.show('Please Select A Plant Amount', ToastAndroid.BOTTOM);
        return;
      }
      if (plantObject.currentPhase === '') {
        ToastAndroid.show('Please Select A Medium', ToastAndroid.BOTTOM);
        return;
      }

      if (environmentData) {
        const parsedEnvironmentData = JSON.parse(environmentData);
        const newPlantObject = {
          ...plantObject,
          environmentId: parsedEnvironmentData.id,
        };

        const batchId = await createPlants(newPlantObject);
        const updatedPlants = [...parsedEnvironmentData.plants, batchId];

        const newEnvironmentData = {
          ...parsedEnvironmentData,
          plants: updatedPlants,
        };

        await updateEnvironment(newEnvironmentData);

        ToastAndroid.show(
          environmentData
            ? `Created,Updated ${newEnvironmentData.name}`
            : 'Created,Updated',
          ToastAndroid.BOTTOM,
        );
        navigation.navigate('Plants');
      } else {
        if (environmentArray.length < 1) {
          navigation.navigate('add_envs', {
            plantData: JSON.stringify(plantObject),
          });
        } else {
          navigation.navigate('select_env', {
            plantData: JSON.stringify(plantObject),
          });
        }
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
    } catch (error) {}
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
  const textStyles = {color: theme.core.textColor};
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
          {environmentData && (
            <View style={styles.batch}>
              <Text style={styles.batchText}>Adding New Batch To </Text>
              <Text style={styles.batchName}>
                {environmentData && JSON.parse(environmentData).name}
              </Text>
            </View>
          )}

          <StrainSelector
            colors={theme}
            translation={translation}
            setPlantObject={setPlantObject}
            strains={strainArray}
            plantObject={plantObject}
          />
          <View style={styles.phaseInput}>
            <Text style={[styles.formText, textStyles]}>
              {translation.plants && translation.plants.addPlant.AmountPlants}
            </Text>

            <TextInput
              keyboardType={'numeric'}
              placeholder="0"
              style={styles.textInput}
              onChangeText={text => {
                setPlantObject({...plantObject, amount: text});
              }}
            />
          </View>

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
            icons={icons}
          />
          {displayPhase.veg && (
            <VegBox
              isDarkMode={isDarkMode}
              colors={theme}
              translation={translation}
              setDisplayPhase={setDisplayPhase}
              displayPhase={displayPhase}
              setPlantObject={setPlantObject}
              setvegDatePickerVisible={setvegDatePickerVisible}
              plantObject={plantObject}
              vegDatePickerVisible={vegDatePickerVisible}
              icons={icons}
            />
          )}
          {displayPhase.flower && (
            <FlowerBox
              isDarkMode={isDarkMode}
              colors={theme}
              translation={translation}
              setDisplayPhase={setDisplayPhase}
              displayPhase={displayPhase}
              setPlantObject={setPlantObject}
              setvegDatePickerVisible={setvegDatePickerVisible}
              plantObject={plantObject}
              vegDatePickerVisible={vegDatePickerVisible}
              icons={icons}
            />
          )}
          {displayPhase.hang && (
            <HangBox
              isDarkMode={isDarkMode}
              colors={theme}
              translation={translation}
              setDisplayPhase={setDisplayPhase}
              displayPhase={displayPhase}
              setPlantObject={setPlantObject}
              setvegDatePickerVisible={setvegDatePickerVisible}
              plantObject={plantObject}
              vegDatePickerVisible={vegDatePickerVisible}
              icons={icons}
            />
          )}
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
  form: {flex: 1, margin: 5, alignItems: 'center', justifyContent: 'center'},
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
  formText: {fontSize: 22, fontFamily: 'Poppins-Regular'},
  phaseInput: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',

    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 5,
  },
  textInput: {
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 50,
    textAlign: 'center',
  },
});
