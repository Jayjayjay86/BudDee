import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ActionChoice = ({setPlantOrEnvironment, translation}) => {
  return (
    <View style={styles.choiceContainer}>
      <TouchableOpacity
        onPress={() => {
          setPlantOrEnvironment('plant');
        }}
        style={styles.choiceLink}>
        <Text style={styles.choiceTextPlants}>
          {translation.actions && translation.actions.newAction.Plant}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPlantOrEnvironment('env');
        }}
        style={styles.choiceLink}>
        <Text style={styles.choiceTextEnvs}>
          {translation.actions && translation.actions.newAction.Environment}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionChoice;

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
    padding: 7,
    fontSize: 35,
    backgroundColor: 'rgba(100,100,100,0.2)',
    borderRightWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 15,
  },
  choiceTextEnvs: {
    padding: 7,
    paddingHorizontal: 15,
    fontSize: 35,
    backgroundColor: 'rgba(100,100,100,0.2)',
    borderColor: 'rgba(50,50,50,0.4)',
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
