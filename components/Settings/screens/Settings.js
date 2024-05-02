import {View, StyleSheet, ToastAndroid} from 'react-native';
import React, {useState} from 'react';

import {updateOptions} from '../../../database/options';

import SettingsHeader from '../components/SettingsHeader';
import SettingsList from '../components/SettingsList';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

export default function Settings({route}) {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation, setTranslation} = useTranslation();

  const [newUserOptions, setNewUserOptions] = useState({});

  const [pageHasBeenEdited, setPageHasBeenEdited] = useState(false);

  const HandleSaveOptions = async () => {
    try {
      updateOptions(newUserOptions).then(() => {
        ToastAndroid.show('Settings Updated', ToastAndroid.SHORT);
      });

      setPageHasBeenEdited(false);
    } catch (error) {}
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <SettingsHeader
        icons={icons}
        colors={theme}
        pageHasBeenEdited={pageHasBeenEdited}
        HandleSaveOptions={HandleSaveOptions}
      />
      <SettingsList
        isDarkMode={isDarkMode}
        translation={translation}
        setPageHasBeenEdited={setPageHasBeenEdited}
        newUserOptions={newUserOptions}
        setNewUserOptions={setNewUserOptions}
        colors={theme}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {aligItems: 'center', justifyContent: 'center'},
  header: {
    backgroundColor: 'rgba(0,77,0,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    padding: 5,
    paddingTop: 7,
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    backgroundColor: 'rgba(90,140,90,1)',
    borderRadius: 10,
    position: 'absolute',
    right: 20,
  },
  saveButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 19,
    color: 'rgba(250,240,250,1)',
  },
  logoImage: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  heading: {
    backgroundColor: 'rgba(200,200,200,0.8)',
    padding: 10,
    fontSize: 17,
    fontFamily: 'Poppins-Light',
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
    color: 'rgba(1,1,1,1)',
  },
});
