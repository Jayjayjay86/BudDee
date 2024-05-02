import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import CreateHeader from '../../../core/components/Headers/CreateHeader';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';

import CreateEnv from './modal/CreateEnv';
import SelectEnv from './modal/SelectEnv';

import {
  PlantObject,
  EnvironmentObject,
  DisplayObject,
} from '../../../core/constants/Misc';
import BeginningsSelector from '../components/BeginningsSelector';
import StrainSelector from '../components/StrainSelector';
import PhaseSelector from '../components/PhaseSelector';
import CreateNewStrainButton from '../components/CreateNewStrainButton';
import CreateStrain from './modal/CreateStrain';

import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import {useTheme} from '../../../core/constants/Theme/ContextManager';

const fakeenvs = [];

const AddPlant = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const [showChoose, setShowChoose] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showStrain, setShowStrain] = useState(false);
  const [newPlantObject, setNewPlantObject] = useState(PlantObject);
  const [newEnvObject, setNewEnvObject] = useState(EnvironmentObject);
  const [vegDatePickerVisible, setvegDatePickerVisible] = useState(false);
  const [displayPhase, setDisplayPhase] = useState(DisplayObject);
  const [environmentArray, setEnvironmenyArray] = useState([fakeenvs]);
  const strainsData = [
    {
      key: 0,
      label: 'Critical Mass',
    },
    {
      key: 1,
      label: 'Queen',
    },
    {
      key: 3,
      label: 'Unknown Strain',
    },
    {
      key: 2,

      component: (
        <CreateNewStrainButton
          icons={icons}
          translation={translation}
          handleCreateStrain={handleCreateStrain}
        />
      ),
    },
  ];
  const handleCreateStrain = () => {
    setShowStrain(true);
  };
  const handlePressNext = () => {
    try {
      if (environmentArray.length < 1) {
        return setShowChoose(true);
      }

      return setShowCreate(true);
    } catch {}
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <CreateHeader
        colors={theme}
        message={translation.plants && translation.plants.addPlant.Create}
      />
      <View style={styles.form}>
        <BeginningsSelector
          colors={theme}
          translation={translation}
          setNewPlantObject={setNewPlantObject}
        />
        <StrainSelector
          colors={theme}
          translation={translation}
          setNewPlantObject={setNewPlantObject}
          strainsData={strainsData}
        />
        <PhaseSelector
          colors={theme}
          translation={translation}
          setDisplayPhase={setDisplayPhase}
          displayPhase={displayPhase}
          setNewPlantObject={setNewPlantObject}
          setvegDatePickerVisible={setvegDatePickerVisible}
          newPlantObject={newPlantObject}
          vegDatePickerVisible={vegDatePickerVisible}
        />
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
        colors={theme}
        translation={translation}
        navigation={navigation}
        isModalVisible={showStrain}
        setIsModalVisible={setShowStrain}
      />
      <CreateEnv
        icons={icons}
        colors={theme}
        translation={translation}
        navigation={navigation}
        isModalVisible={showCreate}
        setIsModalVisible={setShowCreate}
        setNewPlantObject={setNewPlantObject}
        envObject={newEnvObject}
        setEnvObject={setNewEnvObject}
      />
      <SelectEnv
        colors={theme}
        translation={translation}
        navigation={navigation}
        isModalVisible={showChoose}
        setIsModalVisible={setShowChoose}
        showCreateModal={setShowCreate}
        showCreate={showCreate}
      />
    </View>
  );
};

export default AddPlant;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  form: {flex: 1},
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
