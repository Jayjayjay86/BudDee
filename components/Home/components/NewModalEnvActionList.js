import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const NewModalEnvActionList = ({icons, translation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => {}} style={styles.EnvOption}>
        <Image
          style={styles.optionImage}
          source={icons.buttons.guides.others[13]}
        />
        <Text style={styles.EnvOptionText}>
          {translation.actions && translation.actions.newAction.WaterRoom}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.EnvOption}>
        <Image
          style={styles.optionImage}
          source={icons.buttons.guides.others[4]}
        />
        <Text style={styles.EnvOptionText}>
          {translation.actions && translation.actions.newAction.MakeNutrient}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.EnvOption}>
        <Image
          style={styles.optionImage}
          source={icons.buttons.guides.others[0]}
        />
        <Text style={styles.EnvOptionText}>
          {translation.actions && translation.actions.newAction.MixSolution}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.EnvOption}>
        <Image
          style={styles.optionImage}
          source={icons.buttons.guides.others[4]}
        />
        <Text style={styles.EnvOptionText}>
          {translation.actions && translation.actions.newAction.DefoliateRoom}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.EnvOption}>
        <Image
          style={styles.optionImage}
          source={icons.buttons.guides.others[11]}
        />
        <Text style={styles.EnvOptionText}>
          {translation.actions && translation.actions.newAction.CleanRoom}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.EnvOption}>
        <Image
          style={styles.optionImage}
          source={icons.buttons.guides.others[14]}
        />
        <Text style={styles.EnvOptionText}>
          {translation.actions &&
            translation.actions.newAction.ChangeLightSetting}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.EnvOption}>
        <Image
          style={styles.optionImage}
          source={icons.buttons.guides.others[8]}
        />
        <Text style={styles.EnvOptionText}>
          {translation.actions && translation.actions.newAction.FlushRoom}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.EnvOption}>
        <Image
          style={styles.optionImage}
          source={icons.buttons.guides.others[12]}
        />
        <Text style={styles.EnvOptionText}>
          {translation.actions && translation.actions.newAction.HarvestRoom}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.EnvOption}>
        <Image
          style={styles.optionImage}
          source={icons.buttons.guides.others[7]}
        />
        <Text style={styles.EnvOptionText}>
          {translation.actions && translation.actions.newAction.DestroyRoom}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.EnvOption}>
        <Image
          style={styles.optionImage}
          source={icons.buttons.guides.others[14]}
        />
        <Text style={styles.EnvOptionText}>
          {translation.actions && translation.actions.newAction.Other}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewModalEnvActionList;

const styles = StyleSheet.create({
  formContainer: {},
  choiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
  choiceLink: {},
  choiceTextPlants: {
    padding: 5,
    fontSize: 20,
    backgroundColor: 'rgba(100,100,100,0.2)',
    borderRightWidth: 1,
  },
  choiceTextEnvs: {
    padding: 5,
    fontSize: 20,
    backgroundColor: 'rgba(100,100,100,0.2)',
    borderColor: 'rgba(50,50,50,0.4)',
    borderLeftWidth: 1,
  },
  choiceTextDivide: {fontSize: 25},
  EnvOption: {
    margin: 10,

    alignItems: 'center',
    flexDirection: 'row',
  },
  EnvOptionText: {
    padding: 5,
    fontSize: 17,
  },
  optionImage: {width: 30, height: 30},
});
