import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import ModalHeader from '../../../../core/components/Headers/ModalHeader';
import {strainObject} from '../../../../core/constants/Misc';
import {createStrain} from '../../../../database/strains';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../constants/Styles';

const CreateStrain = ({
  navigation,
  translation,
  colors,
  isModalVisible,
  setIsModalVisible,
  icons,
  strainCreated,
}) => {
  const [strain, setStrain] = useState(strainObject);

  const HandleSaveStrain = () => {
    createStrain(strain);
    strainCreated();
    setIsModalVisible(false);
  };
  const HandleGoBAck = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      transparent={true}
      visible={isModalVisible}
      animationType="slide"
      style={styles.container}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={colors}
            navigation={navigation}
            message="Create Strain"
            actionLabel={
              translation.actions && translation.actions.newAction.ActionLabel
            }
            action={HandleSaveStrain}
            handleGoBack={HandleGoBAck}
          />
          <View>
            <View>
              <Text>Strain Name</Text>
              <TextInput
                onChangeText={value => {
                  setStrain(prevState => ({...strain, strainName: value}));
                }}
              />
            </View>
            <View>
              <Text>SeedBank Name</Text>
              <TextInput
                onChangeText={value => {
                  setStrain(prevState => ({...strain, seedBankName: value}));
                }}
              />
            </View>
            <View>
              <Text>Flowering Time (days)</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={value => {
                  setStrain(prevState => ({...strain, floweringTime: value}));
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateStrain;

const styles = StyleSheet.create({});
