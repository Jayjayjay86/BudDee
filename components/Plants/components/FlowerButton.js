import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const FlowerButton = ({
  colors,
  translation,
  icons,
  setDisplayPhase,
  displayPhase,
  setPlantObject,
}) => {
  const textStyles = {color: colors.plants.new.textColor};
  const borderStyle = {borderColor: colors.core.lightBorder};
  const borderStyleSelected = {borderColor: colors.core.darkBorder};
  return (
    <TouchableOpacity
      onPress={() => {
        setDisplayPhase(prevstate => ({
          veg: false,
          hang: false,
          flower: !prevstate.flower,
        }));
        setPlantObject(prevState => ({
          ...prevState,
          currentPhase: 'flower',
        }));
      }}>
      <View
        style={[
          styles.phaseItem,
          displayPhase.flower ? borderStyle : borderStyleSelected,
        ]}>
        <Image style={styles.phaseImage} source={icons.badge[1]} />
        <Text style={[styles.phaseItemText, textStyles]}>
          {translation.plants && translation.plants.addPlant.Flowering}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlowerButton;

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
