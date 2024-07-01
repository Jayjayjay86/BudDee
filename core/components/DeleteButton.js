import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const DeleteButton = ({translation, theme, onPress}) => {
  const textColor = {color: theme.core.textColor};

  const border = {borderColor: theme.core.darkBorder};
  const redBackground = {backgroundColor: 'rgba(170,0,0,0.7)'};
  return (
    <TouchableOpacity style={styles.confirm} onPress={onPress}>
      <Text style={[styles.confirmText, textColor, redBackground, border]}>
        {translation.core && translation.core.Delete}
      </Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  confirm: {marginTop: 20},
  confirmText: {
    paddingHorizontal: 15,

    borderRadius: 10,
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    borderWidth: 1,

    marginBottom: 20,
  },
  cancel: {},
  request: {marginTop: 60},
  requestText: {
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  name: {
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 40,
  },
  plants: {
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    borderWidth: 1,
  },
});
