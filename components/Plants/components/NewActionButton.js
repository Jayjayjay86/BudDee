import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const NewActionButton = ({pressNewAction, translation, theme, item}) => {
  const backgroundColor = {backgroundColor: 'rgba(100,100,100,0.3)'};
  return (
    <TouchableOpacity
      style={[styles.actionLink, backgroundColor]}
      onPress={() => {
        pressNewAction(item);
      }}>
      <Text style={styles.actionLinkText}>
        {translation.plants && translation.plants.other.Journal}
      </Text>
    </TouchableOpacity>
  );
};

export default NewActionButton;

const styles = StyleSheet.create({
  actionLink: {
    padding: 2,
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  actionLinkText: {fontSize: 15},
});
