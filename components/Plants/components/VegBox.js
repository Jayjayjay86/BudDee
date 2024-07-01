import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const VegBox = ({translation, plantObject, setPlantObject, colors}) => {
  const textStyles = {color: colors.plants.new.textColor};
  const borderColor = {borderBottomColor: colors.plants.new.textColor};
  return (
    <View style={styles.phaseBox}>
      <View style={styles.phaseInput}>
        <Text style={[styles.formText, textStyles]}>
          {translation.plants && translation.plants.other.AgeDays}
        </Text>

        <TextInput
          keyboardType={'numeric'}
          placeholder="0"
          style={[styles.textInput, borderColor]}
          onChangeText={text => {
            setPlantObject({...plantObject, vegTime: text});
          }}
        />
      </View>
    </View>
  );
};

export default VegBox;

const styles = StyleSheet.create({
  phaseBox: {
    marginVertical: 20,
  },
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
