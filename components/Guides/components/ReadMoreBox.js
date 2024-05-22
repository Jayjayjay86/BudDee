import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReadMoreButton from './ReadMoreButton';

const ReadMoreBox = ({translation, readMoreOpen, setReadMoreOpen, theme}) => {
  const textColor = {color: theme.library.textColor};
  return (
    <View style={styles.readMoreContainer}>
      <ReadMoreButton setReadMoreOpen={setReadMoreOpen} theme={theme} />
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
  );
};

export default ReadMoreBox;

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
