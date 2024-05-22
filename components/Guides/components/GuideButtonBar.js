import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const GuideButtonBar = ({theme, navigation, icons, translation}) => {
  const pressButton = () => {
    navigation.navigate('Index');
  };
  const pressOtherButton = () => {
    navigation.navigate('library');
  };
  const textColor = {color: theme.library.textColor};
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pressButton} style={styles.buttonContainer}>
        <Image style={styles.image} source={icons.buttons.bottomTabs[0]} />
        <Text style={[styles.text, textColor]}>
          {translation.guides && translation.guides.BackHome}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={pressOtherButton}
        style={styles.buttonContainer}>
        <Image style={styles.image} source={icons.buttons.moreTools[5]} />
        <Text style={[styles.text, textColor]}>
          {translation.guides && translation.guides.BackLibrary}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuideButtonBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    marginBottom: 10,
    justifyContent: 'space-between',
    gap: 30,
  },
  image: {height: 50, width: 50},
  text: {fontSize: 14, fontFamily: 'Poppins-Light'},
  buttonContainer: {flexDirection: 'column', alignItems: 'center'},
});
