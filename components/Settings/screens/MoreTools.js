import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../../core/components/Headers/Header';

import MoreMenuList from '../components/MoreMenuList';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

const MoreTools = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const handlePress = value => {
    switch (value) {
      case 'add_actions':
        navigation.navigate('add_actions');
        break;
      case 'plant':
        navigation.navigate('add_plants');
        break;
      case 'env':
        navigation.navigate('add_envs');
        break;
      case 'calc':
        navigation.navigate('calc');
        break;
      case 'chart':
        navigation.navigate('chart');
        break;
      case 'faq':
        navigation.navigate('faq');
        break;
      case 'library':
        navigation.navigate('library');
        break;

      default:
        break;
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <Header
        icons={icons}
        colors={theme}
        navigation={navigation}
        message={
          translation.settings && translation.settings.moreTools.MoreTools
        }
      />
      <MoreMenuList
        icons={icons}
        darkModeode={isDarkMode}
        translation={translation}
        colors={theme}
        handlePress={handlePress}
      />
    </View>
  );
};

export default MoreTools;

const styles = StyleSheet.create({
  container: {},
  menuList: {margin: 10, marginVertical: 5, fontSize: 15, height: '90%'},
  menuLink: {
    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 8,
  },
  menuItem: {
    borderColor: 'rgba(235,235,230,1)',

    borderBottomWidth: 1,
  },
  menuHeader: {marginTop: 20},
  topHeader: {marginTop: 2},
  imageContainer: {
    width: 45,
    height: 45,
    backgroundColor: 'rgba(0,155,0,0.1)',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuImage: {
    width: 35,
    height: 35,
  },
  calcImage: {
    width: 30,
    height: 30,
  },
  faqImage: {
    width: 27,
    height: 27,
  },
  infoImage: {
    width: 20,
    height: 20,
  },
  menuText: {fontFamily: 'Poppins-Regular', marginHorizontal: 10, fontSize: 16},
});
