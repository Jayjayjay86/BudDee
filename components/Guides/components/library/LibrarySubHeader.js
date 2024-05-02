import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LibrarySubHeader = ({translation, colors}) => {
  const textColor = {color: colors.library.textColor};
  return (
    <View>
      <Text style={[styles.subHeaderText, textColor]}>
        {translation.guides && translation.guides.library.SubHeaderText}
      </Text>
    </View>
  );
};

export default LibrarySubHeader;

const styles = StyleSheet.create({
  subHeaderText: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    margin: 10,
    marginBottom: 10,
    textAlign: 'justify',
    padding: 3,
  },
});
