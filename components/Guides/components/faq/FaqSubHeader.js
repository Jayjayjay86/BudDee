import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FaqSubHeader = ({icons, translation, colors}) => {
  const textStyle = {color: colors.faq.textColor};
  return (
    <View>
      <Text style={[styles.headerText, textStyle]}>
        {translation.guides && translation.guides.faq.Instructional}
      </Text>
    </View>
  );
};

export default FaqSubHeader;

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
