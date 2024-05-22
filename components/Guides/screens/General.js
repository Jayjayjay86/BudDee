import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';

import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
const General = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const handlePressNext = () => {
    console.log('pleased');
    navigation.navigate('library');
  };
  const handleGoBack = () => {
    navigation.navigate('crops');
  };
  const textColor = {color: theme.library.textColor};
  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <View>
        <Text style={[styles.headerText, textColor]}>
          {translation.guides && translation.guides.general.HeaderText}
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={[styles.primary, textColor]}>
          {translation.guides && translation.guides.general.p1}
        </Text>

        <Text style={[styles.primary, textColor]}>
          {translation.guides && translation.guides.general.p2}
        </Text>
        <Text style={[styles.primary, textColor]}>
          {translation.guides && translation.guides.general.p3}
        </Text>
        <Text style={[styles.primary, textColor]}>
          {translation.guides && translation.guides.general.p4}
        </Text>
        <Text style={[styles.primary, textColor]}>
          {translation.guides && translation.guides.general.p5}
        </Text>
        <Text style={[styles.primary, textColor]}>
          {translation.guides && translation.guides.general.p6}
        </Text>
        <Text style={[styles.primary, textColor]}>
          {translation.guides && translation.guides.general.p7}
        </Text>
      </ScrollView>

      <BottomToolBar
        icons={icons}
        colors={theme}
        backMessage={
          translation.core && translation.core.headers.bottomToolBar.Back
        }
        handleGoBack={handleGoBack}
        handlePressNext={handlePressNext}
        nextMessage={
          translation.core && translation.core.headers.bottomToolBar.Next
        }
      />
    </View>
  );
};

export default General;

const styles = StyleSheet.create({
  container: {alignItems: 'center', height: '100%'},
  headerText: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    margin: 10,
    marginVertical: 0,
    textAlign: 'center',
    padding: 3,
    marginTop: 5,
  },
  imageBox: {
    width: 175,
    height: 175,
    marginHorizontal: 5,
    borderWidth: 3,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {width: 170, height: 170, borderRadius: 500},
  tldrContainer: {alignItems: 'center', marginTop: 10},
  tldrHeader: {fontSize: 25, marginTop: 10},
  tldrHiddenContainer: {
    margin: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  tldrText: {fontSize: 18},
  readMoreContainer: {alignItems: 'center'},
  tapHereLink: {
    fontSize: 25,
    fontFamily: 'Poppins-Italic',
    padding: 5,
    paddingTop: 6,
    borderRadius: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
  },

  primary: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    margin: 20,
    padding: 5,
    textAlign: 'justify',
  },

  next: {fontFamily: 'Poppins-LightItalic'},
  instructionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  instruction: {textAlign: 'center', fontFamily: 'Poppins-SemiBoldItalic'},

  scrollView: {height: '91.7%'},
});
