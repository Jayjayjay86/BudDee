import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BottomToolBar from '../../../core/components/Headers/BottomToolBar';

import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import BackToLibraryButton from '../components/BackToLibraryButton';
import ReadMoreButton from '../components/ReadMoreButton';
import TldrDisplay from '../components/TldrDisplay';
import GuideImage from '../components/GuideImage';
import BackHomeButton from '../components/BackHomeButton';
import GuideButtonBar from '../components/GuideButtonBar';

const HouseKeeping = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const handlePressNext = () => {
    navigation.navigate('smell');
  };
  const handleGoBack = () => {
    navigation.navigate('checklist');
  };
  const tapBackground = {backgroundColor: theme.core.lightBorder};
  const textColor = {color: theme.library.textColor};
  const scrollViewInnerStyle = {alignItems: 'center'};
  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <ScrollView
        contentContainerStyle={scrollViewInnerStyle}
        style={styles.scrollView}>
        <Text style={[styles.headerText, textColor]}>
          {translation.guides && translation.guides.housekeeping.HeaderText}
        </Text>
        <GuideButtonBar
          translation={translation}
          theme={theme}
          navigation={navigation}
          icons={icons}
        />

        <GuideImage icon={icons.buttons.guides.images[32]} />

        <TldrDisplay
          translation={translation}
          theme={theme}
          list={translation.guides.housekeeping.tldr}
        />

        <View style={styles.readMoreContainer}>
          <View style={styles.buttonBox}>
            <ReadMoreButton
              style={styles.button}
              translation={translation}
              setReadMoreOpen={setReadMoreOpen}
              theme={theme}
            />
            {readMoreOpen ? (
              <>
                <Image
                  style={styles.phaseArrow}
                  source={icons.others.misc[4]}
                />
              </>
            ) : (
              <>
                <Image
                  style={styles.phaseArrow}
                  source={icons.others.misc[3]}
                />
              </>
            )}
          </View>
          {readMoreOpen && (
            <View style={styles.j}>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.housekeeping.p1}
              </Text>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.housekeeping.p2}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.instructionContainer}>
        <Text style={[styles.instruction, textColor]}>
          {translation.core && translation.core.Next}
        </Text>
        <Text style={[styles.next, textColor]}>
          {translation.guides && translation.guides.housekeeping.Next}
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

export default HouseKeeping;

const styles = StyleSheet.create({
  container: {alignItems: 'center', height: '100%'},
  phaseArrow: {width: 15, height: 15, margin: 5},
  buttonBox: {flexDirection: 'row', alignItems: 'center'},
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
    width: 122,
    height: 122,
    marginHorizontal: 5,
    borderWidth: 5,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {width: 120, height: 120, borderRadius: 500},
  tldrContainer: {alignItems: 'center', marginTop: 10},
  tldrHeader: {fontSize: 25, marginTop: 10},
  tldrHiddenContainer: {
    margin: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    minHeight: 200,
  },
  tldrText: {fontSize: 18},
  readMoreContainer: {alignItems: 'center'},
  tapHereLink: {
    fontSize: 25,
    fontFamily: 'Poppins-BoldItalic',
    padding: 5,
    paddingTop: 10,
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
