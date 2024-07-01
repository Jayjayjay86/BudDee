import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DeleteBatchButton = ({envId, batchId, pressButton, icons, theme}) => {
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
        <Image style={styles.image} source={icons.others.misc[8]} />
      </View>
    </TouchableOpacity>
  );
};

export default DeleteBatchButton;

const styles = StyleSheet.create({
  imageContainer: {
    height: 35,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {height: 30, width: 30},
  actionLink: {
    padding: 2,
    borderRadius: 50,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionLinkText: {fontSize: 15, paddingHorizontal: 2},
});
