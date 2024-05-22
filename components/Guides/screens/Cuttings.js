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

import GuideImage from '../components/GuideImage';
import TldrDisplay from '../components/TldrDisplay';
import ReadMoreButton from '../components/ReadMoreButton';
import HowToButton from '../components/cuttings/HowToButton';
import GuideButtonBar from '../components/GuideButtonBar';
const Cuttings = ({navigation}) => {
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const [readMoreStepsOpen, setReadMoreStepsOpen] = useState(false);
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const handlePressNext = () => {
    navigation.navigate('repots');
  };
  const handleGoBack = () => {
    navigation.navigate('watering');
  };
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
          {translation.guides && translation.guides.cuttings.HeaderText}
        </Text>
        <GuideButtonBar
          translation={translation}
          theme={theme}
          navigation={navigation}
          icons={icons}
        />
        <GuideImage icon={icons.buttons.guides.images[4]} />

        <TldrDisplay
          translation={translation}
          list={translation.guides.cuttings.tldr}
          theme={theme}
        />

        <View style={styles.readMoreContainer}>
          <View style={styles.buttonBox}>
            <HowToButton
              style={styles.button}
              translation={translation}
              setReadMoreOpen={setReadMoreStepsOpen}
              theme={theme}
            />
            {readMoreStepsOpen ? (
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

          {readMoreStepsOpen && (
            <View style={styles.steps}>
              {translation.guides &&
                translation.guides.cuttings.steps.map((item, index) => (
                  <View key={index} style={styles.tldr}>
                    <Text style={[styles.step, textColor]}>
                      {index + 1} - {item}
                    </Text>
                  </View>
                ))}
            </View>
          )}
        </View>

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
            <ScrollView style={styles.scrollView}>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.cuttings.p1}
              </Text>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.cuttings.p2}
              </Text>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.cuttings.p3}
              </Text>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.cuttings.p4}
              </Text>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.cuttings.p5}
              </Text>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.cuttings.p6}
              </Text>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.cuttings.p7}
              </Text>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.cuttings.p8}
              </Text>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.cuttings.p9}
              </Text>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.cuttings.p10}
              </Text>
              <Text style={[styles.primary, textColor]}>
                {translation.guides && translation.guides.cuttings.p11}
              </Text>
            </ScrollView>
          )}
        </View>
      </ScrollView>

      <View style={styles.instructionContainer}>
        <Text style={[styles.instruction, textColor]}>
          {translation.core && translation.core.Next}
        </Text>
        <Text style={[styles.next, textColor]}>
          {translation.guides && translation.guides.cuttings.Next}
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

export default Cuttings;

const styles = StyleSheet.create({
  readMoreStepsContainer: {},
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
  step: {margin: 5},
  steps: {margin: 20, marginTop: 50},
  phaseArrow: {width: 15, height: 15, margin: 5},
  buttonBox: {flexDirection: 'row', alignItems: 'center'},
});
