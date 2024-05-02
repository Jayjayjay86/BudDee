import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Toolbox = ({icons, pressButton, translation, colors}) => {
  const buttonStyles = {
    backgroundColor: colors.home.toolbox.buttonBackgroundColor,
    borderColor: colors.home.toolbox.buttonBorderColor,
  };
  const toolBoxStyles = {
    borderBottomColor: colors.home.toolbox.borderColor,
    backgroundColor: colors.core.background,
  };
  const textColor = {color: colors.home.toolbox.textColor};
  return (
    <View style={[styles.toolbox, toolBoxStyles]}>
      <Text style={[styles.toolboxHeader, textColor]}>
        {translation.home && translation.home.toolbox.HeaderText}
      </Text>
      <View style={styles.icons}>
        <View style={styles.iconButton}>
          <TouchableOpacity
            onPress={() => {
              pressButton('add_actions');
            }}>
            <View style={[styles.imageContainer, buttonStyles]}>
              <Image style={styles.image} source={icons.buttons.toolbox[2]} />
            </View>

            <Text style={[styles.iconLabel, textColor]}>
              {translation.home && translation.home.toolbox.New}
            </Text>
            <Text style={[styles.iconLabel, textColor]}>
              {translation.home && translation.home.toolbox.Action}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconButton}>
          <TouchableOpacity
            onPress={() => {
              pressButton('add_plants');
            }}
            style={styles.icon}>
            <View style={[styles.imageContainer, buttonStyles]}>
              <Image style={styles.image} source={icons.buttons.toolbox[0]} />
            </View>
            <Text style={[styles.iconLabel, textColor]}>
              {translation.home && translation.home.toolbox.New}
            </Text>
            <Text style={[styles.iconLabel, textColor]}>
              {translation.home && translation.home.toolbox.Plants}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconButton}>
          <TouchableOpacity
            onPress={() => {
              pressButton('add_envs');
            }}
            style={styles.icon}>
            <View style={[styles.imageContainer, buttonStyles]}>
              <Image style={styles.image} source={icons.buttons.toolbox[1]} />
            </View>
            <Text style={[styles.iconLabel, textColor]}>
              {translation.home && translation.home.toolbox.New}
            </Text>
            <Text style={[styles.iconLabel, textColor]}>
              {translation.home && translation.home.toolbox.Environment}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconButton}>
          <TouchableOpacity
            onPress={() => {
              pressButton('toolbox');
            }}
            style={styles.icon}>
            <View style={[styles.imageContainer, buttonStyles]}>
              <Image style={styles.image} source={icons.buttons.toolbox[3]} />
            </View>
            <Text style={[styles.iconLabel, textColor]}>
              {translation.home && translation.home.toolbox.More}
            </Text>
            <Text style={[styles.iconLabel, textColor]}>
              {translation.home && translation.home.toolbox.Tools}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Toolbox;
const styles = StyleSheet.create({
  toolbox: {
    flexDirection: 'column',
    width: '100%',
    padding: 10,
    height: 'auto',
    marginVertical: 5,
    justifyContent: 'center',
    textAlign: 'center',
    borderBottomWidth: 7,
  },
  toolboxHeader: {fontFamily: 'Poppins-Regular', fontSize: 17},
  icons: {marginLeft: 10, flexDirection: 'row', justifyContent: 'space-around'},
  icon: {
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  image: {width: 40, height: 40},
  imageContainer: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
