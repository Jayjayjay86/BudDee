import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const QuestionList = ({icons, translation, colors}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleMoreInfo = index => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const textStyle = {color: colors.faq.textColor};
  const faqItemStyle = {
    backgroundColor: colors.faq.cardBackground,
    borderColor: colors.faq.cardBorder,
  };
  const InnerPointsStyle = {
    backgroundColor: colors.faq.cardBackgroundInner,
    borderColor: colors.faq.cardBorder,
    color: colors.faq.textColor,
  };
  const innerText = {
    backgroundColor: colors.faq.cardBackgroundTextInner,
    color: colors.faq.textColor,
  };
  const keyPointsStyles = {color: colors.faq.textColor};
  const buttonStyles = {
    backgroundColor: colors.core.textColor,
    borderColor: colors.core.darkBorder,
  };
  const buttonTextStyle = {color: colors.core.primary};
  return (
    <View style={styles.faq}>
      {translation.guides &&
        translation.guides.faq.top20faq.map((item, itemIndex) => (
          <View key={itemIndex} style={[styles.faqItem, faqItemStyle]}>
            <Text style={[styles.question, textStyle]}>"{item.question}"</Text>
            <View style={[styles.keyPoints, InnerPointsStyle]}>
              {item.keyPoints?.map((point, pointIndex) => (
                <Text
                  key={pointIndex}
                  style={[styles.keyPoint, keyPointsStyles]}>
                  - {point}
                </Text>
              ))}
            </View>
            {expandedIndex === itemIndex ? (
              <>
                <Text style={[styles.answer, innerText]}>{item.answer}</Text>
                <View style={[styles.moreInfoButtonContainer, buttonStyles]}>
                  <TouchableOpacity onPress={() => toggleMoreInfo(itemIndex)}>
                    <Text style={[styles.moreInfoText, buttonTextStyle]}>
                      {translation.guides && translation.guides.faq.Hide}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <View style={[styles.moreInfoButtonContainer, buttonStyles]}>
                <TouchableOpacity onPress={() => toggleMoreInfo(itemIndex)}>
                  <Text style={[styles.moreInfoText, buttonTextStyle]}>
                    {translation.guides && translation.guides.faq.More}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
    </View>
  );
};

export default QuestionList;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    margin: 10,
    textAlign: 'justify',
    padding: 3,
  },
  keyPoints: {margin: 5, padding: 3, borderRadius: 10},
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

    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  faq: {margin: 10},
  faqItem: {
    marginVertical: 5,
    marginBottom: 35,
    padding: 10,

    borderRadius: 5,

    borderWidth: 1,
  },
  moreInfoButtonContainer: {
    padding: 5,
    paddingBottom: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  moreInfoText: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 10,
  },
});
