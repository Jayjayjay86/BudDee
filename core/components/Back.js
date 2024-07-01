import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default function Back({navigation, message}) {
  const pressBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={pressBack} style={styles.touchable}>
      <FontAwesomeIcon
        icon={'rotate-left'}
        size={30}
        color={'rgb(19, 19, 19)'}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(19,19,19,1)',
    borderWidth: 1,
    width: 48,
    height: 48,
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
  text: {
    fontSize: 15,
  },
});
