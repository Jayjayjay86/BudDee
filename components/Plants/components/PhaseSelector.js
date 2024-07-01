import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VegButton from './VegButton';
import FlowerButton from './FlowerButton';
import HangButton from './HangButton';

const PhaseSelector = ({
  colors,
  translation,
  setDisplayPhase,
  displayPhase,
  setPlantObject,
  isDarkMode,
  icons,
}) => {
  const textStyles = {color: colors.plants.new.textColor};

  return (
    <View style={styles.phaseContainer}>
      <Text style={[styles.inputText, textStyles]}>
        {translation.plants && translation.plants.addPlant.ChooseStage}
      </Text>
      <View style={styles.phaseSelect}>
        <View style={styles.phaseItems}>
          <VegButton
            translation={translation}
            icons={icons}
            colors={colors}
            setPlantObject={setPlantObject}
            setDisplayPhase={setDisplayPhase}
            displayPhase={displayPhase}
          />

          <FlowerButton
            translation={translation}
            icons={icons}
            colors={colors}
            setPlantObject={setPlantObject}
            setDisplayPhase={setDisplayPhase}
            displayPhase={displayPhase}
          />
          <HangButton
            translation={translation}
            icons={icons}
            colors={colors}
            setPlantObject={setPlantObject}
            setDisplayPhase={setDisplayPhase}
            displayPhase={displayPhase}
          />
        </View>
      </View>
    </View>
  );
};

export default PhaseSelector;

const styles = StyleSheet.create({
  inputText: {fontSize: 22, fontFamily: 'Poppins-Regular', margin: 5},
  phaseContainer: {marginVertical: 20},
  phaseSelect: {marginVertical: 10},
  phaseItems: {flexDirection: 'row', justifyContent: 'space-around'},
});
