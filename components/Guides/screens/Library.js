import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../../core/components/Headers/Header';

import LibraryList from '../components/library/LibraryList';
import LibrarySubHeader from '../components/library/LibrarySubHeader';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

const Library = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const handleSelectGuide = value => {
    navigation.navigate(value);
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <Header
        icons={icons}
        colors={theme}
        navigation={navigation}
        message={translation.guides && translation.guides.library.HeaderText}
      />
      <LibrarySubHeader
        icons={icons}
        colors={theme}
        translation={translation}
      />
      <LibraryList
        icons={icons}
        translation={translation}
        handleSelectGuide={handleSelectGuide}
        colors={theme}
      />
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {height: '100%'},
});
