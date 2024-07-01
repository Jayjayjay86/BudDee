import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CreateHeader from '../../../../core/components/Headers/CreateHeader';
import ModalHeader from '../../../../core/components/Headers/ModalHeader';
import DeleteButton from '../../../../core/components/DeleteButton';
import {colorMode} from '../../../../core/constants/Color';
import {removeEnvironment} from '../../../../database/environments';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../../core/constants/Styles';

const ConfirmDeleteEnvironment = ({
  selectedEnvironment,
  isVisible,
  setIsVisible,
  theme,
  translation,
  icons,
  navigation,
  HandleDeleteEnvironment,
}) => {
  const textColor = {color: theme.core.textColor};
  const background = {backgroundColor: theme.core.lightBorder};
  const plantBackground = {backgroundColor: theme.core.plantGreen};
  const border = {borderColor: theme.core.darkBorder};

  const [showPlants, setShowPlants] = useState(false);

  return (
    <Modal transparent={true} style={styles.container} visible={isVisible}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={theme}
            navigation={navigation}
            message={
              translation.environments &&
              translation.environments.environments.Delete
            }
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />
          <View style={styles.request}>
            <Text style={[styles.requestText, textColor]}>
              {translation.environments &&
                translation.environments.environments.DeleteEnvironment}
            </Text>
            <Text style={[styles.name, textColor, background, border]}>
              {selectedEnvironment.name}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowPlants(true);
              }}>
              <Text style={[styles.plants, textColor, plantBackground, border]}>
                {translation.environments &&
                  translation.environments.environments.Plants}{' '}
                {selectedEnvironment?.plants?.length}
              </Text>
            </TouchableOpacity>
          </View>

          <DeleteButton
            translation={translation}
            onPress={() => {
              HandleDeleteEnvironment(selectedEnvironment.id);
            }}
            theme={theme}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDeleteEnvironment;

const styles = StyleSheet.create({
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
