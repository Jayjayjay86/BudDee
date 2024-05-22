import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CurrentLightsDisplay = ({
  translation,
  lightsArray,
  colors,
  icons,
  HandleRemoveLight,
  setLightsArray,
}) => {
  const textStyles = {color: colors.envs.new.nameInputBorder};
  const inputStyles = {backgroundColor: colors.envs.new.backgroundColor};

  return (
    <View style={styles.container}>
      {lightsArray.length > 0 &&
        lightsArray.map((item, index) => (
          <View key={index} style={[styles.container, inputStyles]}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerName}>Name:</Text>
              <View style={styles.innerContainer}>
                <Text style={styles.headerText}>wattage:</Text>
                <Text style={styles.headerText}>Amount:</Text>
              </View>
              <View style={styles.deleteContainer}>
                <TouchableOpacity
                  onPress={() => {
                    HandleRemoveLight(index);
                  }}>
                  <Image
                    style={styles.deleteImage}
                    source={icons.others.misc[8]}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.lightContainer}>
              <Text style={styles.lightName}>{item.name}</Text>
              <View style={styles.innerContainer}>
                <Text style={styles.text}>{item.wattage}</Text>
                <Text style={styles.text}>{item.amount}</Text>
              </View>
            </View>
          </View>
        ))}
    </View>
  );
};

export default CurrentLightsDisplay;

const styles = StyleSheet.create({
  deleteImage: {width: 16, height: 16},
  container: {
    flexDirection: 'column',
    margin: 4,
    padding: 10,
    borderRadius: 5,
  },
  deleteContainer: {},
  detailContainer: {flexDirection: 'column'},
  headerContainer: {
    flexDirection: 'row',
    marginTop: 1,
    padding: 2,
    borderRadius: 5,
    marginLeft: 5,
  },
  headerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 9,
    textAlign: 'center',
  },
  headerName: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 9,
  },
  lightName: {flex: 1, fontFamily: 'Poppins-Regular', fontSize: 12},
  lightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 1,
    padding: 2,
    borderRadius: 5,
  },
  innerContainer: {flexDirection: 'row', gap: 5, marginRight: 5},
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    minWidth: 31,
  },
});
