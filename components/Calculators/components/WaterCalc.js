import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import CalculatorButton from './CalculatorButton';
import {textInputStyle} from '../../../core/constants/Styles';

const WaterCalc = ({theme, translation}) => {
  const [vegWeeks, setVegWeeks] = useState('');
  const [flowerDays, setFlowerDays] = useState('');
  const [plantAge, setPlantAge] = useState('');
  const [numPlants, setNumPlants] = useState('');
  const [waterNeeded, setWaterNeeded] = useState('');
  const [vegNutrients, setVegNutrients] = useState('');
  const [flowerNutrients, setFlowerNutrients] = useState('');
  const [vegAnswer, setVegAnswer] = useState('');
  const [flowerAnswer, setFlowerAnswer] = useState('');
  const calculateWaterNeeded = () => {
    if (vegWeeks === '') {
      ToastAndroid.show('Enter Weeks In Veg.', ToastAndroid.BOTTOM);
      return;
    } else if (flowerDays === '') {
      ToastAndroid.show('Enter Days In Flower.', ToastAndroid.BOTTOM);
      return;
    } else if (plantAge === '') {
      ToastAndroid.show('Enter Plant Age.', ToastAndroid.BOTTOM);
      return;
    } else if (numPlants === '') {
      ToastAndroid.show('Enter Number Of Plants.', ToastAndroid.BOTTOM);
      return;
    } else if (vegNutrients === '') {
      ToastAndroid.show('Enter Veg. Nutrient Amount.', ToastAndroid.BOTTOM);
      return;
    } else if (flowerNutrients === '') {
      ToastAndroid.show('Enter Flower Nutrient Amount.', ToastAndroid.BOTTOM);
      return;
    }
    const vw = parseFloat(vegWeeks);
    const fd = parseFloat(flowerDays);
    const age = parseFloat(plantAge);
    const plants = parseFloat(numPlants);
    const vegNutrition = parseFloat(vegNutrients);
    const flowerNutrition = parseFloat(flowerNutrients);

    let waterRate = 0;
    if (age <= 14) {
      waterRate = 0.05;
    } else if (age <= 66) {
      waterRate = 0.0714;
    } else {
      waterRate = 0.02;
    }

    const totalWater = (vw * 700 + fd) * waterRate * plants;
    const totalVegNutrients = totalWater * vegNutrition;
    const totalFlowerNutrients = fd * flowerNutrition * plants;

    setWaterNeeded(totalWater.toFixed(2));
    setVegAnswer(totalVegNutrients.toFixed(2));
    setFlowerAnswer(totalFlowerNutrients.toFixed(2));
  };
  const textColor = {color: theme.library.textColor};
  return (
    <View>
      <View style={styles.input}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.water.TimeVeg}
        </Text>
        <TextInput
          keyboardType="numeric"
          value={vegWeeks}
          onChangeText={setVegWeeks}
          style={[styles.input, textInputStyle]}
        />
      </View>

      <View style={styles.input}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.water.TimeFlower}
        </Text>
        <TextInput
          keyboardType="numeric"
          value={flowerDays}
          onChangeText={setFlowerDays}
          style={[styles.input, textInputStyle]}
        />
      </View>

      <View style={styles.input}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.water.PlantAge}
        </Text>
        <TextInput
          keyboardType="numeric"
          value={plantAge}
          onChangeText={setPlantAge}
          style={[styles.input, textInputStyle]}
        />
      </View>

      <View style={styles.input}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.water.Number}
        </Text>
        <TextInput
          keyboardType="numeric"
          value={numPlants}
          onChangeText={setNumPlants}
          style={[styles.input, textInputStyle]}
        />
      </View>

      <View style={styles.input}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.water.NuteVeg}
        </Text>
        <TextInput
          keyboardType="numeric"
          value={vegNutrients}
          onChangeText={setVegNutrients}
          style={[styles.input, textInputStyle]}
        />
      </View>

      <View style={styles.input}>
        <Text style={[styles.label, textColor]}>
          {translation && translation.calculators.calculators.water.NuteFlower}
        </Text>
        <TextInput
          keyboardType="numeric"
          value={flowerNutrients}
          onChangeText={setFlowerNutrients}
          style={[styles.input, textInputStyle]}
        />
      </View>

      <CalculatorButton
        theme={theme}
        onPress={calculateWaterNeeded}
        message={'Calculate'}
      />

      <Text style={[styles.result, textColor]}>
        {waterNeeded
          ? `${translation && translation.calculators.calculators.water.Est} `
          : ''}
      </Text>
      <Text style={[styles.subResult, textColor]}>{`${waterNeeded} ${
        translation && translation.calculators.calculators.water.Liters
      }`}</Text>

      <Text style={[styles.result, textColor]}>
        {vegAnswer
          ? `${
              translation &&
              translation.calculators.calculators.water.EstNuteVeg
            } `
          : ''}
      </Text>
      <Text style={[styles.subResult, textColor]}>{`${vegAnswer} ${
        translation && translation.calculators.calculators.water.Ml
      }`}</Text>
      <Text style={[styles.result, textColor]}>
        {flowerAnswer
          ? `${
              translation &&
              translation.calculators.calculators.water.EstNuteFlower
            } `
          : ''}
      </Text>
      <Text style={[styles.subResult, textColor]}>
        {`${flowerAnswer} ${
          translation && translation.calculators.calculators.water.Ml
        }`}
      </Text>
    </View>
  );
};

export default WaterCalc;

const styles = StyleSheet.create({
  inputContainer: {margin: 7},
  label: {fontSize: 17, fontFamily: 'Poppins-Regular'},
  result: {
    fontSize: 16,

    fontFamily: 'Poppins-Light',
  },
  subResult: {
    fontSize: 18,

    fontFamily: 'Poppins-SemiBold',
  },
});
