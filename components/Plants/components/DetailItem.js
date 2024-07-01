import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailItem = ({value, message, value2, theme}) => {
  const textColor = {color: theme.core.textColor};
  const valueColor = {color: theme.core.textColor};
  const value2Color = {color: theme.core.textColor};
  return (
    <View style={styles.detailItem}>
      <Text style={[styles.detailLabel, textColor]}>{message}</Text>
      <Text style={[styles.detailValue, valueColor]}>{value}</Text>
      {value2 ? (
        <Text style={[styles.detailValue2, value2Color]}>{value2}</Text>
      ) : (
        ''
      )}
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  detailItem: {flexDirection: 'column'},
  detailLabel: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  detailValue: {fontSize: 18, fontFamily: 'Poppins-Light'},
  detailValue2: {fontSize: 15, fontFamily: 'Poppins-light'},
});
