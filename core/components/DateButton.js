import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function DateButton({message, colors, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View
        style={[
          styles.inner,
          {backgroundColor: colors.changeButtonBackground},
        ]}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  touchable: {
    justifyContent: 'flex-start',
    maxWidth: 90,
    marginHorizontal: 5,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontSize: 19,
  },
  inner: {borderRadius: 10},
});
