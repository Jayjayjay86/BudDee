import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const DescriptionInput = ({translation, colors, icons}) => {
  return (
    <View style={styles.formInput}>
      <Image
        style={styles.formImage}
        source={icons.buttons.actions.newAction[3]}
      />
      <TextInput
        style={styles.textInput}
        placeholder={
          translation.actions &&
          translation.actions.newAction.placeholder.Description
        }
      />
    </View>
  );
};

export default DescriptionInput;

const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 30,
  },
  formImage: {width: 40, height: 40, marginRight: 20},
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
});
