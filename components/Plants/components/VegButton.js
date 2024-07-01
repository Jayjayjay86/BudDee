import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const VegButton = ({
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
          hang: false,
          flower: false,
          veg: !prevstate.veg,
        }));
        setPlantObject(prevState => ({
          ...prevState,
          currentPhase: 'veg',
        }));
      }}>
      <View
        style={[
          styles.phaseItem,
          displayPhase.veg ? borderStyle : borderStyleSelected,
        ]}>
        <Image style={styles.phaseImage} source={icons.badge[0]} />
        <Text style={[styles.phaseItemText, textStyles]}>
          {translation.plants && translation.plants.addPlant.Vegetative}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VegButton;

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
