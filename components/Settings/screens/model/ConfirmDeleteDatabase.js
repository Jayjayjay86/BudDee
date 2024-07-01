import {StyleSheet, Text, Modal, View, ToastAndroid} from 'react-native';
import React from 'react';
import DeleteButton from '../../../../core/components/DeleteButton';
import ModalHeader from '../../../../core/components/Headers/ModalHeader';
import {destroyAllStrains} from '../../../../database/strains';
import {
  destroyEnvironmentBatches,
  destroyEnvironments,
} from '../../../../database/environments';
import {destroyOptions} from '../../../../database/options';
import {destroyPlants} from '../../../../database/plants';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../../core/constants/Styles';
import {destroyJournal} from '../../../../database/journal';

const ConfirmDeleteDatabase = ({
  translation,
  isVisible,
  setIsVisible,
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

      if (deleteStates.envs) {
        await destroyEnvironments();
      }
      if (deleteStates.options) {
        await destroyOptions();
      }
      if (deleteStates.journal) {
        await destroyJournal();
      }
      if (deleteStates.plants) {
        await destroyEnvironmentBatches();
        await destroyPlants();
      }

      ToastAndroid.show(
        translation.core && translation.settings.settings.DatabaseCleared,
        ToastAndroid.BOTTOM,
      );
      setDeleteStates({
        strains: false,
        plants: false,
        options: false,
        envs: false,
        journal: false,
      });
      setIsVisible(false);
    } catch (error) {
      ToastAndroid.show('Error', ToastAndroid.BOTTOM);
      console.error(error);
    }
  };
  const requestTextColor = {color: theme.core.textColor};
  const markerTextColor = {
    color: theme.core.textColor,
    backgroundColor: 'rgba(200,200,200,0.6)',
  };

  return (
    <Modal transparent={true} style={styles.container} visible={isVisible}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={theme}
            navigation={navigation}
            message={translation.core && translation.settings.settings.Delete}
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />
          <View style={styles.centerView}>
            <Text style={[styles.requestText, requestTextColor]}>
              {translation.core && translation.plants.plant.DoYou}{' '}
            </Text>
            <View style={styles.markers}>
              {deleteStates.strains && (
                <Text style={[styles.marker, markerTextColor]}>
                  {translation.core && translation.settings.settings.Strains}
                </Text>
              )}
              {deleteStates.envJournal && (
                <Text style={[styles.marker, markerTextColor]}>
                  {translation.core &&
                    translation.settings.settings.EnvironmentJournals}
                </Text>
              )}
              {deleteStates.envs && (
                <Text style={[styles.marker, markerTextColor]}>
                  {translation.core &&
                    translation.settings.settings.Environments}
                </Text>
              )}
              {deleteStates.options && (
                <Text style={[styles.marker, markerTextColor]}>
                  {translation.core && translation.settings.settings.Options}
                </Text>
              )}
              {deleteStates.journal && (
                <Text style={[styles.marker, markerTextColor]}>
                  {translation.core && translation.settings.settings.Journals}
                </Text>
              )}
              {deleteStates.plants && (
                <Text style={[styles.marker, markerTextColor]}>
                  {translation.core && translation.settings.settings.Plants}
                </Text>
              )}
            </View>
          </View>

          <DeleteButton
            translation={translation}
            onPress={HandleDelete}
            theme={theme}
          />
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
