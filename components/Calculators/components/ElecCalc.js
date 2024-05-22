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

const ElecCalc = ({theme, translation}) => {
  const [wattage, setWattage] = useState('');
  const [rate, setRate] = useState('');
  const [daysFlower, setDaysFlower] = useState('');
  const [weeksVeg, setWeeksVeg] = useState('');
  const [answer, setAnswer] = useState('');

  const calculateElectricity = () => {
    if (wattage === '') {
      ToastAndroid.show('Enter Wattage.', ToastAndroid.BOTTOM);
      return;
    } else if (rate === '') {
      ToastAndroid.show('Enter Rate.', ToastAndroid.BOTTOM);
      return;
    } else if (daysFlower === '') {
      ToastAndroid.show('Enter Days in Flower.', ToastAndroid.BOTTOM);
      return;
    } else if (weeksVeg === '') {
      ToastAndroid.show('Enter Weeks In Veg.', ToastAndroid.BOTTOM);
      return;
    }

    const w = Number(wattage);
    const r = Number(rate);
    const hoursFlower = Number(daysFlower) * 24; // Convert days to hours
    const hoursVeg = Number(weeksVeg) * 7 * 24; // Convert weeks to hours
    const totalHours = hoursVeg + hoursFlower;
    setAnswer(((w * totalHours) / 1000) * r);
  };
  const textColor = {color: theme.library.textColor};
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.elec.Watts}
        </Text>
        <TextInput
          style={[styles.input, textInputStyle]}
          keyboardType="numeric"
          value={wattage}
          onChangeText={value => {
            setWattage(value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.elec.Day}
        </Text>
        <TextInput
          style={[styles.input, textInputStyle]}
          keyboardType="numeric"
          value={daysFlower}
          onChangeText={value => {
            setDaysFlower(value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.elec.Week}
        </Text>
        <TextInput
          style={[styles.field, textInputStyle]}
          keyboardType="numeric"
          value={weeksVeg}
          onChangeText={value => {
            setWeeksVeg(value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.elec.Rate}
        </Text>
        <TextInput
          style={[styles.input, textInputStyle]}
          keyboardType="numeric"
          value={rate}
          onChangeText={value => {
            setRate(value);
          }}
        />
      </View>

      <CalculatorButton
        theme={theme}
        onPress={() => {
          calculateElectricity();
        }}
        message={translation && translation.calculators.calculators.elec.Button}
      />
      <Text style={[styles.result, textColor]}>
        {answer &&
          `${
            translation &&
            translation &&
            translation.calculators.calculators.elec.Answer
          } ${answer}`}
      </Text>
    </View>
  );
};

export default ElecCalc;

const styles = StyleSheet.create({
  inputContainer: {margin: 7},
  label: {fontSize: 17, fontFamily: 'Poppins-Regular'},
  result: {
    fontSize: 21,
    margin: 8,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 40,
  },
});
