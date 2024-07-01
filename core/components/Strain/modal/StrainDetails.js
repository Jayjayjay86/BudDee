import {Modal, StyleSheet, View} from 'react-native';
import React from 'react';
import ModalHeader from '../../Headers/ModalHeader';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../constants/Styles';
import StrainNameInput from '../components/StrainNameInput';
import StrainSeedName from '../components/StrainSeedName';
import StrainFlowerInput from '../components/StrainFlowerInput';
import SaveButton from '../../SaveButton';
import {updateStrain} from '../../../../database/strains';

const StrainDetails = ({
  isStrainDetailsVisible,
  setIsStrainDetailsVisible,
  navigation,
  icons,
  colors,
  selectedStrain,
  setSelectedStrain,
  translation,
}) => {
  const pressSave = () => {
    updateStrain(selectedStrain);
  };
  const alignment = {alignItems: 'left'};
  return (
    <Modal
      transparent={true}
      visible={isStrainDetailsVisible}
      animationType="slide"
      style={styles.container}>
      <View style={modalOverlayStyle}>
        <View style={[modalContainerStyle, alignment]}>
          <ModalHeader
            icons={icons}
            colors={colors}
            navigation={navigation}
            message={selectedStrain.strainName}
            handleGoBack={() => {
              setIsStrainDetailsVisible(false);
            }}
          />
          <View style={styles.innerStyle}>
            <StrainNameInput
              strain={selectedStrain}
              setStrain={setSelectedStrain}
            />
            <StrainSeedName
              strain={selectedStrain}
              setStrain={setSelectedStrain}
            />
            <StrainFlowerInput
              strain={selectedStrain}
              setStrain={setSelectedStrain}
            />
          </View>
          <SaveButton
            translation={translation}
            style={styles.saveButton}
            colors={colors}
            icons={icons}
            onpress={pressSave}
          />
        </View>
      </View>
    </Modal>
  );
};

export default StrainDetails;

const styles = StyleSheet.create({
  saveButton: {margin: 20},
  innerStyle: {margin: 15, flex: 1},
  strainItem: {margin: 10, flexDirection: 'row'},
  name: {flex: 1},
  nameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
  },
  bin: {},
  binImage: {width: 45, height: 45},
});
