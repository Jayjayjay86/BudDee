import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AddLightButton = ({HandleAddLight, colors, icons}) => {
  const buttonColors = {
    backgroundColor: colors.plants.button.backgroundColor,
    borderColor: colors.plants.button.borderColor,
  };
  return (
    <TouchableOpacity
      onPress={() => {
        HandleAddLight();
      }}
      style={styles.container}>
      <View style={[styles.button, buttonColors]}>
        <Text style={[styles.buttonText]}>Add Light</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddLightButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
  },
  button: {height: 45, alignItems: 'center', justifyContent: 'center'},
  buttonText: {
    padding: 5,
    marginTop: 4,
    textAlign: 'center',
    fontSize: 19,
    fontFamily: 'Poppins-SemiBold',
  },
});
