import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LanguageSelector from './LanguageSelector';
import ThemeSelector from './ThemeSelector';
import ConfirmDeleteDatabase from '../screens/model/ConfirmDeleteDatabase';
import ViewStrains from '../../../core/components/Strain/modal/ViewStrains';
import CreateStrain from '../../../core/components/Strain/modal/CreateStrain';
import DatabaseSettings from './DatabaseSettings';
import StrainDetails from '../../../core/components/Strain/modal/StrainDetails';

const SettingsList = ({
  icons,
  translation,
  colors,
  setPageHasBeenEdited,
  newUserOptions,
  setNewUserOptions,
  navigation,
  strains,
  deletedStrain,
  strainCreated,
}) => {
  const [selectedStrain, setSelectedStrain] = useState({});
  const [isStrainDetailsVisible, setIsStrainDetailsVisible] = useState(false);
  const [showStrainsWindow, setShowStrainsWindow] = useState(false);
  const [showCreateStrainsWindow, setShowCreateStrainsWindow] = useState(false);
  const [confirmDeleteDatabase, setConfirmDeleteDatabase] = useState(false);
  const [deleteStates, setDeleteStates] = useState({
    strains: false,
    plants: false,
    options: false,
    envs: false,
    journal: false,
  });

  const backgroundColor = {
    backgroundColor: colors.settings.list.backgroundColor,
    color: colors.settings.list.textColor,
  };
  const textColor = {
    color: colors.settings.list.textColor,
  };

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
        theme={colors}
        icons={icons}
        navigation={navigation}
        deleteStates={deleteStates}
        setDeleteStates={setDeleteStates}
      />
      <StrainDetails
        translation={translation}
        colors={colors}
        isStrainDetailsVisible={isStrainDetailsVisible}
        setIsStrainDetailsVisible={setIsStrainDetailsVisible}
        navigation={navigation}
        icons={icons}
        selectedStrain={selectedStrain}
        setSelectedStrain={setSelectedStrain}
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
        deletedStrain={deletedStrain}
        setSelectedStrain={setSelectedStrain}
        translation={translation}
        isVisible={showStrainsWindow}
        setIsVisible={setShowStrainsWindow}
        setShowCreateWindow={setShowCreateStrainsWindow}
        setIsStrainDetailsVisible={setIsStrainDetailsVisible}
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
