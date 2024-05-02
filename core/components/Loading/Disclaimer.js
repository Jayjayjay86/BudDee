import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {updateOptions} from '../../../database/options';

import LoadingLanguageSelector from './LoadingLanguageSelector';
import {useTranslation} from '../../constants/Locales/TranslationContext';
import {useTheme} from '../../constants/Theme/ContextManager';

const BuddeeLogo = require('../../../assets/images/icon.png');

const Disclaimer = ({
  pressAccept,
  pressDecline,
  userOptions,
  setUserOptions,
}) => {
  const {theme, isDarkMode} = useTheme();
  const {translation, setTranslation} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.languageSelect}>
        {`${
          translation.core && translation.core.loading.disclaimer.DisplayPage
        } ${userOptions.preferredLanguage ? 'English' : 'Thai'}`}
      </Text>
      <LoadingLanguageSelector
        translation={translation}
        userOptions={userOptions}
        setUserOptions={setUserOptions}
      />
      <Image style={styles.logo} source={BuddeeLogo} />
      <Text style={styles.header}>
        {translation.core && translation.core.loading.disclaimer.NotOlder}
      </Text>
      <Text style={styles.request}>
        {translation.core && translation.core.loading.disclaimer.Request}
      </Text>
      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerText}>
          {translation.core &&
            translation.core.loading.disclaimer.DisclaimerText}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.termsLink}>
            {translation.core && translation.core.loading.disclaimer.TermsLink}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.acceptButton}
          onPress={() => {
            pressAccept();
          }}>
          <Text style={styles.buttonText}>
            {translation.core && translation.core.loading.disclaimer.AcceptText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.declineButton}
          onPress={() => {
            pressDecline();
          }}>
          <Text style={styles.buttonText}>
            {translation.core &&
              translation.core.loading.disclaimer.DeclineText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {alignItems: 'center', backgroundColor: 'white'},
  logo: {width: 48, height: 48, marginTop: 10},
  header: {
    marginTop: 30,
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
  },
  request: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    marginHorizontal: 15,
    marginTop: 60,
    textAlign: 'center',
  },
  disclaimer: {
    marginHorizontal: 15,
    marginTop: 60,
    marginBottom: 40,
  },
  disclaimerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'center',
  },
  termsLink: {fontFamily: 'Poppins-Bold', fontSize: 17, textAlign: 'center'},
  buttons: {marginTop: 80},
  acceptButton: {backgroundColor: 'rgba(0,100,0,0.5)', borderRadius: 20},
  declineButton: {marginTop: 5},
  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 19,
    padding: 10,
    paddingTop: 12,
    paddingHorizontal: 20,
  },
});
export default Disclaimer;
