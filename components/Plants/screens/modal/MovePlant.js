import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  modalContainerStyle,
  modalOverlayStyle,
  modalSelectorCancelStyle,
  modalSelectorCancelTextStyle,
  modalSelectorOptionContainerStyle,
  modalSelectorOptionTextStyle,
} from '../../../../core/constants/Styles';
import ModalHeader from '../../../../core/components/Headers/ModalHeader';
import ModalSelector from 'react-native-modal-selector';
import MovePlantButton from '../../components/MovePlantButton';
import {movePlants} from '../../../../database/plants';

const MovePlant = ({
  translation,
  isVisible,
  setIsVisible,
  icons,
  theme,
  navigation,
  environmentArray,
  selectedPlants,
  updatePlants,
  plants,
}) => {
  const [selectedEnvironment, setSelectedEnvironment] = useState(true);

  const HandleMovingPlants = async () => {
    try {
      let oldPlants = [];

      selectedPlants.forEach(plantId => {
        const foundPlants = plants.filter(plant => plant.id === plantId);
        oldPlants = oldPlants.concat(foundPlants);
      });

      if (oldPlants.length > 0) {
        await movePlants(oldPlants, selectedEnvironment.id);
      }
    } catch (error) {
    } finally {
      updatePlants();
      setIsVisible(false);
    }
  };

  return (
    <Modal style={styles.container} visible={isVisible} transparent={true}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={theme}
            navigation={navigation}
            message="Relocate Plants"
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />
          <View style={styles.innerStyle}>
            <Text>
              {translation.core && translation.plants.other.SelectEnvToMove}{' '}
              {selectedPlants ? selectedPlants.length : 0}{' '}
              {translation.core && translation.plants.other.PlantsInto}
            </Text>
            <ModalSelector
              overlayStyle={modalOverlayStyle}
              optionContainerStyle={modalSelectorOptionContainerStyle}
              style={styles.modalSelector}
              optionTextStyle={modalSelectorOptionTextStyle}
              cancelStyle={modalSelectorCancelStyle}
              cancelTextStyle={modalSelectorCancelTextStyle}
              cancelText={translation.core && translation.core.Cancel}
              onChange={value => {
                setSelectedEnvironment(value);
              }}
              data={environmentArray}
              keyExtractor={item => item.id}
              labelExtractor={item => item.name}
            />
          </View>

          <MovePlantButton pressMoveAction={HandleMovingPlants} />
        </View>
      </View>
    </Modal>
  );
};

export default MovePlant;

const styles = StyleSheet.create({
  innerStyle: {margin: 15, flex: 1},
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
