import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {EnvironmentJournalObject} from '../../../core/constants/Misc';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';
import CreateHeader from '../../../core/components/Headers/CreateHeader';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import ModalSelector from 'react-native-modal-selector';
import DatePicker from 'react-native-date-picker';
import {
  modalOverlayStyle,
  modalSelectorCancelStyle,
  modalSelectorCancelTextStyle,
  modalSelectorOptionContainerStyle,
  modalSelectorOptionTextStyle,
  textInputStyle,
} from '../../../core/constants/Styles';
import {getEnvironments} from '../../../database/environments';
import {useFocusEffect} from '@react-navigation/native';
import ActionButton from '../components/ActionButton';
import LoadingIndicator from '../../../core/components/Loading/LoadingIndicator';

const AddEnvJournal = ({navigation, route}) => {
  const [journalEntry, setJournalEntry] = useState(EnvironmentJournalObject);
  const {selectedDate} = route.params ?? [];

  const {envData} = route.params ?? [];
  const [displayActions, setDisplayActions] = useState({
    water: false,
    nutes: false,
    harvest: false,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [environments, setEnvironments] = useState([]);
  const handleButtonPress = id => {
    switch (id) {
      case 'water':
        setDisplayActions(prevState => ({
          nutes: false,
          harvest: false,
          water: !prevState.water,
        }));
        break;
      case 'nutes':
        setDisplayActions(prevState => ({
          water: false,
          harvest: false,
          nutes: !prevState.nutes,
        }));
        break;
      case 'harvest':
        setDisplayActions(prevState => ({
          nutes: false,
          water: false,
          harvest: !prevState.harvest,
        }));
        break;
      default:
        break;
    }
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handlePressNext = async () => {
    const envv = JSON.parse(envData);
    setJournalEntry({
      ...journalEntry,
      envId: envv.id,
    });
    // await newEnvironmentEntry(journalEntry);
    // navigation.navigate('Index', 'Environments');
  };
  async function loadData() {
    setIsLoading(true);
    try {
      const environmentsArray = await getEnvironments();
      setEnvironments(environmentsArray);
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
  const textStyles = {color: theme.plants.new.textColor};

  if (isLoading) {
    return <LoadingIndicator translation={translation} colors={theme} />;
  }
  const dateBorder = {borderBottomColor: 'black'};
  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <CreateHeader
        colors={theme}
        message={
          translation.environments &&
          translation.environments.addEnv.EnvironmentJournal
        }
      />
      <ScrollView style={styles.formContainer}>
        <Text style={[styles.formText, textStyles]}>
          {translation.environments &&
            translation.environments.addEnv.Environment}
        </Text>
        <ModalSelector
          overlayStyle={modalOverlayStyle}
          optionContainerStyle={modalSelectorOptionContainerStyle}
          style={styles.modalSelector}
          optionTextStyle={modalSelectorOptionTextStyle}
          cancelStyle={modalSelectorCancelStyle}
          cancelTextStyle={modalSelectorCancelTextStyle}
          cancelText={translation.core && translation.core.Cancel}
          initValue={
            envData
              ? JSON.parse(envData).name
              : translation.environments &&
                translation.environments.environments.SelectEnv
          }
          data={environments}
          keyExtractor={item => item.id}
          labelExtractor={item => item.name}
        />
        <View style={styles.completedOn}>
          <Text style={[styles.formText, textStyles]}>
            {translation.environments &&
              translation.environments.environments.DateCompleted}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setDatePickerVisible(prevState => !prevState);
            }}>
            <Text style={[styles.dateMarker, textStyles, dateBorder]}>
              {selectedDate
                ? `${new Date(JSON.parse(selectedDate)).toLocaleDateString()}`
                : journalEntry.date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          <DatePicker
            theme={isDarkMode ? 'dark' : 'light'}
            title={translation.plants && translation.plants.addPlant.LightOff}
            cancelText={translation.core && translation.core.Cancel}
            confirmText={translation.core && translation.core.Confirm}
            locale={translation.core && translation.core.Code}
            mode="date"
            date={
              selectedDate
                ? new Date(JSON.parse(selectedDate))
                : journalEntry.date
            }
            style={styles.datePicker}
            modal
            open={datePickerVisible}
            onConfirm={date => {
              setDatePickerVisible(false);
              setJournalEntry({
                ...journalEntry,
                date: date,
              });
            }}
            onCancel={() => {
              setDatePickerVisible(false);
            }}
          />
        </View>

        <View style={styles.actionButtons}>
          <ActionButton
            id={'water'}
            onButtonPress={handleButtonPress}
            setDisplayActions={setDisplayActions}
            icon={icons.buttons.guides.library[11]}
            theme={theme}
            visible={displayActions.water}
          />
          <ActionButton
            id={'nutes'}
            theme={theme}
            onButtonPress={handleButtonPress}
            setDisplayActions={setDisplayActions}
            icon={icons.buttons.guides.library[9]}
            visible={displayActions.nutes}
          />
        </View>

        {displayActions.water && (
          <View>
            <Text style={[styles.actionHeader, textStyles]}>
              {translation.environments &&
                translation.environments.environments.WaterPlants}
            </Text>
            <View style={styles.input}>
              <Text style={[styles.formText, textStyles]}>
                {translation.environments &&
                  translation.environments.environments.AmountLiters}
              </Text>
              <TextInput
                keyboardType="numeric"
                value={journalEntry.actions.water.amount}
                onChangeText={value => {
                  setJournalEntry(prevState => ({
                    ...prevState,
                    actions: {
                      ...prevState.actions,
                      water: {...prevState.actions.water, amount: value},
                    },
                  }));
                }}
                style={[styles.input, textInputStyle]}
              />
            </View>
            <View style={styles.input}>
              <Text style={[styles.formText, textStyles]}>
                {translation.environments &&
                  translation.environments.environments.Ph}
              </Text>
              <TextInput
                keyboardType="numeric"
                value={journalEntry.actions.water.ph}
                onChangeText={value => {
                  setJournalEntry(prevState => ({
                    ...prevState,
                    actions: {
                      ...prevState.actions,
                      water: {...prevState.actions.water, ph: value},
                    },
                  }));
                }}
                style={[styles.input, textInputStyle]}
              />
            </View>
            <View style={styles.input}>
              <Text style={[styles.formText, textStyles]}>
                {translation.environments &&
                  translation.environments.environments.Ec}
              </Text>
              <TextInput
                keyboardType="numeric"
                value={journalEntry.actions.water.ec}
                onChangeText={value => {
                  setJournalEntry(prevState => ({
                    ...prevState,
                    actions: {
                      ...prevState.actions,
                      water: {...prevState.actions.water, ec: value},
                    },
                  }));
                }}
                style={[styles.input, textInputStyle]}
              />
            </View>
          </View>
        )}

        {displayActions.nutes && (
          <View>
            <Text style={[styles.actionHeader, textStyles]}>
              {translation.environments &&
                translation.environments.environments.MixNutes}
            </Text>
            <View style={styles.input}>
              <Text style={[styles.formText, textStyles]}>
                {translation.environments &&
                  translation.environments.environments.AmountLiters}
              </Text>
              <TextInput
                keyboardType="numeric"
                value={journalEntry.actions.nutes.amount}
                onChangeText={value => {
                  setJournalEntry(prevState => ({
                    ...prevState,
                    actions: {
                      ...prevState.actions,
                      nutes: {...prevState.actions.nutes, amount: value},
                    },
                  }));
                }}
                style={[styles.input, textInputStyle]}
              />
            </View>
            <View style={styles.input}>
              <Text style={[styles.formText, textStyles]}>
                {translation.environments &&
                  translation.environments.environments.Ph}
              </Text>
              <TextInput
                keyboardType="numeric"
                value={journalEntry.actions.nutes.ph}
                onChangeText={value => {
                  setJournalEntry(prevState => ({
                    ...prevState,
                    actions: {
                      ...prevState.actions,
                      nutes: {...prevState.actions.nutes, ph: value},
                    },
                  }));
                }}
                style={[styles.input, textInputStyle]}
              />
            </View>
            <View style={styles.input}>
              <Text style={[styles.formText, textStyles]}>
                {translation.environments &&
                  translation.environments.environments.Ec}
              </Text>
              <TextInput
                keyboardType="numeric"
                value={journalEntry.actions.nutes.ec}
                onChangeText={value => {
                  setJournalEntry(prevState => ({
                    ...prevState,
                    actions: {
                      ...prevState.actions,
                      nutes: {...prevState.actions.nutes, ec: value},
                    },
                  }));
                }}
                style={[styles.input, textInputStyle]}
              />
            </View>
          </View>
        )}
      </ScrollView>
      <BottomToolBar
        icons={icons}
        colors={theme}
        isDarkMode={isDarkMode}
        backMessage={
          translation.core && translation.core.headers.bottomToolBar.Back
        }
        handleGoBack={handleGoBack}
        handlePressNext={handlePressNext}
        nextMessage={
          translation.core && translation.core.headers.bottomToolBar.Save
        }
      />
    </View>
  );
};

export default AddEnvJournal;

const styles = StyleSheet.create({
  actionHeader: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    margin: 9,
    textAlign: 'center',
  },
  completedOn: {margin: 10},
  actionButtons: {flexDirection: 'row', alignSelf: 'center', marginTop: 15},
  container: {flexDirection: 'column', height: '100%'},
  input: {marginHorizontal: 10, marginVertical: 5},
  formContainer: {flex: 1, margin: 15},
  datePicker: {},
  dateMarker: {
    fontFamily: 'Poppins-Regular',
    fontSize: 19,
    borderBottomWidth: 2,
    marginHorizontal: 10,
  },
  formText: {fontSize: 18, fontFamily: 'Poppins-Regular'},
});
