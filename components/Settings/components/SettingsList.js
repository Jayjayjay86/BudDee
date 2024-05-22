import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LanguageSelector from './LanguageSelector';

import ThemeSelector from './ThemeSelector';
import ConfirmDeleteDatabase from '../screens/model/ConfirmDeleteDatabase';
import {destroyAllStrains} from '../../../database/strains';
import {destroyEnvironmentJournal} from '../../../database/environmentJournal';
import {destroyOptions} from '../../../database/options';
import {destroyEnvironments} from '../../../database/environments';
import {destroyPlantJournal} from '../../../database/plantJournal';
import {destroyPlants} from '../../../database/plants';
import ViewStrains from '../../../core/components/Strain/modal/ViewStrains';
import CreateStrain from '../../../core/components/Strain/modal/CreateStrain';
import DatabaseOptions from './DatabaseOptions';
import DatabaseSettings from './DatabaseSettings';

const SettingsList = ({
  icons,
  translation,
  colors,
  setPageHasBeenEdited,
  newUserOptions,
  setNewUserOptions,
  navigation,
  strains,
}) => {
  const [deleteStates, setDeleteStates] = useState({
    strains: false,
    plants: false,
    options: false,
    envs: false,
    plantJournal: false,
    envJournal: false,
  });

  const backgroundColor = {
    backgroundColor: colors.settings.list.backgroundColor,
    color: colors.settings.list.textColor,
  };
  const textColor = {
    color: colors.settings.list.textColor,
  };
  const HandleConfirmDelete = () => {
    destroyAllStrains();
    destroyOptions();
    destroyEnvironmentJournal();
    destroyEnvironments();
    destroyPlantJournal();
    destroyPlants();
  };
  const [showStrainsWindow, setShowStrainsWindow] = useState(false);
  const [showCreateStrainsWindow, setShowCreateStrainsWindow] = useState(false);
  const [confirmDeleteDatabase, setConfirmDeleteDatabase] = useState(false);

  const strainCreated = () => {};
  return (
    <ScrollView style={styles.settingsList}>
      <Text style={[styles.heading, backgroundColor]}>
        {translation.settings && translation.settings.settings.GeneralSettings}
      </Text>
      <View style={styles.optionCol}>
        <Text style={[styles.optionTitle, textColor]}>
          {translation.settings && translation.settings.settings.Language}
        </Text>
        <LanguageSelector
          setPageHasBeenEdited={setPageHasBeenEdited}
          translation={translation}
          newUserOptions={newUserOptions}
          setNewUserOptions={setNewUserOptions}
        />
      </View>
      <View style={styles.optionCol}>
        <Text style={[styles.optionTitle, textColor]}>
          {translation.settings && translation.settings.settings.Theme}
        </Text>
        <ThemeSelector
          setPageHasBeenEdited={setPageHasBeenEdited}
          translation={translation}
          newUserOptions={newUserOptions}
          setNewUserOptions={setNewUserOptions}
        />
      </View>

      <DatabaseSettings
        translation={translation}
        deleteStates={deleteStates}
        setDeleteStates={setDeleteStates}
        setShowStrainsWindow={setShowStrainsWindow}
        icons={icons}
        setConfirmDeleteDatabase={setConfirmDeleteDatabase}
        colors={colors}
      />

      <ConfirmDeleteDatabase
        isVisible={confirmDeleteDatabase}
        setIsVisible={setConfirmDeleteDatabase}
        translation={translation}
        HandleConfirmDelete={HandleConfirmDelete}
        theme={colors}
        icons={icons}
        navigation={navigation}
        deleteStates={deleteStates}
        setDeleteStates={setDeleteStates}
      />
      <CreateStrain
        translation={translation}
        colors={colors}
        isModalVisible={showCreateStrainsWindow}
        setIsModalVisible={setShowCreateStrainsWindow}
        navigation={navigation}
        icons={icons}
        strainCreated={strainCreated}
      />
      <ViewStrains
        translation={translation}
        isVisible={showStrainsWindow}
        setIsVisible={setShowStrainsWindow}
        setShowCreateWindow={setShowCreateStrainsWindow}
        HandleConfirm={() => {}}
        theme={colors}
        icons={icons}
        navigation={navigation}
        strains={strains}
      />
    </ScrollView>
  );
};

export default SettingsList;

const styles = StyleSheet.create({
  container: {aligItems: 'center', justifyContent: 'center'},

  heading: {
    padding: 10,
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    height: 44,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  optionCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  optionTitle: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
  },
  optionLinkText: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    flex: 1,
  },
  link: {flexDirection: 'row', alignItems: 'center'},
  arrowImage: {width: 12, height: 12},
  databaseOptions: {flexDirection: 'row', margin: 15, alignItems: 'center'},
  databaseOptionText: {flex: 1},
});
