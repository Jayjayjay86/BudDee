import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const LibraryList = ({icons, translation, handleSelectGuide, colors}) => {
  const borderColorStyle = {
    borderColor: colors.core.borderColor,
    backgroundColor: colors.library.backgroundColor,
  };
  const textColor = {
    color: colors.library.textColor,
  };
  const handleImageSelection = index => {
    const iconList = [
      icons.buttons.guides.library[0],
      icons.buttons.guides.library[1],
      icons.buttons.guides.library[2],
      icons.buttons.guides.library[3],
      icons.buttons.guides.library[4],
      icons.buttons.guides.library[5],
      icons.buttons.guides.library[6],
      icons.buttons.guides.library[7],
      icons.buttons.guides.library[8],
      icons.buttons.guides.library[9],
      icons.buttons.guides.library[10],
      icons.buttons.guides.library[11],
      icons.buttons.guides.library[12],
      icons.buttons.guides.library[13],
      icons.buttons.guides.library[14],
      icons.buttons.guides.library[15],
    ];
    return iconList[index];
  };
  return (
    <View style={styles.libraryList}>
      <Text style={[styles.instruction, textColor]}>
        {translation.guides && translation.guides.library.TapMore}
      </Text>

      <ScrollView style={[styles.contentLinks, borderColorStyle]}>
        {translation.guides &&
          translation.guides.library.list.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.contentLink}>
              <TouchableOpacity
                onPress={() => {
                  handleSelectGuide(item.key);
                }}
                style={[styles.link, borderColorStyle]}>
                <Image
                  style={styles.image}
                  source={handleImageSelection(itemIndex)}
                />

                <Text style={[styles.linkText, textColor]}>{item.label}</Text>
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default LibraryList;

const styles = StyleSheet.create({
  instruction: {
    marginLeft: 20,
    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize: 12,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
    padding: 7,
    paddingBottom: 15,
    borderBottomWidth: 1,
  },
  linkText: {fontSize: 16, fontFamily: 'Poppins-Light', paddingHorizontal: 10},
  image: {width: 27, height: 27, marginHorizontal: 5},
  subHeaderText: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    margin: 10,
    marginBottom: 0,
    textAlign: 'justify',
    padding: 3,
  },
  headerText: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    margin: 10,
    marginVertical: 0,
    textAlign: 'justify',
    padding: 3,
  },
  contentLink: {margin: 6},
  contentLinks: {
    alignSelf: 'center',
    marginTop: 15,
    borderWidth: 1,
    margin: 2,
    width: '95%',
    height: '64%',
  },
  libraryList: {},
});
