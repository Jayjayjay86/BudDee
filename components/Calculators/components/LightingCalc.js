import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CalculatorButton from './CalculatorButton';
import {textInputStyle} from '../../../core/constants/Styles';

const LightingCalc = ({theme, translation}) => {
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [wattage, setWattage] = useState('');

  const calculateWattage = () => {
    if (width === '') {
      ToastAndroid.show('Enter A Width.', ToastAndroid.BOTTOM);
      return;
    } else if (length === '') {
      ToastAndroid.show('Enter A Length.', ToastAndroid.BOTTOM);
      return;
    } else if (height === '') {
      ToastAndroid.show('Enter Height From Floor.', ToastAndroid.BOTTOM);
      return;
    }
    const w = parseFloat(width);
    const l = parseFloat(length);
    const h = parseFloat(height);
    const area = w * l;
    const estimatedWattage = area * h * 279.2;
    setWattage(estimatedWattage.toFixed(2));
  };
  const textColor = {color: theme.library.textColor};
  return (
    <View>
      <View style={styles.input}>
        <Text style={[styles.label, textColor]}>Grow Space Width (m)</Text>
        <TextInput
          keyboardType="numeric"
          value={width}
          onChangeText={setWidth}
          style={[styles.input, textInputStyle]}
        />
      </View>
      <View style={styles.input}>
        <Text style={[styles.label, textColor]}>Grow Space Length (m)</Text>
        <TextInput
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
          style={[styles.input, textInputStyle]}
        />
      </View>

      <View style={styles.input}>
        <Text style={[styles.label, textColor]}>Height From Floor (m)</Text>
        <TextInput
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
          style={[styles.input, textInputStyle]}
        />
      </View>

      <CalculatorButton
        theme={theme}
        onPress={calculateWattage}
        message={'Calculate'}
      />
      <Text style={[styles.result, textColor]}>
        {wattage
          ? `${
              translation && translation.calculators.calculators.light.Est
            } ${wattage} ${
              translation && translation.calculators.calculators.light.Watts
            }`
          : ''}
      </Text>
    </View>
  );
};

export default LightingCalc;

const styles = StyleSheet.create({
  inputContainer: {margin: 7},
  label: {fontSize: 17, fontFamily: 'Poppins-Regular'},
  result: {
    fontSize: 21,
    margin: 8,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 40,
    textAlign: 'center',
  },
});
