import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ActionButton = ({id, onButtonPress, icon, theme, visible}) => {
  const selectedBackground = {backgroundColor: theme.core.lightBorder};
  return (
    <TouchableOpacity
      onPress={() => {
        onButtonPress(id);
      }}
      style={[styles.imageLink, visible && selectedBackground]}>
      <Image style={styles.actionImage} source={icon} />
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  actionImage: {width: 85, height: 85},
  imageLink: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    margin: 5,
    borderRadius: 10,
    borderWidth: 3,
  },
});
