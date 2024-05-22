import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../../core/constants/Styles';
import ModalHeader from '../../../../core/components/Headers/ModalHeader';
import ActionChoice from '../../../Actions/components/ActionChoice';
import NewPlantActionList from '../../../Actions/components/NewPlantActionList';
import NewEnvActionList from '../../../Actions/components/NewEnvActionList';
import NewModalEnvActionList from '../../components/NewModalEnvActionList';
import ModalActionChoice from '../../components/ModalActionChoice';

const ActionChoices = ({
  isVisible,
  setIsVisible,
  date,
  icons,
  colors,
  navigation,
  translation,
  isDarkMode,
}) => {
  console.log('shitttt', date);
  const [plantOrEnvironment, setPlantOrEnvironment] = useState('plant');
  const [selectedPlant, setSelectedPlant] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [actionObject, setActionObject] = useState();
  const [actionOptions, setActionOptions] = useState('');

  return (
    <Modal style={styles.container} visible={isVisible} transparent={true}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={colors}
            navigation={navigation}
            message="Select Action"
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />
          <ModalActionChoice
            translation={translation}
            setPlantOrEnvironment={setPlantOrEnvironment}
          />
          {plantOrEnvironment === 'plant' && (
            <NewPlantActionList
              isDarkMode={isDarkMode}
              datePickerVisible={datePickerVisible}
              setDatePickerVisible={setDatePickerVisible}
              actionObject={{date: date}}
              setActionObject={setActionObject}
              translation={translation}
              icons={icons}
              theme={colors}
              setSelectedPlant={setSelectedPlant}
              setActionOptions={setActionOptions}
            />
          )}
          {plantOrEnvironment === 'env' && (
            <NewModalEnvActionList translation={translation} icons={icons} />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ActionChoices;

const styles = StyleSheet.create({});
