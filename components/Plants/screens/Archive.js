import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import NoPlants from '../components/NoPlants';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import {useFocusEffect} from '@react-navigation/native';
import {getJournals} from '../../../database/journal';
import LoadingIndicator from '../../../core/components/Loading/LoadingIndicator';
import Header from '../../../core/components/Headers/Header';

const Archive = ({navigation}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const [journals, setJournals] = useState([]);

  const HandlePressPlant = plant => {};

  const togglePlants = index => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  async function loadData() {
    setIsLoading(true);

    try {
      const journalData = await getJournals();
      const filteredJournals = journalData.filter(
        item => item.type === 'finish_batch',
      );
      const sortedPlants = {};

      const sortedPlantArray = filteredJournals.map(item => {
        item.plants.map(plantItem => {
          if (!sortedPlants[plantItem.strain.strainName]) {
            sortedPlants[plantItem.strain.strainName] = 1;
          } else {
            sortedPlants[plantItem.strain.strainName]++;
          }
        });
        item.sortedplants = sortedPlants;
      });
      setJournals(filteredJournals);
      console.log(journals);
    } catch (error) {}

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
  const textColor = {color: theme.core.textColor};
  if (isLoading) {
    return <LoadingIndicator translation={translation} colors={theme} />;
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
        message={'Finished Batches'}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={journals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View>
            <Text style={[styles.text, textColor]}>{index + 1}</Text>
            <Text style={[styles.text, textColor]}>
              {translation.core && translation.plants.other.DateFinished}
              {new Date(item.date).toLocaleDateString()}
            </Text>
            <Text style={[styles.text, textColor]}>
              {translation.core && translation.plants.other.Amount2}
              {item.amount} grams
            </Text>
            <Text style={[styles.text, textColor]}>
              {translation.core && translation.plants.other.Environment}
              {item.env.name}
            </Text>
            <TouchableOpacity
              onPress={() => {
                togglePlants(index);
              }}>
              <Text style={styles.linkText}>
                {translation.core && translation.plants.other.Plants}
              </Text>
            </TouchableOpacity>
            {expandedIndex === index &&
              item.plants.map((plant, plantIndex) => (
                <View key={plantIndex}>
                  <Text style={[styles.text, textColor]}>
                    {plant.strain.strainName}
                  </Text>
                </View>
              ))}
          </View>
        )}
        ListEmptyComponent={<NoPlants translation={translation} />}
      />
    </View>
  );
};

export default Archive;

const styles = StyleSheet.create({
  container: {height: '100%'},
  text: {fontFamily: 'Poppins-Regular', fontSize: 20},
  noplants: {width: 290, height: 540},
  linkText: {fontFamily: 'Poppins-Regular', fontSize: 20},
  list: {margin: 20},
});
