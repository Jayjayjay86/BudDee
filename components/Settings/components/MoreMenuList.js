import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const MoreMenuList = ({icons, colors, translation, handlePress, darkmode}) => {
  const menuItemStyle = {
    borderColor: colors.core.horizontalBreak,
  };

  const buttonStyle = {
    backgroundColor: colors.settings.moreTools.backgroundColor,
  };
  const textColor = {color: colors.core.textColor};
  return (
    <View style={styles.container}>
      <ScrollView style={styles.menuList}>
        <Text style={[styles.topHeader, textColor]}>
          {translation.settings && translation.settings.moreTools.HeaderText}
        </Text>
        <View style={[styles.menuItem, menuItemStyle]}>
          <TouchableOpacity
            style={styles.menuLink}
            onPress={value => {
              handlePress('add_actions');
            }}>
            <View style={[styles.imageContainer, buttonStyle]}>
              <Image
                style={styles.menuImage}
                source={icons.buttons.moreTools[0]}
              />
            </View>
            <Text style={[styles.menuText, textColor]}>
              {translation.settings && translation.settings.moreTools.NewAction}
            </Text>
            <Image style={styles.arrowImage} source={icons.others.core[1]} />
          </TouchableOpacity>
        </View>
        <View style={[styles.menuItem, menuItemStyle]}>
          <TouchableOpacity
            style={styles.menuLink}
            onPress={value => {
              handlePress('plant');
            }}>
            <View style={[styles.imageContainer, buttonStyle]}>
              <Image
                style={styles.menuImage}
                source={icons.buttons.moreTools[1]}
              />
            </View>
            <Text style={[styles.menuText, textColor]}>
              {translation.settings && translation.settings.moreTools.NewPlant}
            </Text>
            <Image style={styles.arrowImage} source={icons.others.core[1]} />
          </TouchableOpacity>
        </View>
        <View style={[styles.menuItem, menuItemStyle]}>
          <TouchableOpacity
            style={styles.menuLink}
            onPress={value => {
              handlePress('env');
            }}>
            <View style={[styles.imageContainer, buttonStyle]}>
              <Image
                style={styles.menuImage}
                source={icons.buttons.moreTools[2]}
              />
            </View>
            <Text style={[styles.menuText, textColor]}>
              {translation.settings &&
                translation.settings.moreTools.NewEnvironment}
            </Text>
            <Image style={styles.arrowImage} source={icons.others.core[1]} />
          </TouchableOpacity>
        </View>

        <Text style={[styles.topHeader, textColor]}>
          {translation.settings && translation.settings.moreTools.MoreTools}
        </Text>
        <View style={[styles.menuItem, menuItemStyle]}>
          <TouchableOpacity
            style={styles.menuLink}
            onPress={value => {
              handlePress('calc');
            }}>
            <View style={[styles.imageContainer, buttonStyle]}>
              <Image
                style={styles.calcImage}
                source={icons.buttons.moreTools[3]}
              />
            </View>
            <Text style={[styles.menuText, textColor]}>
              {translation.settings &&
                translation.settings.moreTools.Calculators}
            </Text>
            <Image style={styles.arrowImage} source={icons.others.core[1]} />
          </TouchableOpacity>
        </View>
        <View style={[styles.menuItem, menuItemStyle]}>
          <TouchableOpacity
            style={styles.menuLink}
            onPress={value => {
              handlePress('chart');
            }}>
            <View style={[styles.imageContainer, buttonStyle]}>
              <Image
                style={styles.menuImage}
                source={icons.buttons.moreTools[4]}
              />
            </View>
            <Text style={[styles.menuText, textColor]}>
              {translation.settings && translation.settings.moreTools.Charts}
            </Text>
            <Image style={styles.arrowImage} source={icons.others.core[1]} />
          </TouchableOpacity>
        </View>

        <Text style={[styles.topHeader, textColor]}>
          {translation.settings && translation.settings.moreTools.Guides}
        </Text>
        <View style={[styles.menuItem, menuItemStyle]}>
          <TouchableOpacity
            style={styles.menuLink}
            onPress={value => {
              handlePress('faq');
            }}>
            <View style={[styles.imageContainer, buttonStyle]}>
              <Image
                style={styles.faqImage}
                source={icons.buttons.moreTools[6]}
              />
            </View>
            <Text style={[styles.menuText, textColor]}>
              {translation.settings && translation.settings.moreTools.Faq}
            </Text>
            <Image style={styles.arrowImage} source={icons.others.core[1]} />
          </TouchableOpacity>
        </View>
        <View style={[styles.menuItem, menuItemStyle]}>
          <TouchableOpacity
            style={styles.menuLink}
            onPress={value => {
              handlePress('library');
            }}>
            <View style={[styles.imageContainer, buttonStyle]}>
              <Image
                style={styles.faqImage}
                source={icons.buttons.moreTools[5]}
              />
            </View>
            <Text style={[styles.menuText, textColor]}>
              {translation.settings && translation.settings.moreTools.Library}
            </Text>
            <Image style={styles.arrowImage} source={icons.others.core[1]} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MoreMenuList;

const styles = StyleSheet.create({
  container: {marginTop: 10},
  menuList: {margin: 10, marginVertical: 5, fontSize: 15, height: '90%'},
  menuLink: {
    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 8,
  },
  menuItem: {
    borderBottomWidth: 1,
  },

  topHeader: {marginTop: 2, fontFamily: 'Poppins-Light'},
  imageContainer: {
    width: 55,
    height: 55,

    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuImage: {
    width: 40,
    height: 40,
  },
  arrowImage: {
    width: 15,
    height: 15,
  },
  calcImage: {
    width: 30,
    height: 30,
  },
  faqImage: {
    width: 35,
    height: 35,
  },
  infoImage: {
    width: 20,
    height: 20,
  },
  menuText: {
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
    fontSize: 16,
    flex: 1,
  },
});
