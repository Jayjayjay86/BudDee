import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default function Add({message, colors, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View
        style={[styles.inner, {backgroundColor: colors.pickerBackgroundColor}]}>
        <FontAwesomeIcon
          icon={'square-plus'}
          size={60}
          color={colors.addButtonBackgroundColor}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
  },
  inner: {borderRadius: 10},
});
