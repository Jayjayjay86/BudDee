import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import NewBatchButton from './NewBatchButton';

const PhaseButtons = ({
  translation,
  pressNewBatchButton,
  toggleMoreInfo,
  plants,
  expandedIndex,
  icons,
  colors,
  item,
  itemIndex,
}) => {
  const textColor = {color: colors.core.textColor};
  const borderColor = {borderBottomColor: 'rgba(23,23,23,0.2)'};
  return (
    <View style={[styles.container, borderColor]} key={itemIndex}>
      <TouchableOpacity
        style={styles.envLink}
        onPress={() => {
          toggleMoreInfo(itemIndex);
        }}>
        <Text style={[styles.envName, textColor]}>{item.name}</Text>
        <NewBatchButton
          translation={translation}
          pressNewBatchButton={pressNewBatchButton}
          item={item}
        />

        <Text style={[styles.envPlantAmount, textColor]}>
          {plants
            ? plants.filter(plant => plant.environmentId === item.id).length
            : '1'}
        </Text>

        {expandedIndex === itemIndex ? (
          <>
            <Image style={styles.arrow} source={icons.others.misc[4]} />
          </>
        ) : (
          <>
            <Image style={styles.arrow} source={icons.others.misc[3]} />
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PhaseButtons;

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
  },
  envLink: {
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  envName: {
    flex: 1,
    fontSize: 22,
    marginHorizontal: 10,
    fontFamily: 'Poppins-Regular',
  },
  envPlantAmount: {
    fontSize: 22,
    marginHorizontal: 7,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  arrow: {width: 15, height: 15, marginRight: 5},
});
