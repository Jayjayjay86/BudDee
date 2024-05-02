import {View, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Toolbox from '../components/Toolbox';
import CalenderBar from '../components/CalenderBar';
import Journal from '../components/Journal';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

export default function Home({navigation}) {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

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

  return (
    <View style={(styles.container, {backgroundColor: theme.core.background})}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.core.background}
      />
      <CalenderBar translation={translation} colors={theme} />
      <Toolbox
        icons={icons}
        translation={translation}
        pressButton={handlePressButton}
        colors={theme}
      />
      <Journal translation={translation} colors={theme} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
