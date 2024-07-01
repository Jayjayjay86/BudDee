import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const PlantHeader = ({
  isDarkMode,
  colors,
  translation,
  message,
  isSelected,
  action,
}) => {
  const headerText = {
    color: colors.core.header.textColor,
  };
  const linkStyle = {
    color: colors.core.header.textColor,
    backgroundColor: 'rgba(200,200,200,0.3)',
  };
  const headerBackground = {
    backgroundColor: colors.core.header.backgroundColor,
  };
  return (
    <View style={[styles.container, headerBackground]}>
      <Text style={[styles.text, headerText]}>{message}</Text>
      {isSelected && (
        <TouchableOpacity
          onPress={() => {
            action(true);
          }}>
          <Text style={[styles.link, linkStyle]}>
            {translation.plants && translation.plants.other.MovePlants}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PlantHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
  text: {
    fontSize: 28,
    marginHorizontal: 10,
    marginVertical: 5,
    fontFamily: 'Poppins-Regular',
    flex: 1,
  },
  link: {
    fontSize: 28,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginRight: 2,
    fontFamily: 'Poppins-Regular',
  },
});
