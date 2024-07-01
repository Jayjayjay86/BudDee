import {Modal, StyleSheet, View} from 'react-native';
import React from 'react';
import ModalHeader from '../../../../core/components/Headers/ModalHeader';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../constants/Styles';

import ActionChoice from '../../../../components/Actions/components/ActionChoice';

const ViewStrains = ({
  isVisible,
  setIsVisible,
  icons,
  theme,
  navigation,
  translation,
}) => {
  const pressAction = action => {
    if (action === 0) {
      navigation.navigate('add_plant_action');
    } else {
      navigation.navigate('add_envs_journal');
    }
  };

  return (
    <Modal transparent={true} style={styles.container} visible={isVisible}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={theme}
            navigation={navigation}
            message="New Actions"
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />
          <View style={styles.innerStyle}>
            <ActionChoice
              translation={translation}
              setPlantOrEnvironment={pressAction}
            />
          </View>
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
