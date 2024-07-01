import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AddMoreEnvsButton = ({translation, theme, icons, navigation}) => {
  const HandlePressAddEnv = () => {
    navigation.navigate('add_envs');
  };
  const textColor = {color: theme.core.textColor};
  return (
    <TouchableOpacity
      onPress={() => {
        HandlePressAddEnv();
      }}>
      <View style={styles.addContainer}>
        <Text style={[styles.addText, textColor]}>Add New Environment</Text>
        <Image
          style={[styles.addImage, {backgroundColor: theme.core.lightBorder}]}
          source={icons.others.misc[1]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AddMoreEnvsButton;

const styles = StyleSheet.create({
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
  },
  addText: {
    marginLeft: 10,
    flex: 1,
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  addImage: {height: 40, width: 40, marginRight: 10, borderRadius: 10},
});
