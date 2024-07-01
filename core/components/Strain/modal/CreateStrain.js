import {Modal, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import ModalHeader from '../../../../core/components/Headers/ModalHeader';
import {strainObject} from '../../../../core/constants/Misc';
import {createStrain} from '../../../../database/strains';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../constants/Styles';
import StrainNameInput from '../components/StrainNameInput';
import StrainSeedName from '../components/StrainSeedName';
import StrainFlowerInput from '../components/StrainFlowerInput';

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

  const HandleSaveStrain = async () => {
    console.log('creating', strain);
    const newStrain = await createStrain(strain);
    console.log(newStrain);
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
            message={translation.core && translation.core.strain.Create}
            actionLabel={
              translation.actions && translation.actions.newAction.ActionLabel
            }
            action={HandleSaveStrain}
            handleGoBack={HandleGoBAck}
          />

          <View style={styles.innerStyle}>
            <StrainNameInput
              colors={colors}
              setStrain={setStrain}
              strain={strain}
              translation={translation}
            />
            <StrainSeedName
              colors={colors}
              setStrain={setStrain}
              strain={strain}
              translation={translation}
            />
            <StrainFlowerInput
              colors={colors}
              setStrain={setStrain}
              strain={strain}
              translation={translation}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateStrain;

const styles = StyleSheet.create({
  innerStyle: {margin: 15, justifyContent: 'center'},
  container: {alignItems: 'center', justifyContent: 'center'},
  header: {},
  headerText: {},
  strainItem: {margin: 10, flexDirection: 'row', alignItems: 'center'},
  name: {flex: 1},
  nameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
    justifyContent: 'center',
  },
  bin: {},
  binImage: {width: 45, height: 45},
});
