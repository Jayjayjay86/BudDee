import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import EnvSelector from './EnvSelector';

const NewEnvActionList = ({
  icons,
  translation,
  setSelectedEnv,
  envs,
  colors,
}) => {
  return (
    <View style={styles.container}>
      <EnvSelector
        translation={translation}
        icons={icons}
        setSelectedEnv={setSelectedEnv}
        envs={envs}
        colors={colors}
        style={styles.EnvOption}
      />
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

export default NewEnvActionList;

const styles = StyleSheet.create({
  container: {height: '100%', margin: 15, marginTop: 20},

  EnvOption: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 14,
  },
  EnvOptionText: {
    padding: 5,
    fontSize: 25,
  },
  optionImage: {width: 30, height: 30},
});
