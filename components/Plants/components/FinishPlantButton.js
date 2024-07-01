import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

const FinishPlantButton = ({envId, batchId, pressButton, icons}) => {
  const colorStyles = {
    backgroundColor: 'rgba(100,100,100,0.3)',
    borderColor: 'rgba(100,100,100,0.9)',
  };
  return (
    <TouchableOpacity
      style={[styles.actionLink, colorStyles]}
      onPress={() => {
        pressButton(envId, batchId);
      }}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={icons.buttons.guides.others[6]} />
      </View>
    </TouchableOpacity>
  );
};

export default FinishPlantButton;

const styles = StyleSheet.create({
  imageContainer: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {height: 35, width: 35},
  actionLink: {
    padding: 2,
    borderRadius: 50,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  actionLinkText: {fontSize: 15, paddingHorizontal: 2},
});
