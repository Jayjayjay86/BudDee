import {View, StyleSheet, ToastAndroid, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {getOptions, updateOptions} from '../../../database/options';

import SettingsHeader from '../components/SettingsHeader';
import SettingsList from '../components/SettingsList';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

import {useFocusEffect} from '@react-navigation/native';
import {getStrains} from '../../../database/strains';
import LoadingIndicator from '../../../core/components/Loading/LoadingIndicator';

export default function Settings({navigation, route}) {
  const [isLoading, setIsLoading] = useState(true);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation, setTranslation} = useTranslation();
  const [strains, setStrains] = useState([]);
  const [options, setOptions] = useState([]);
  const [newUserOptions, setNewUserOptions] = useState({});

  const [pageHasBeenEdited, setPageHasBeenEdited] = useState(false);
  const deletedStrain = async () => {
    await loadData();
  };
  const strainCreated = async () => {
    await loadData();
  };
  const HandleSaveOptions = async () => {
    try {
      updateOptions(newUserOptions).then(() => {
        ToastAndroid.show('Settings Updated', ToastAndroid.SHORT);
      });

      setPageHasBeenEdited(false);
    } catch (error) {}
  };
  async function loadData() {
    setIsLoading(true);

    try {
      const optionsData = await getOptions();
      setOptions(optionsData);
    } catch (error) {
      console.error('Error preparing settings:', error);
    }

    try {
      const strainsArray = await getStrains();

      setStrains(strainsArray);
    } catch (error) {
      console.error('Error In Settings.js:', error);
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
        <LoadingIndicator colors={theme} translation={translation} />
      </View>
    );
  }
  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <SettingsHeader
        icons={icons}
        colors={theme}
        pageHasBeenEdited={pageHasBeenEdited}
        HandleSaveOptions={HandleSaveOptions}
        translation={translation}
      />
      <SettingsList
        deletedStrain={deletedStrain}
        strainCreated={strainCreated}
        strains={strains}
        isDarkMode={isDarkMode}
        translation={translation}
        setPageHasBeenEdited={setPageHasBeenEdited}
        newUserOptions={newUserOptions}
        setNewUserOptions={setNewUserOptions}
        colors={theme}
        navigation={navigation}
        icons={icons}
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
    fontFamily: 'Poppins-Bold',
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
    fontFamily: 'Poppins-Bold',
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
    fontFamily: 'Poppins-Bold',
    color: 'rgba(1,1,1,1)',
  },
});
