import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const MovePlantButton = ({pressMoveAction, translation, theme}) => {
  const buttonColor = {
    backgroundColor: 'rgba(100,100,100,0.3)',
    borderColor: 'rgba(100,100,100,0.3)',
  };
  return (
    <TouchableOpacity
      style={[styles.actionLink, buttonColor]}
      onPress={() => {
        pressMoveAction();
      }}>
      <Text style={styles.actionLinkText}>
        {translation.plants && translation.plants.other.MovePlants}
      </Text>
    </TouchableOpacity>
  );
};

export default MovePlantButton;

const styles = StyleSheet.create({
  actionLink: {
    padding: 2,
    borderRadius: 4,
    paddingHorizontal: 5,
    borderWidth: 1,
    margin: 10,
  },
  actionLinkText: {fontSize: 25, fontFamily: 'Poppins-Regular', paddingTop: 4},
});
