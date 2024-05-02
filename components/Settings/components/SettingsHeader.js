import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SettingsHeader = ({
  icons,
  HandleSaveOptions,
  colors,
  pageHasBeenEdited,
}) => {
  const headerColors = {
    backgroundColor: colors.settings.header.backgroundColor,
    borderColor: colors.settings.header.borderColor,
  };
  const buttonBackgroundColor = {
    backgroundColor: colors.settings.save.backgroundColor,
    borderColor: colors.settings.save.borderColor,
  };
  const buttonTextColor = {color: colors.settings.save.borderColor};

  return (
    <View style={[styles.header, headerColors]}>
      <Image style={styles.logoImage} source={icons.buttons.settings[0]} />
      {pageHasBeenEdited && (
        <TouchableOpacity
          onPress={HandleSaveOptions}
          style={[styles.saveButton, buttonBackgroundColor]}>
          <Text style={[styles.saveButtonText, buttonTextColor]}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SettingsHeader;

const styles = StyleSheet.create({
  container: {
    aligItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    padding: 5,
    paddingTop: 7,
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: 20,
    borderWidth: 1,
  },
  saveButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 19,
  },
  logoImage: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  heading: {
    backgroundColor: 'rgba(200,200,200,0.8)',
    padding: 10,
    fontSize: 17,
    fontFamily: 'Poppins-Light',
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
    fontFamily: 'Poppins-Light',
    color: 'rgba(1,1,1,1)',
  },
});
