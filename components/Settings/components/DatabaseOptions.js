import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';

const DatabaseOptions = ({deleteStates, setDeleteStates}) => {
  return (
    <View style={styles.container}>
      <View style={styles.databaseOptions}>
        <Text style={styles.databaseOptionText}>Delete Strains</Text>
        <Switch
          value={deleteStates.strains}
          style={styles.databaseSwitch}
          onChange={value => {
            setDeleteStates(prevState => ({
              ...prevState,
              strains: !prevState.strains,
            }));
          }}
        />
      </View>
      <View style={styles.databaseOptions}>
        <Text style={styles.databaseOptionText}>Delete Environments</Text>
        <Switch
          value={deleteStates.envs}
          style={styles.databaseSwitch}
          onChange={value => {
            setDeleteStates(prevState => ({
              ...prevState,
              envs: !prevState.envs,
            }));
          }}
        />
      </View>
      <View style={styles.databaseOptions}>
        <Text style={styles.databaseOptionText}>Delete Plants</Text>
        <Switch
          value={deleteStates.plants}
          style={styles.databaseSwitch}
          onChange={value => {
            setDeleteStates(prevState => ({
              ...prevState,
              plants: !prevState.plants,
            }));
          }}
        />
      </View>
      <View style={styles.databaseOptions}>
        <Text style={styles.databaseOptionText}>Delete Options</Text>
        <Switch
          value={deleteStates.options}
          style={styles.databaseSwitch}
          onChange={value => {
            setDeleteStates(prevState => ({
              ...prevState,
              options: !prevState.options,
            }));
          }}
        />
      </View>
      <View style={styles.databaseOptions}>
        <Text style={styles.databaseOptionText}>Delete Plant Journals</Text>
        <Switch
          value={deleteStates.plantJournal}
          style={styles.databaseSwitch}
          onChange={value => {
            setDeleteStates(prevState => ({
              ...prevState,
              plantJournal: !prevState.plantJournal,
            }));
          }}
        />
      </View>
      <View style={styles.databaseOptions}>
        <Text style={styles.databaseOptionText}>
          Delete Environment Journals
        </Text>
        <Switch
          value={deleteStates.envJournal}
          style={styles.databaseSwitch}
          onChange={value => {
            setDeleteStates(prevState => ({
              ...prevState,
              envJournal: !prevState.envJournal,
            }));
          }}
        />
      </View>
    </View>
  );
};

export default DatabaseOptions;

const styles = StyleSheet.create({
  container: {margin: 5, height: 350},

  heading: {
    padding: 10,
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    height: 44,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  optionCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
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
  databaseOptions: {
    flexDirection: 'row',
    marginVertical: 11,
    alignItems: 'center',
  },
  databaseOptionText: {flex: 1},
});
