import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ModalHeader from '../../../../core/components/Headers/ModalHeader';

import CreateNewStrainButton from '../components/CreateNewStrainButton';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../constants/Styles';
import {removeStrain} from '../../../../database/strains';

const ViewStrains = ({
  isVisible,
  setIsVisible,
  strains,
  icons,
  theme,
  navigation,
  translation,
  setShowCreateWindow,
  setIsStrainDetailsVisible,
  setSelectedStrain,
  deletedStrain,
}) => {
  const pressName = item => {
    setSelectedStrain(item);
    setIsStrainDetailsVisible(true);
  };
  const pressDelete = async strainId => {
    await removeStrain(strainId);
    deletedStrain();
  };
  console.log(strains);
  return (
    <Modal transparent={true} style={styles.container} visible={isVisible}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={theme}
            navigation={navigation}
            message={translation.core && translation.core.strain.Available}
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />
          <View style={styles.innerStyle}>
            {strains &&
              strains.length > 0 &&
              strains.map((strainItem, index) => (
                <View key={index} style={styles.strainItem}>
                  <TouchableOpacity
                    style={styles.strainName}
                    onPress={() => {
                      pressName(strainItem);
                    }}>
                    <Text style={styles.nameText}>{strainItem.strainName}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.bin}
                    onPress={() => {
                      pressDelete(strainItem.id);
                    }}>
                    <Image
                      style={styles.binImage}
                      source={icons.others.misc[8]}
                    />
                  </TouchableOpacity>
                </View>
              ))}
          </View>

          <CreateNewStrainButton
            colors={theme}
            translation={translation}
            icons={icons}
            theme={theme}
            handleCreateStrain={() => {
              setShowCreateWindow(true);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ViewStrains;

const styles = StyleSheet.create({
  innerStyle: {margin: 15},
  container: {},
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
