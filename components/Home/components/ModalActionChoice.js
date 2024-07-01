import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ModalActionChoice = ({setPlantOrEnvironment, translation}) => {
  const plantsStyle = {backgroundColor: 'rgba(100,100,100,0.2)'};
  const envStyle = {
    backgroundColor: 'rgba(100,100,100,0.2)',
    borderColor: 'rgba(50,50,50,0.4)',
  };
  return (
    <View style={styles.choiceContainer}>
      <TouchableOpacity
        onPress={() => {
          setPlantOrEnvironment('plant');
        }}
        style={styles.choiceLink}>
        <Text style={[styles.choiceTextPlants, plantsStyle]}>
          {translation.actions && translation.actions.newAction.Plant}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPlantOrEnvironment('env');
        }}
        style={styles.choiceLink}>
        <Text style={[styles.choiceTextEnvs, envStyle]}>
          {translation.actions && translation.actions.newAction.Environment}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalActionChoice;

const styles = StyleSheet.create({
  container: {height: '100%'},
  formContainer: {marginBottom: 20},
  choiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
  choiceLink: {},
  choiceTextPlants: {
    padding: 14,
    fontSize: 25,

    borderRightWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  choiceTextEnvs: {
    padding: 14,
    fontSize: 25,

    borderLeftWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  choiceTextDivide: {fontSize: 28},
  EnvOption: {
    margin: 10,
    marginLeft: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  EnvOptionText: {
    padding: 5,
    fontSize: 25,
  },
  optionImage: {width: 30, height: 30},
});
