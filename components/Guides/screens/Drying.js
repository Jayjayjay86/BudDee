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
import GuideImage from '../components/GuideImage';
import TldrDisplay from '../components/TldrDisplay';
import ReadMoreButton from '../components/ReadMoreButton';
import GuideButtonBar from '../components/GuideButtonBar';
const Drying = ({navigation}) => {
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const textColor = {color: theme.library.textColor};
  const handlePressNext = () => {
    navigation.navigate('after');
  };
  const handleGoBack = () => {
    navigation.navigate('harvest');
  };
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
          {translation.guides && translation.guides.drying.HeaderText}
        </Text>
        <GuideButtonBar
          translation={translation}
          theme={theme}
          navigation={navigation}
          icons={icons}
        />
        <GuideImage icon={icons.buttons.guides.images[8]} />
        <TldrDisplay
          translation={translation}
          list={translation.guides.harvests.tldr}
          theme={theme}
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
            <>
              <View>
                <Text>
                  {translation.guides && translation.guides.drying.p1}
                </Text>
                {translation.guides &&
                  translation.guides.drying.p1WhyList.map((item, index) => (
                    <View key={index} style={styles.tldr}>
                      <Text>{item.id}</Text>
                      <Text style={textColor}>{item.desc}</Text>
                    </View>
                  ))}
                <Text>
                  {translation.guides && translation.guides.drying.p2}
                </Text>
                {translation.guides &&
                  translation.guides.drying.p2WhyList.map((item, index) => (
                    <View key={index} style={styles.tldr}>
                      <Text>{item.id}</Text>
                      <Text style={textColor}>{item.desc}</Text>
                    </View>
                  ))}
              </View>
            </>
          )}
        </View>
      </ScrollView>

      <View style={styles.instructionContainer}>
        <Text style={[styles.instruction, textColor]}>
          {translation.core && translation.core.Next}
        </Text>
        <Text style={[styles.next, textColor]}>
          {translation.guides && translation.guides.drying.Next}
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

export default Drying;

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
