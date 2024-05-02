import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const loadingImage = require('../../../assets/images/splashscreen/transparent.png');

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={loadingImage} resizeMode="contain" />
    </View>
  );
};

export default LoadingScreen;
const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  image: {width: '100%', height: '100%'},
});
