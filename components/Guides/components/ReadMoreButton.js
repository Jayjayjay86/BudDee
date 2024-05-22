import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ReadMoreButton = ({setReadMoreOpen, theme, translation}) => {
  const textColor = {color: theme.library.textColor};
  const tapBackground = {backgroundColor: theme.core.lightBorder};
  return (
    <TouchableOpacity
      onPress={() => {
        setReadMoreOpen(prevState => !prevState);
      }}>
      <Text style={[styles.tapHereLink, textColor, tapBackground]}>
        {translation.guides && translation.guides.TapHere}
      </Text>
    </TouchableOpacity>
  );
};

export default ReadMoreButton;

const styles = StyleSheet.create({
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
