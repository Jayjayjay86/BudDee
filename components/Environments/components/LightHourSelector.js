import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const LightHourSelector = ({colors, translation, setEnvObject, envObject}) => {
  const textStyles = {color: colors.envs.new.nameInputBorder};
  const inputStyles = {borderColor: colors.envs.new.nameInputBorder};
  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, textStyles]}>
        {translation.environments &&
          translation.environments.env_list.LightHours}
      </Text>
      <View style={styles.inputContainer}>
        {!envObject.lightHours ? (
          <>
            <TextInput
              onChangeText={hours => {
                setEnvObject({
                  ...envObject,
                  lightHours: hours,
                });
              }}
              keyboardType="numeric"
              placeholder={
                translation.environments &&
                translation.environments.addEnv.placeholder.Hours
              }
              style={[styles.inputText, inputStyles]}
            />
          </>
        ) : (
          <>
            <TextInput
              value={envObject.lightHours}
              onChangeText={hours => {
                setEnvObject({
                  ...envObject,
                  lightHours: hours,
                });
              }}
              keyboardType="numeric"
              style={[styles.inputText, inputStyles]}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default LightHourSelector;

const styles = StyleSheet.create({
  container: {marginTop: 10},

  inputText: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginHorizontal: 25,
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginTop: 15,
    marginLeft: 5,
  },

  inputContainer: {},
});
