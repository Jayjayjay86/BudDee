import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const HangButton = ({
  setDisplayPhase,
  setPlantObject,
  displayPhase,
  colors,
  icons,
  translation,
}) => {
  const textStyles = {color: colors.plants.new.textColor};
  const borderStyle = {borderColor: colors.core.lightBorder};
  const borderStyleSelected = {borderColor: colors.core.darkBorder};
  return (
    <TouchableOpacity
      onPress={() => {
        setDisplayPhase(prevstate => ({
          veg: false,
          flower: false,
          hang: !prevstate.hang,
        }));
        setPlantObject(prevState => ({
          ...prevState,
          currentPhase: 'hang',
        }));
      }}>
      <View
        style={[
          styles.phaseItem,
          displayPhase.hang ? borderStyle : borderStyleSelected,
        ]}>
        <Image style={styles.phaseImage} source={icons.badge[2]} />
        <Text style={[styles.phaseItemText, textStyles]}>
          {translation.plants && translation.plants.addPlant.Hanging}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HangButton;

const styles = StyleSheet.create({
  phaseItem: {
    borderWidth: 2,
    minWidth: 90,
    alignItems: 'center',
    borderRadius: 5,
  },

  phaseItemText: {fontFamily: 'Poppins-LightItalic', paddingHorizontal: 5},
  phaseImage: {width: 35, height: 35},
});
