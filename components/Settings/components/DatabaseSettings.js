import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DatabaseOptions from './DatabaseOptions';

const DatabaseSettings = ({
  translation,
  deleteStates,
  setDeleteStates,
  setShowStrainsWindow,
  icons,
  setConfirmDeleteDatabase,
  colors,
}) => {
  const backgroundColor = {
    backgroundColor: colors.settings.list.backgroundColor,
    color: colors.settings.list.textColor,
  };
  const textColor = {
    color: colors.settings.list.textColor,
  };
  return (
    <View>
      <Text style={[styles.heading, backgroundColor]}>
        {translation.settings && translation.settings.settings.HeaderText}
      </Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() => {
          setShowStrainsWindow(true);
        }}>
        <View style={styles.optionRow}>
          <Text style={[styles.optionLinkText, textColor]}>
            View All Strains
          </Text>
          <Image style={styles.arrowImage} source={icons.others.core[1]} />
        </View>
      </TouchableOpacity>
      <View style={styles.optionCol}>
        <TouchableOpacity
          style={styles.link}
          onPress={() => {
            setConfirmDeleteDatabase(true);
          }}>
          <Text style={[styles.optionLinkText, textColor]}>
            {translation.settings && translation.settings.settings.EraseAllData}
          </Text>
          <Image style={styles.arrowImage} source={icons.others.core[1]} />
        </TouchableOpacity>

        <DatabaseOptions
          deleteStates={deleteStates}
          setDeleteStates={setDeleteStates}
        />
      </View>
    </View>
  );
};

export default DatabaseSettings;

const styles = StyleSheet.create({
  container: {aligItems: 'center', justifyContent: 'center'},

  heading: {
    padding: 10,
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    height: 44,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  optionCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  optionTitle: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
  },
  optionLinkText: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    flex: 1,
  },
  link: {flexDirection: 'row', alignItems: 'center'},
  arrowImage: {width: 12, height: 12},
  databaseOptions: {flexDirection: 'row', margin: 15, alignItems: 'center'},
  databaseOptionText: {flex: 1},
});
