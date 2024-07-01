import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const BottomToolBar = ({
  icons,
  colors,
  backMessage,
  handleGoBack,
  handlePressNext,
  nextMessage,
}) => {
  const textStyle = {color: colors.core.textColor};

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <View>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Image style={styles.image} source={icons?.others.core[0]} />
            <Text style={[styles.text, textStyle]}>{backMessage}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.nextButton} onPress={handlePressNext}>
            <Text style={[styles.text, textStyle]}>{nextMessage}</Text>
            <Image style={styles.image} source={icons?.others.core[1]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomToolBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  image: {width: 35, height: 35, marginHorizontal: 5},
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {fontSize: 18, fontFamily: 'Poppins-Regular'},
});
