import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {en, th} from '../../../core/constants/Locales';
import {getOptions} from '../../../database/options';
import {useFocusEffect} from '@react-navigation/native';
import Header from '../../../core/components/Headers/Header';
import FaqSubHeader from '../components/faq/FaqSubHeader';
import QuestionList from '../components/faq/QuestionList';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

const Faq = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <Header
        icons={icons}
        colors={theme}
        navigation={navigation}
        message={'Faq'}
      />
      <ScrollView>
        <FaqSubHeader icons={icons} colors={theme} translation={translation} />
        <QuestionList icons={icons} translation={translation} colors={theme} />
      </ScrollView>
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    margin: 10,
    textAlign: 'justify',
    padding: 3,
  },
  keyPoints: {margin: 5, padding: 3},
  keyPoint: {fontSize: 12, fontFamily: 'Poppins-SemiBold'},
  question: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBoldItalic',
    margin: 5,
    padding: 3,
  },
  answer: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    margin: 3,
    backgroundColor: 'rgba(242,242,242,1)',
    borderRadius: 5,
    borderColor: 'rgba(218,218,218,1)',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'rgba(63,63,64,1)',
  },
  faq: {margin: 10},
  faqItem: {
    marginVertical: 5,
    marginBottom: 35,
    padding: 10,
    backgroundColor: 'rgba(222,222,222,1)',
    borderRadius: 5,
    borderColor: 'rgba(212,212,212,1)',
    borderWidth: 1,
  },
});
