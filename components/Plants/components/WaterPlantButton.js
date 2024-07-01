import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const WaterPlantButton = ({envId, batchId, pressButton, theme, icons}) => {
  const actionStyle = {
    backgroundColor: theme.core.lessCream,
    borderColor: theme.core.textcolor,
  };
  return (
    <TouchableOpacity
      style={[styles.actionLink, actionStyle]}
      onPress={() => {
        pressButton(envId, batchId);
      }}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={icons.buttons.guides.library[11]} />
      </View>
    </TouchableOpacity>
  );
};

export default WaterPlantButton;

const styles = StyleSheet.create({
  actionLink: {
    padding: 2,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    borderRadius: 50,
  },
  imageContainer: {
    height: 35,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {height: 30, width: 30},
  actionLinkText: {fontSize: 15, paddingHorizontal: 2},
});
