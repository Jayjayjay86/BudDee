import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CalculatorButton = ({theme, onPress, message}) => {
  const textColor = {color: theme.core.textColor};

  const border = {borderColor: theme.core.darkBorder};
  const background = {backgroundColor: theme.core.calculate};
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.text, textColor, background, border]}>
        {message}
      </Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;

const styles = StyleSheet.create({
  container: {marginTop: 20},
  text: {
    alignItems: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
  },
});
