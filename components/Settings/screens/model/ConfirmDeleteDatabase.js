import {StyleSheet, Text, Modal, View, ToastAndroid} from 'react-native';
import React from 'react';
import DeleteButton from '../../../../core/components/DeleteButton';
import ModalHeader from '../../../../core/components/Headers/ModalHeader';
import {destroyAllStrains} from '../../../../database/strains';
import {destroyEnvironmentJournal} from '../../../../database/environmentJournal';
import {destroyEnvironments} from '../../../../database/environments';
import {destroyOptions} from '../../../../database/options';
import {destroyPlantJournal} from '../../../../database/plantJournal';
import {destroyPlants} from '../../../../database/plants';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../../core/constants/Styles';

const ConfirmDeleteDatabase = ({
  translation,
  isVisible,
  setIsVisible,
  HandleConfirmDelete,
  theme,
  icons,
  navigation,
  deleteStates,
  setDeleteStates,
}) => {
  const HandleDelete = async () => {
    try {
      if (deleteStates.strains) {
        await destroyAllStrains();
      }
      if (deleteStates.envJournal) {
        await destroyEnvironmentJournal();
      }
      if (deleteStates.envs) {
        await destroyEnvironments();
      }
      if (deleteStates.options) {
        await destroyOptions();
      }
      if (deleteStates.plantJournal) {
        await destroyPlantJournal();
      }
      if (deleteStates.plants) {
        await destroyPlants();
      }

      ToastAndroid.show('Database Cleared', ToastAndroid.BOTTOM);
    } catch (error) {
      ToastAndroid.show('Error', ToastAndroid.BOTTOM);
      console.error(error);
    }
  };
  const textColor = {color: theme.core.textColor};
  const background = {backgroundColor: theme.core.lightBorder};
  const plantBackground = {backgroundColor: theme.core.plantGreen};
  const border = {borderColor: theme.core.darkBorder};
  return (
    <Modal transparent={true} style={styles.container} visible={isVisible}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={theme}
            navigation={navigation}
            message="Delete"
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />
          <View style={styles.centerView}>
            <Text style={styles.requestText}>
              {translation.core && translation.plants.plant.DoYou}{' '}
            </Text>
            <View style={styles.markers}>
              {deleteStates.strains && (
                <Text style={styles.marker}>Strains</Text>
              )}
              {deleteStates.envJournal && (
                <Text style={styles.marker}>Environment Journals</Text>
              )}
              {deleteStates.envs && (
                <Text style={styles.marker}>Environments</Text>
              )}
              {deleteStates.options && (
                <Text style={styles.marker}>Options</Text>
              )}
              {deleteStates.plantJournals && (
                <Text style={styles.marker}>Plant Journals</Text>
              )}
              {deleteStates.plants && <Text style={styles.marker}>Plants</Text>}
            </View>
          </View>

          <DeleteButton onPress={HandleDelete} theme={theme} />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDeleteDatabase;

const styles = StyleSheet.create({
  markers: {
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    backgroundColor: 'rgba(200,200,200,0.6)',
    marginVertical: 5,
    paddingTop: 6,
    paddingHorizontal: 25,

    borderWidth: 1,
    borderRadius: 10,
  },
  centerView: {flex: 1},
  container: {height: '100%'},
  confirm: {marginTop: 20},
  confirmText: {
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    borderWidth: 1,
    marginTop: 130,
    marginBottom: 40,
  },
  cancel: {},
  request: {marginTop: 60, flex: 1},
  requestText: {
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  name: {
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 40,
  },
  plants: {
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    borderWidth: 1,
  },
});
