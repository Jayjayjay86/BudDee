import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LanguageSelector from './LanguageSelector';
import TemperatureUnitSelector from './TemperatureUnitSelector';
import DaySelector from './DaySelector';
import ThemeSelector from './ThemeSelector';

const SettingsList = ({
  translation,
  colors,
  setPageHasBeenEdited,
  newUserOptions,
  setNewUserOptions,
}) => {
  const backgroundColor = {
    backgroundColor: colors.settings.list.backgroundColor,
    color: colors.settings.list.textColor,
  };
  const textColor = {
    color: colors.settings.list.textColor,
  };
  return (
    <View style={styles.settingsList}>
      <Text style={[styles.heading, textColor]}>
        {translation.settings && translation.settings.settings.HeaderText}
      </Text>
      <View style={styles.optionRow}>
        <Text style={[styles.optionTitle, textColor]}>
          {translation.settings && translation.settings.settings.EraseAllData}
        </Text>
      </View>
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
      <View style={styles.optionCol}>
        <Text style={[styles.optionTitle, textColor]}>
          {translation.settings &&
            translation.settings.settings.TemperatureUnits}
        </Text>
        <TemperatureUnitSelector
          setPageHasBeenEdited={setPageHasBeenEdited}
          translation={translation}
          newUserOptions={newUserOptions}
          setNewUserOptions={setNewUserOptions}
        />
      </View>

      <Text style={[styles.heading, backgroundColor]}>
        {translation.settings && translation.settings.settings.CalendarSettings}
      </Text>
      <View style={styles.optionCol}>
        <Text style={[styles.optionTitle, textColor]}>
          {translation.settings && translation.settings.settings.FirstDay}
        </Text>
        <DaySelector
          setPageHasBeenEdited={setPageHasBeenEdited}
          translation={translation}
          newUserOptions={newUserOptions}
          setNewUserOptions={setNewUserOptions}
        />
      </View>
    </View>
  );
};

export default SettingsList;

const styles = StyleSheet.create({
  container: {aligItems: 'center', justifyContent: 'center'},

  heading: {
    padding: 10,
    fontSize: 17,
    fontFamily: 'Poppins-Light',
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
    fontFamily: 'Poppins-Light',
  },
});
