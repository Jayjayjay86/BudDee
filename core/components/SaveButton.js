import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function SaveButton({translation, colors, onPress}) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={styles.touchable}>
      <View
        style={[styles.inner, {backgroundColor: colors.pickerBackgroundColor}]}>
        <Text style={styles.text}>
          {translation.core && translation.core.Save}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  touchable: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
  },
  inner: {borderRadius: 10},
});
