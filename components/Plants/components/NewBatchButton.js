import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const NewBatchButton = ({pressNewBatchButton, translation, theme, item}) => {
  const backgroundColor = {
    borderColor: 'rgba(100,100,100,0.9)',
    backgroundColor: 'rgba(100,100,100,0.3)',
  };
  return (
    <TouchableOpacity
      style={[styles.actionLink, backgroundColor]}
      onPress={() => {
        pressNewBatchButton(item);
      }}>
      <Text style={styles.actionLinkText}>
        {translation.plants && translation.plants.other.AddMore}
      </Text>
    </TouchableOpacity>
  );
};

export default NewBatchButton;

const styles = StyleSheet.create({
  actionLink: {
    padding: 2,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  actionLinkText: {fontSize: 15, paddingHorizontal: 2},
});
