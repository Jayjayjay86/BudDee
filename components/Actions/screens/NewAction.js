import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../../core/components/Headers/Header';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import NewEnvActionList from '../components/NewEnvActionList';
import ActionChoice from '../components/ActionChoice';
import NewPlantActionList from '../components/NewPlantActionList';
import {PlantActionObject} from '../../../core/constants/Misc';
import {getplantJournals} from '../../../database/plantJournal';
import {getEnvironmentJournals} from '../../../database/environmentJournal';
import {useFocusEffect} from '@react-navigation/native';
import {getPlants} from '../../../database/plants';
import {getEnvironments} from '../../../database/environments';

const NewAction = ({navigation, route}) => {
  const {plantData} = route.params ?? {};
  const {environmentData} = route.params ?? {};
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const handleSave = () => {};
  const [actionObject, setActionObject] = useState({
    ...PlantActionObject,
    date: new Date(),
  });
  const [actionOptions, setActionOptions] = useState('');
  const [selectedPlant, setSelectedPlant] = useState({});
  const [selectedEnv, setSelectedEnv] = useState({});
  const [plantOrEnvironment, setPlantOrEnvironment] = useState('plant');

  const [plants, setPlants] = useState('');
  const [plantJournals, setPlantJournals] = useState('');
  const [envJournal, setEnvJournal] = useState('');
  const [environments, setEnvironments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function loadData() {
    setIsLoading(true);
    try {
      const environmentArray = await getEnvironments();
      setEnvironments(environmentArray);
      const plantJournalArray = await getplantJournals();
      setPlantJournals(plantJournalArray);
      const environmentJournalArray = await getEnvironmentJournals();
      setEnvJournal(environmentJournalArray);
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
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <Header
        icons={icons}
        colors={theme}
        navigation={navigation}
        message={
          translation.actions && translation.actions.newAction.HeaderMessage
        }
        actionLabel={
          translation.actions && translation.actions.newAction.ActionLabel
        }
        action={handleSave}
      />
      <ScrollView>
        <ActionChoice
          translation={translation}
          setPlantOrEnvironment={setPlantOrEnvironment}
        />
        <View style={styles.formContainer}>
          {plantOrEnvironment === 'plant' ? (
            <NewPlantActionList
              plants={plants}
              isDarkMode={isDarkMode}
              datePickerVisible={datePickerVisible}
              setDatePickerVisible={setDatePickerVisible}
              actionObject={actionObject}
              setActionObject={setActionObject}
              translation={translation}
              icons={icons}
              theme={theme}
              setSelectedPlant={setSelectedPlant}
              setActionOptions={setActionOptions}
            />
          ) : (
            <NewEnvActionList
              setSelectedEnv={setSelectedEnv}
              envs={environments}
              translation={translation}
              icons={icons}
              colors={theme}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default NewAction;

const styles = StyleSheet.create({
  container: {height: '100%'},
  formContainer: {marginBottom: 20},
  choiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
  choiceLink: {},
  choiceTextPlants: {
    padding: 5,
    fontSize: 25,
    backgroundColor: 'rgba(100,100,100,0.2)',
    borderRightWidth: 1,
  },
  choiceTextEnvs: {
    padding: 5,
    fontSize: 25,
    backgroundColor: 'rgba(100,100,100,0.2)',
    borderColor: 'rgba(50,50,50,0.4)',
    borderLeftWidth: 1,
  },
  choiceTextDivide: {fontSize: 28},
  EnvOption: {
    margin: 10,
    marginLeft: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  EnvOptionText: {
    padding: 5,
    fontSize: 25,
  },
  optionImage: {width: 30, height: 30},
});
