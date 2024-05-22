import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const HowToButton = ({setReadMoreOpen, theme, translation}) => {
  const textColor = {color: theme.library.textColor};
  const tapBackground = {backgroundColor: theme.core.lightBorder};
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setReadMoreOpen(prevState => !prevState);
      }}>
      <Text style={[styles.tapHereLink, textColor, tapBackground]}>
        {translation.guides && translation.guides.cuttings.HowTo}
      </Text>
    </TouchableOpacity>
  );
};

export default HowToButton;

const styles = StyleSheet.create({
  container: {marginBottom: 10},
  tapHereLink: {
    fontSize: 21,
    fontFamily: 'Poppins-BoldItalic',
    paddingTop: 6,
    borderRadius: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
