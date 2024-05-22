import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailItem = ({value, message}) => {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{message}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  container: {height: '100%'},
  detailItems: {margin: 10, flex: 1},
  detailItem: {},
  detailLabel: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  detailValue: {fontSize: 18, fontFamily: 'Poppins-Regular'},
});
