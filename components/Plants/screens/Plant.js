import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CreateHeader from '../../../core/components/Headers/CreateHeader';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';
import DetailItems from '../components/DetailItems';
const Plant = ({navigation, route}) => {
  const {plantData} = route.params ?? [];

  const {plantJournalData} = route.params ?? [];
  const parsedPlantJournal = JSON.parse(plantJournalData);
  const parsedPlantsArray = JSON.parse(plantData);

  const [plantsJournal, setPlantsJournal] = useState(parsedPlantJournal);
  const [plantsData, setPlantsData] = useState(parsedPlantsArray);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const handleGoBack = () => {
    navigation.navigate('Index', 'plants');
  };
  const handlePressNext = () => {
    navigation.navigate('Index', 'plants');
  };
  const HandleDelete = () => {
    navigation.navigate('Index', 'plants');
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.envs.noEnvs.background},
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <CreateHeader
        colors={theme}
        message={translation.core && translation.plants.plant.Plant}
      />
      <DetailItems
        plantsData={plantsData}
        translation={translation}
        HandleDelete={HandleDelete}
        theme={theme}
        plantsJournal={plantsJournal}
      />

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

export default Plant;

const styles = StyleSheet.create({
  container: {height: '100%'},
  detailItems: {margin: 10, flex: 1},
  detailItem: {},
  detailLabel: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  detailValue: {fontSize: 18, fontFamily: 'Poppins-Regular'},
});
