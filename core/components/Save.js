import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default function Save({message, colors, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View
        style={[styles.inner, {backgroundColor: colors.pickerBackgroundColor}]}>
        <FontAwesomeIcon
          icon={'floppy-disk'}
          size={60}
          color={colors.SaveButtonColor}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',

    borderRadius: 10,
  },
  text: {
    fontSize: 25,
  },
  inner: {borderRadius: 10},
});
