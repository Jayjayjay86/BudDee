import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const BackToLibraryButton = ({navigation, icons, colors, translation}) => {
  const pressButton = () => {
    navigation.navigate('library');
  };
  const textColor = {color: colors.library.textColor};
  return (
    <TouchableOpacity onPress={pressButton} style={styles.container}>
      <Image style={styles.image} source={icons.buttons.moreTools[5]} />
      <Text style={[styles.text, textColor]}>
        {translation.guides && translation.guides.BackLibrary}
      </Text>
    </TouchableOpacity>
  );
};

export default BackToLibraryButton;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginBottom: 10},
  image: {height: 50, width: 50},
  text: {fontSize: 19, fontFamily: 'Poppins-Light'},
});
