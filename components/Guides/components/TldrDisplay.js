import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TldrDisplay = ({theme, list, translation}) => {
  const textColor = {color: theme.library.textColor};
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.header, textColor]}>
          {translation.guides && translation.guides.TlDr}
        </Text>
      </View>

      <View style={styles.subContainer}>
        {list.map((item, index) => (
          <View key={index} style={styles.tldr}>
            <Text style={[styles.text, textColor]}>- {item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TldrDisplay;

const styles = StyleSheet.create({
  container: {alignItems: 'left', marginTop: 10},
  header: {fontSize: 25, marginTop: 10},
  subContainer: {
    alignItems: 'left',

    marginTop: 20,
    minWidth: 220,
    minHeight: 220,
  },
  text: {fontSize: 18, margin: 5, fontFamily: 'Poppins-Regular'},
});
