import {View, StatusBar, StyleSheet, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Toolbox from '../components/Toolbox';
import CalenderBar from '../components/CalenderBar';
import Journal from '../components/Journal';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import ActionChoices from './modal/ActionChoices';
import {useFocusEffect} from '@react-navigation/native';
import CreateStrain from '../../../core/components/Strain/modal/CreateStrain';
import {getJournals} from '../../../database/journal';

export default function Home({navigation}) {
  const [showCreateStrainsWindow, setShowCreateStrainsWindow] = useState(false);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [showActionChoice, setShowActionChoice] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString(),
  );
  const [isLoading, setIsLoading] = useState(true);
  const [journal, setJournal] = useState([]);

  const [calendarJournal, setCalendarJournal] = useState();
  const HandlePressDate = date => {
    // navigation.navigate('add_envs_journal', {
    //   selectedDate: JSON.stringify(moment().toDate(date)),
    // });
  };
  const strainCreated = () => {};
  const handlePressButton = value => {
    switch (value) {
      case 'add_strain':
        return setShowCreateStrainsWindow(true);

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
  const sortCalendarArray = async array => {
    const returnable = [];
    const hashmap = {};
    try {
      array.map(item => {
        if (!hashmap[new Date(item.dateAdded).toLocaleDateString()]) {
          hashmap[new Date(item.datedateAdded).toLocaleDateString()] =
            item.dateAdded;
          returnable.push({
            date: item.dateAdded,
            lines: [
              {
                color: theme.core.lightBorder,
                selectedColor: theme.home.calenderbar.primary,
              },
            ],
          });
        }
        if (
          item.type === 'batch' &&
          !hashmap[new Date(item.harvestedOn).toLocaleDateString()]
        ) {
          hashmap[new Date(item.harvestedOn).toLocaleDateString()] =
            item.harvestedOn;
          returnable.push({
            date: item.harvestedOn,
            lines: [
              {
                color: theme.core.lightBorder,
                selectedColor: theme.home.calenderbar.primary,
              },
            ],
          });
        }
      });
    } catch (error) {}

    return returnable;
  };
  const sortJournalArray = async array => {
    const hashmap = {};
    try {
      array.map(item => {
        if (!hashmap[new Date(item.dateAdded).toLocaleDateString()]) {
          hashmap[new Date(item.dateAdded).toLocaleDateString()] = {};
          hashmap[new Date(item.dateAdded).toLocaleDateString()].items = [];
        }
        if (
          item.type === 'batch' &&
          !hashmap[new Date(item.harvestedOn).toLocaleDateString()]
        ) {
          hashmap[new Date(item.harvestedOn).toLocaleDateString()] = {};
          hashmap[new Date(item.harvestedOn).toLocaleDateString()].items = [];
          hashmap[new Date(item.harvestedOn).toLocaleDateString()].items.push({
            ...item,
            harvested: true,
          });
        }

        if (item.type !== 'plant') {
          hashmap[new Date(item.dateAdded).toLocaleDateString()].items.push({
            ...item,
          });
        }
      });
    } catch (error) {}
    return hashmap;
  };

  async function loadData() {
    setIsLoading(true);
    try {
      const journalArray = await getJournals();

      const sortedCalendarArray = await sortCalendarArray(journalArray);

      const sortedJournalArray = await sortJournalArray(journalArray);

      setJournal(sortedJournalArray);
      setCalendarJournal(sortedCalendarArray);
    } catch (error) {
      console.error('Error In Home.js:', error);
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
        journal={calendarJournal}
        translation={translation}
        colors={theme}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        handlePressDate={HandlePressDate}
      />
      <Toolbox
        icons={icons}
        translation={translation}
        pressButton={handlePressButton}
        colors={theme}
      />
      <Journal
        navigation={navigation}
        translation={translation}
        colors={theme}
        journal={journal}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <ActionChoices
        isDarkMode={isDarkMode}
        icons={icons}
        translation={translation}
        colors={theme}
        isVisible={showActionChoice}
        setIsVisible={setShowActionChoice}
        date={selectedDate}
      />
      <CreateStrain
        translation={translation}
        colors={theme}
        isModalVisible={showCreateStrainsWindow}
        setIsModalVisible={setShowCreateStrainsWindow}
        navigation={navigation}
        icons={icons}
        strainCreated={strainCreated}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {height: '100%'},
});
