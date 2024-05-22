import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import Header from '../../../core/components/Headers/Header';

const Charts = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [imageStatus, setImageStatus] = useState({
    vpd: false,
    vpdChart: false,
    ph: false,
  });
  const toggleImageStatus = key => {
    setImageStatus(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  const textColor = {color: theme.core.textColor};
  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <Header
        icons={icons}
        colors={theme}
        navigation={navigation}
        message={
          translation.calculators
            ? translation.calculators.charts.HeaderText
            : ''
        }
      />

      <View style={styles.links}>
        <TouchableOpacity
          style={styles.link}
          onPress={() => toggleImageStatus('ph')}>
          <Text style={[styles.linkText, textColor]}>
            {translation && translation.calculators.charts.Ph}
          </Text>
          {imageStatus.ph ? (
            <>
              <Image style={styles.arrow} source={icons.others.misc[4]} />
            </>
          ) : (
            <>
              <Image style={styles.arrow} source={icons.others.misc[3]} />
            </>
          )}
        </TouchableOpacity>
        {imageStatus.ph && (
          <Image style={styles.image} source={icons.others.core[6]} />
        )}
        <TouchableOpacity
          style={styles.link}
          onPress={() => toggleImageStatus('vpdChart')}>
          <Text style={[styles.linkText, textColor]}>
            {translation && translation.calculators.charts.Vpd}
          </Text>
          {imageStatus.vpdChart ? (
            <>
              <Image style={styles.arrow} source={icons.others.misc[4]} />
            </>
          ) : (
            <>
              <Image style={styles.arrow} source={icons.others.misc[3]} />
            </>
          )}
        </TouchableOpacity>
        {imageStatus.vpdChart && (
          <Image style={styles.image} source={icons.others.core[5]} />
        )}
        <TouchableOpacity
          style={styles.link}
          onPress={() => toggleImageStatus('vpd')}>
          <Text style={[styles.linkText, textColor]}>
            {translation && translation.calculators.charts.VpdExplain}
          </Text>
          {imageStatus.vpd ? (
            <>
              <Image style={styles.arrow} source={icons.others.misc[4]} />
            </>
          ) : (
            <>
              <Image style={styles.arrow} source={icons.others.misc[3]} />
            </>
          )}
        </TouchableOpacity>
        {imageStatus.vpd && (
          <Image style={styles.image} source={icons.others.core[4]} />
        )}
      </View>
    </View>
  );
};

export default Charts;

const styles = StyleSheet.create({
  container: {height: '100%'},
  image: {width: 350, height: 350, alignSelf: 'center'},
  links: {margin: 15},
  link: {flexDirection: 'row', justifyContent: 'center'},
  linkText: {fontSize: 25, fontFamily: 'Poppins-Regular', flex: 1},
  arrow: {width: 15, height: 15, margin: 5},
});
