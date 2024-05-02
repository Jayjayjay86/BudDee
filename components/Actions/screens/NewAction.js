import {StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../../core/components/Headers/Header';

import {useFocusEffect} from '@react-navigation/native';
import {en, th} from '../../../core/constants/Locales';
import {getOptions} from '../../../database/options';
import ActionSelector from '../components/ActionSelector';
import PlantSelector from '../components/PlantSelector';
import DateSelector from '../components/DateSelector';
import DescriptionInput from '../components/DescriptionInput';
import ActionOptions from '../components/ActionOptions';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

const NewAction = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const handleSave = () => {};
  const [actionObject, setActionObject] = useState({
    date: new Date(),
  });
  const [actionOptions, setActionOptions] = useState('');
  const [selectedPlant, setSelectedPlant] = useState('');

  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
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
      <View style={styles.formContainer}>
        <PlantSelector
          icons={icons}
          colors={theme}
          translation={translation}
          setSelectedPlant={setSelectedPlant}
        />

        <ActionSelector
          icons={icons}
          colors={theme}
          setActionOptions={setActionOptions}
          translation={translation}
        />
        <DateSelector
          icons={icons}
          colors={theme}
          translation={translation}
          setDatePickerVisible={setDatePickerVisible}
          datePickerVisible={datePickerVisible}
          setActionObject={setActionObject}
          actionObject={actionObject}
        />
        <DescriptionInput
          isDarkMode={isDarkMode}
          translation={translation}
          colors={theme}
          icons={icons}
        />
      </View>
      <ActionOptions
        icons={icons}
        isDarkMode={isDarkMode}
        colors={theme}
        translation={translation}
        actionOptions={actionOptions}
      />
    </View>
  );
};

export default NewAction;

const styles = StyleSheet.create({
  container: {height: '100%'},
  formContainer: {marginBottom: 20},
});
