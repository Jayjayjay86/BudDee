import {View, StatusBar, StyleSheet, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Toolbox from '../components/Toolbox';
import CalenderBar from '../components/CalenderBar';
import Journal from '../components/Journal';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import ActionChoices from './modal/ActionChoices';
import {getplantJournals} from '../../../database/plantJournal';
import {getEnvironmentJournals} from '../../../database/environmentJournal';
import {useFocusEffect} from '@react-navigation/native';

export default function Home({navigation}) {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [showActionChoice, setShowActionChoice] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const HandlePressDate = date => {
    setSelectedDate(date);
    setShowActionChoice(true);
  };
  const handlePressButton = value => {
    switch (value) {
      case 'add_actions':
        return navigation.navigate('add_actions');
      case 'add_plants':
        return navigation.navigate('add_plants');
      case 'add_envs':
        return navigation.navigate('add_envs');
      case 'toolbox':
        return navigation.navigate('Toolbox');
      default:
        return;
    }
  };
  async function loadData() {
    setIsLoading(true);
    try {
      const plantJournalArray = await getplantJournals();
      const environmentJournalArray = await getEnvironmentJournals();
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
    <View style={(styles.container, {backgroundColor: theme.core.background})}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.core.background}
      />
      <CalenderBar
        translation={translation}
        colors={theme}
        setSelectedDate={setSelectedDate}
        handlePressDate={HandlePressDate}
      />
      <Toolbox
        icons={icons}
        translation={translation}
        pressButton={handlePressButton}
        colors={theme}
      />
      <Journal translation={translation} colors={theme} />
      <ActionChoices
        isDarkMode={isDarkMode}
        icons={icons}
        translation={translation}
        colors={theme}
        isVisible={showActionChoice}
        setIsVisible={setShowActionChoice}
        date={selectedDate}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
