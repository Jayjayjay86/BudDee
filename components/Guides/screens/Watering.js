import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';

import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

const Watering = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const handlePressNext = () => {
    navigation.navigate('cutting');
  };
  const handleGoBack = () => {
    navigation.navigate('phases');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>
          {translation.guides && translation.guides.watering.HeaderText}
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.primary}>
          {translation.guides && translation.guides.watering.p1}
        </Text>
        <Text style={styles.primary}>
          {translation.guides && translation.guides.watering.p2}
        </Text>
        <Text style={styles.primary}>
          {translation.guides && translation.guides.watering.p3}
        </Text>
        <Text style={styles.primary}>
          {translation.guides && translation.guides.watering.p4}
        </Text>
      </ScrollView>
      <View style={styles.instructionContainer}>
        <Text style={styles.instruction}>
          {translation.core && translation.core.Next}
        </Text>
        <Text style={styles.next}>
          {translation.guides && translation.guides.watering.Next}
        </Text>
      </View>
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

export default Watering;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  primary: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    margin: 20,
    padding: 5,
    textAlign: 'justify',
  },
  next: {fontFamily: 'Poppins-LightItalic'},
  instructionContainer: {flexDirection: 'row', justifyContent: 'center'},
  instruction: {textAlign: 'center', fontFamily: 'Poppins-SemiBoldItalic'},
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
    padding: 7,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'rgba(235,235,235,1)',
  },
  linkText: {fontSize: 14, fontFamily: 'Poppins-Light', paddingHorizontal: 10},
  image: {width: '74%', height: '20%', marginHorizontal: 5},
  subHeaderText: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    margin: 10,
    marginBottom: 0,
    textAlign: 'justify',
    padding: 3,
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    margin: 10,
    marginVertical: 0,
    textAlign: 'center',
    padding: 3,
    marginTop: 5,
  },
  contentLink: {margin: 5},
  contentLinks: {
    height: '69%',
    borderColor: 'rgba(235,235,235,1)',
    borderWidth: 1,
    margin: 2,
  },
  scrollView: {height: '64.4%'},
});
