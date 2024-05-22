import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';

import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import BackToLibraryButton from '../components/BackToLibraryButton';

const Checklist = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const handlePressNext = () => {
    navigation.navigate('housekeeping');
  };
  const handleGoBack = () => {
    navigation.navigate('library');
  };
  const textColor = {color: theme.library.textColor};
  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <ScrollView style={styles.scrollView}>
        <Text style={[styles.headerText, textColor]}>
          {translation.guides && translation.guides.checklist.HeaderText}
        </Text>

        <BackToLibraryButton
          colors={theme}
          navigation={navigation}
          icons={icons}
          translation={translation}
        />

        <View style={styles.groupContainer}>
          {translation.guides &&
            translation.guides.checklist.checklist.map((item, index) => (
              <View key={index} style={styles.listContainer}>
                <Text style={[styles.subHeaderText, textColor]}>
                  {item.subHeader}
                </Text>
                {item?.list &&
                  item?.list.map((listItem, listItemIndex) => (
                    <Text
                      key={listItemIndex}
                      style={[styles.checkListText, textColor]}>
                      {listItem}
                    </Text>
                  ))}
                {item.subList && (
                  <Text style={[styles.subSubHeaderText, textColor]}>
                    {item.subList.header}
                  </Text>
                )}
                {item.subList &&
                  item.subList.list.map((subListItem, subListItemIndex) => (
                    <Text
                      key={subListItemIndex}
                      style={[styles.checkListText, textColor]}>
                      {subListItem}
                    </Text>
                  ))}
              </View>
            ))}
        </View>
      </ScrollView>
      <View style={styles.instructionContainer}>
        <Text style={[styles.instruction, textColor]}>
          {translation.core && translation.core.Next}
        </Text>
        <Text style={[styles.next, textColor]}>
          {translation.guides && translation.guides.checklist.Next}
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

export default Checklist;

const styles = StyleSheet.create({
  container: {height: '100%'},
  scrollView: {height: '91.7%'},
  headerText: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    margin: 10,
    marginVertical: 0,
    textAlign: 'center',
    padding: 3,
    marginTop: 5,
  },
  checkListText: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    marginHorizontal: 15,
    color: 'rgba(64,63,63,1)',
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
  image: {width: 27, height: 27, marginHorizontal: 5},
  subHeaderText: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    margin: 10,
    marginBottom: 0,
    textAlign: 'justify',
    padding: 3,
  },
  subSubHeaderText: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    margin: 10,
    marginBottom: 0,
    textAlign: 'justify',
    padding: 3,
  },

  contentLink: {margin: 5},
  contentLinks: {
    height: '69%',
    borderColor: 'rgba(235,235,235,1)',
    borderWidth: 1,
    margin: 2,
  },
});
