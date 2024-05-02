import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

export default function LoadingIndicator({translation, colors}) {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator
        size="large"
        color={colors ? colors.ActivityIndicator : 'rgba(63,63,64,1)'}
      />
      <Text style={styles.text}>
        {translation.core && translation.core.loading.loadingIndicator.Loading}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 30, margin: 20},
});
