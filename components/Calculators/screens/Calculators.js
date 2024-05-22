import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import Header from '../../../core/components/Headers/Header';
import ElecCalc from '../components/ElecCalc';
import Co2Calc from '../components/Co2Calc';
import YeildCalc from '../components/YeildCalc';
import LightingCalc from '../components/LightingCalc';
import WaterCalc from '../components/WaterCalc';

const Calculators = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [activeCalc, setActiveCalc] = useState(null);

  const handleToggleCalc = calc => {
    setActiveCalc(activeCalc === calc ? null : calc);
  };
  const textColor = {
    color: theme.library.textColor,
  };
  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <Header
        icons={icons}
        colors={theme}
        navigation={navigation}
        message={
          translation ? translation.calculators.calculators.HeaderText : ''
        }
      />
      <ScrollView style={styles.calcList}>
        <TouchableOpacity
          style={styles.link}
          onPress={() => handleToggleCalc('co2')}>
          <Text style={[styles.calcLabel, textColor]}>
            {translation && translation.calculators.calculators.Co2}
          </Text>
          <Image
            style={styles.arrow}
            source={icons.others.misc[activeCalc === 'co2' ? 4 : 3]}
          />
        </TouchableOpacity>
        {activeCalc === 'co2' && (
          <Co2Calc theme={theme} translation={translation} />
        )}

        <TouchableOpacity
          style={styles.link}
          onPress={() => handleToggleCalc('yield')}>
          <Text style={[styles.calcLabel, textColor]}>
            {translation && translation.calculators.calculators.Final}
          </Text>
          <Image
            style={styles.arrow}
            source={icons.others.misc[activeCalc === 'yield' ? 4 : 3]}
          />
        </TouchableOpacity>
        {activeCalc === 'yield' && (
          <YeildCalc theme={theme} translation={translation} />
        )}

        <TouchableOpacity
          style={styles.link}
          onPress={() => handleToggleCalc('light')}>
          <Text style={[styles.calcLabel, textColor]}>
            {translation && translation.calculators.calculators.Lighting}
          </Text>
          <Image
            style={styles.arrow}
            source={icons.others.misc[activeCalc === 'light' ? 4 : 3]}
          />
        </TouchableOpacity>
        {activeCalc === 'light' && (
          <LightingCalc theme={theme} translation={translation} />
        )}

        <TouchableOpacity
          style={styles.link}
          onPress={() => handleToggleCalc('water')}>
          <Text style={[styles.calcLabel, textColor]}>
            {translation && translation.calculators.calculators.Water}
          </Text>
          <Image
            style={styles.arrow}
            source={icons.others.misc[activeCalc === 'water' ? 4 : 3]}
          />
        </TouchableOpacity>
        {activeCalc === 'water' && (
          <WaterCalc theme={theme} translation={translation} />
        )}

        <TouchableOpacity
          style={styles.link}
          onPress={() => handleToggleCalc('elec')}>
          <Text style={[styles.calcLabel, textColor]}>
            {translation && translation.calculators.calculators.Electric}
          </Text>
          <Image
            style={styles.arrow}
            source={icons.others.misc[activeCalc === 'elec' ? 4 : 3]}
          />
        </TouchableOpacity>
        {activeCalc === 'elec' && (
          <ElecCalc theme={theme} translation={translation} />
        )}
      </ScrollView>
    </View>
  );
};

export default Calculators;

const styles = StyleSheet.create({
  container: {height: '100%'},
  calcLabel: {fontSize: 26, fontFamily: 'Poppins-Regular', flex: 1},
  calcList: {margin: 10},
  arrow: {width: 15, height: 15, margin: 5},
  link: {flexDirection: 'row', alignItems: 'center', marginVertical: 6},
});
