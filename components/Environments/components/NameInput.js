import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const NameInput = ({colors, translation, setEnvObject, envObject}) => {
  const inputStyles = {borderColor: colors.envs.new.nameInputBorder};
  const textStyles = {color: colors.envs.new.nameInputBorder};

  return (
    <View style={styles.formInput}>
      {!envObject.name ? (
        <>
          <Text style={[styles.formText, textStyles]}>Name</Text>
          <TextInput
            placeholder={translation.environments.addEnv.placeholder.Name}
            style={[styles.textInput, inputStyles]}
            onChangeText={value =>
              setEnvObject(prevState => ({...prevState, name: value}))
            }
          />
        </>
      ) : (
        <>
          <TextInput
            value={envObject.name}
            style={[styles.textInput, inputStyles]}
            onChangeText={value =>
              setEnvObject(prevState => ({...prevState, name: value}))
            }
          />
        </>
      )}
    </View>
  );
};

export default NameInput;
const styles = StyleSheet.create({
  formText: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  textInput: {
    fontFamily: 'Poppins-Light',
    alignSelf: 'center',
    width: '90%',
    borderBottomWidth: 1,
    margin: 10,
  },
});
