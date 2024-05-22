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

const ViewStrains = ({
  isVisible,
  setIsVisible,
  strains,
  icons,
  theme,
  navigation,
  translation,
  setShowCreateWindow,
}) => {
  const pressName = () => {};
  const pressDelete = () => {};
  return (
    <Modal transparent={true} style={styles.container} visible={isVisible}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={theme}
            navigation={navigation}
            message="Available Strains"
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />

          {strains &&
            strains.length > 0 &&
            strains.map((strainItem, index) => (
              <View key={index} style={styles.strainItem}>
                <TouchableOpacity
                  style={styles.name}
                  onPress={() => {
                    pressName();
                  }}>
                  <Text style={styles.nameText}>{strainItem.strainName}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bin}
                  onPress={() => {
                    pressDelete();
                  }}>
                  <Image
                    style={styles.binImage}
                    source={icons.others.misc[8]}
                  />
                </TouchableOpacity>
              </View>
            ))}
          <CreateNewStrainButton
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
