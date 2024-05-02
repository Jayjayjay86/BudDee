import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CreateHeader = ({isDarkMode, colors, message}) => {
  const headerText = {
    color: colors.core.header.textColor,
  };
  const headerBackground = {
    backgroundColor: colors.core.header.backgroundColor,
  };
  return (
    <View style={[styles.container, headerBackground]}>
      <Text style={[styles.text, headerText]}>{message}</Text>
    </View>
  );
};

export default CreateHeader;

const styles = StyleSheet.create({
  container: {height: 50},
  image: {flex: 1, justifyContent: 'center'},
  text: {
    fontSize: 28,
    marginHorizontal: 10,
    marginTop: 5,
    fontFamily: 'Poppins-SemiBold',
  },
});
