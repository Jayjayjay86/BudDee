import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CreateHeader from '../../../core/components/Headers/CreateHeader';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';

const JournalEntry = ({navigation, route}) => {
  const {journalData} = route.params ?? [];
  const parsedJournal = JSON.parse(journalData);
  const [journal, setJournal] = useState(parsedJournal);

  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const handleGoBack = () => {
    navigation.navigate('Index', 'JournalEntrys');
  };
  const handlePressNext = () => {
    navigation.navigate('Index', 'JournalEntrys');
  };
  const HandleDelete = () => {
    navigation.navigate('Index', 'JournalEntrys');
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
        message={
          translation.core &&
          translation.JournalEntrys.JournalEntry.JournalEntry
        }
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

export default JournalEntry;

const styles = StyleSheet.create({
  container: {height: '100%'},
  detailItems: {margin: 10, flex: 1},
  detailItem: {},
  detailLabel: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  detailValue: {fontSize: 18, fontFamily: 'Poppins-Regular'},
});
