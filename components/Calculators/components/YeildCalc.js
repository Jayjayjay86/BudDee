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

const YeildCalc = ({theme, translation}) => {
  const [wattage, setWattage] = useState('');
  const [vegWeeks, setVegWeeks] = useState('');
  const [flowerDays, setFlowerDays] = useState('');
  const [result, setResult] = useState('');

  const calculateYield = () => {
    if (wattage === '') {
      ToastAndroid.show('Enter wattage.', ToastAndroid.BOTTOM);
      return;
    } else if (vegWeeks === '') {
      ToastAndroid.show('Enter Weeks In Veg.', ToastAndroid.BOTTOM);
      return;
    } else if (flowerDays === '') {
      ToastAndroid.show('Enter Days In Flower.', ToastAndroid.BOTTOM);
      return;
    }
    const w = Number(wattage);
    const vw = Number(vegWeeks);
    const fd = Number(flowerDays);
    let yields = 0;

    // For wattage up to 1000
    if (w <= 1000) {
      yields = w * (vw + fd / 7) * 0.06;
    } else {
      yields = 1000 * (vw + fd / 7) * 0.2;

      const extraWattage = Math.max(0, w + 1200);
      const extraYield =
        (extraWattage / 600) * (1000 * (vw + fd / 7) * 0.06) * 0.35; // Adjust fraction as needed
      yields += extraYield;
    }

    setResult(yields);
  };
  const textColor = {color: theme.library.textColor};
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.yield.Wattage}
        </Text>
        <TextInput
          style={[styles.input, textInputStyle]}
          keyboardType="numeric"
          value={wattage}
          onChangeText={setWattage}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.yield.VegWeeks}
        </Text>
        <TextInput
          style={[styles.input, textInputStyle]}
          keyboardType="numeric"
          value={vegWeeks}
          onChangeText={setVegWeeks}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.yield.FlowerDays}
        </Text>
        <TextInput
          style={[styles.input, textInputStyle]}
          keyboardType="numeric"
          value={flowerDays}
          onChangeText={setFlowerDays}
        />
      </View>
      <CalculatorButton
        theme={theme}
        onPress={calculateYield}
        message={
          translation && translation.calculators.calculators.yield.Button
        }
      />

      <Text style={[styles.result, textColor]}>
        {result
          ? `${
              translation && translation.calculators.calculators.yield.Est
            } ${result} ${
              translation && translation.calculators.calculators.yield.Grams
            }`
          : ''}
      </Text>
    </View>
  );
};

export default YeildCalc;

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
