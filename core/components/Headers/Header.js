import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = ({icons, colors, navigation, message, action, actionLabel}) => {
  const headerBackground = {
    backgroundColor: colors.settings.moreTools.backgroundColor,
  };
  const headerText = {
    color: colors.core.textColor,
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.container, headerBackground]}>
      <TouchableOpacity onPress={handleGoBack}>
        <Image style={styles.image} source={icons.others.core[0]} />
      </TouchableOpacity>

      <Text style={[styles.headerMessage, headerText]}>{message}</Text>
      <TouchableOpacity onPress={action}>
        <Text style={styles.actionLabel}> {actionLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    paddingRight: 20,
    paddingVertical: 10,

    alignItems: 'flex-end',
  },
  image: {width: 35, height: 35, marginLeft: 4, marginRight: 30},
  headerMessage: {fontSize: 18, fontFamily: 'Poppins-SemiBold', flex: 1},
  actionLabel: {fontSize: 15, fontFamily: 'Poppins-Bold'},
});
