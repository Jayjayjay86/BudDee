import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const FlowerTimeInput = ({
  translation,
  setPlantObject,
  plantObject,
  colors,
}) => {
  const textStyles = {color: colors.plants.new.textColor};
  const borderBottom = {borderBottomColor: 'black'};

  return (
    <View style={styles.phaseInput}>
      <Text style={[styles.formText, textStyles]}>
        {translation.plants && translation.plants.addPlant.FlowerTime}
      </Text>

      <TextInput
        keyboardType={'numeric'}
        placeholder={'0'}
        style={[styles.textInput, borderBottom]}
        onChangeText={text => {
          setPlantObject({...plantObject, flowerTime: text});
        }}
      />
    </View>
  );
};

export default FlowerTimeInput;

const styles = StyleSheet.create({
  formText: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  phaseInput: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'baseline',
    marginHorizontal: 15,
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    borderBottomWidth: 2,
    width: 50,
    textAlign: 'center',
  },
});
