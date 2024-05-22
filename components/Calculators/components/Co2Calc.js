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

const Co2Calc = ({theme, translation}) => {
  console.log(theme.core);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const calculateCO2 = () => {
    if (length === '') {
      ToastAndroid.show('Enter Length.', ToastAndroid.BOTTOM);
      return;
    } else if (width === '') {
      ToastAndroid.show('Enter Width.', ToastAndroid.BOTTOM);
      return;
    } else if (height === '') {
      ToastAndroid.show('Enter Height.', ToastAndroid.BOTTOM);
      return;
    }

    const l = Number(length);
    const w = Number(width);
    const h = Number(height);
    const volume = l * w * h;
    const co2Needed = volume * 3;
    setResult(co2Needed);
  };
  const textColor = {color: theme.library.textColor};
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.co2.EnvLength}
        </Text>
        <TextInput
          style={[styles.input, textInputStyle]}
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.co2.EnvWidth}
        </Text>
        <TextInput
          style={[styles.input, textInputStyle]}
          keyboardType="numeric"
          value={width}
          onChangeText={setWidth}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.co2.EnvHeight}
        </Text>
        <TextInput
          style={[styles.input, textInputStyle]}
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
      </View>

      <CalculatorButton
        theme={theme}
        onPress={calculateCO2}
        message="Calculate CO2 Needed"
      />
      <Text style={[styles.result, textColor]}>
        {result
          ? `${
              translation && translation.calculators.calculators.co2.Result
            } ${result} ${
              translation && translation.calculators.calculators.co2.Ppm
            }`
          : ''}
      </Text>
    </View>
  );
};

export default Co2Calc;

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
