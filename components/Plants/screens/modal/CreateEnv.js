import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CreateHeader from '../../../../core/components/Headers/CreateHeader';
import BottomToolBar from '../../../../core/components/Headers/BottomToolBar';
import ModalSelector from 'react-native-modal-selector';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const lightTypeData = [
  {
    key: 0,
    label: 'Light Emitting Diode (LED)',
  },
  {
    key: 1,
    label: 'Compact Fluorescent Light (CFL)',
  },
  {
    key: 2,
    label: 'High Pressure Sodium (HPS)',
  },
  {
    key: 3,
    label: 'Metal Halide',
  },
  {
    key: 4,
    label: 'LEC',
  },
  {
    key: 5,
    label: 'T5',
  },
];
const modalStyle = {fontSize: 12, fontFamily: 'Poppins-Regular'};
const checkboxStyle = {
  icon: {borderColor: 'green'},
  inner: {borderWidth: 2},
  text: {fontFamily: 'Poppins-Regular'},
};

const CreateEnv = ({
  icons,
  colors,
  translation,
  navigation,
  isModalVisible,
  setIsModalVisible,
  setNewPlantObject,
  envObject,
  setEnvObject,
}) => {
  const handlePressNext = () => {
    navigation.navigate('Index');
  };
  const handleGoBack = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      style={styles.container}>
      <View style={styles.container}>
        <CreateHeader colors={colors} message={'Create Environment'} />
        <View style={styles.form}>
          <View style={styles.formInput}>
            <TextInput
              placeholder="Enter Environment Name"
              style={styles.textInput}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.inputText}>Lights:</Text>
            <View style={styles.lightSelect}>
              <ModalSelector
                selectTextStyle={modalStyle}
                cancelButtonAccessible={false}
                backdropPressToClose={true}
                animationType="fade"
                style={styles.modalSelector}
                data={lightTypeData}
                initValue="Select Type"
                onChange={type => {
                  setEnvObject({
                    ...envObject,
                    lights: {...envObject.lights, type: type},
                  });
                }}
              />
              <TextInput
                onChange={watts => {
                  setEnvObject({
                    ...envObject,
                    lights: {...envObject.lights, wattage: watts},
                  });
                }}
                keyboardType="numeric"
                placeholder="Watts"
                style={styles.textInputLights}
              />
              <TextInput
                onChange={qty => {
                  setEnvObject({
                    ...envObject,
                    lights: {...envObject.lights, quantity: qty},
                  });
                }}
                keyboardType="numeric"
                placeholder="Quantity"
                style={styles.textInputLights}
              />
            </View>
          </View>
          <View style={styles.formInput}>
            <Text style={styles.inputText}>Room Measurements:</Text>
            <View style={styles.measurementSelect}>
              <TextInput
                onChange={height => {
                  setEnvObject({
                    ...envObject,
                    roomDetails: {...envObject.roomDetails, height: height},
                  });
                }}
                keyboardType="numeric"
                placeholder="Height (M)"
                style={styles.textInputMeasurements}
              />
              <TextInput
                onChange={width => {
                  setEnvObject({
                    ...envObject,
                    roomDetails: {...envObject.roomDetails, width: width},
                  });
                }}
                keyboardType="numeric"
                placeholder="Width (M)"
                style={styles.textInputMeasurements}
              />
              <TextInput
                onChange={length => {
                  setEnvObject({
                    ...envObject,
                    roomDetails: {...envObject.roomDetails, length: length},
                  });
                }}
                keyboardType="numeric"
                placeholder="length (M)"
                style={styles.textInputMeasurements}
              />
            </View>
          </View>
          <Text style={styles.inputHeading}>Other Details:</Text>
          <View style={styles.otherDetails}>
            <View style={styles.formInput}>
              <TextInput
                onChange={height => {
                  setEnvObject({
                    ...envObject,
                    roomDetails: {...envObject.roomDetails, height: height},
                  });
                }}
                keyboardType="numeric"
                placeholder="Resting Temperature (C)"
                style={styles.textInputTemp}
              />
            </View>
            <View style={styles.formInput}>
              <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor={colors.envs.new.fill}
                unFillColor={colors.envs.new.unfill}
                text="Aircon"
                iconStyle={checkboxStyle.icon}
                innerIconStyle={checkboxStyle.inner}
                textStyle={checkboxStyle.text}
                onPress={isChecked => {
                  setEnvObject({
                    ...envObject,
                    roomDetails: {...envObject.roomDetails, aircon: isChecked},
                  });
                }}
              />
            </View>
            <View style={styles.formInput}>
              <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor={colors.envs.new.fill}
                unFillColor={colors.envs.new.unfill}
                text="Dehumidifier"
                iconStyle={checkboxStyle.icon}
                innerIconStyle={checkboxStyle.inner}
                textStyle={checkboxStyle.text}
                onPress={isChecked => {
                  setEnvObject({
                    ...envObject,
                    roomDetails: {
                      ...envObject.roomDetails,
                      dehumidifier: isChecked,
                    },
                  });
                }}
              />
            </View>
            <View style={styles.formInput}>
              <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor={colors.envs.new.fill}
                unFillColor={colors.envs.new.unfill}
                text="Sealed Room"
                iconStyle={checkboxStyle.icon}
                innerIconStyle={checkboxStyle.inner}
                textStyle={checkboxStyle.text}
                onPress={isChecked => {
                  setEnvObject({
                    ...envObject,
                    roomDetails: {
                      ...envObject.roomDetails,
                      dehumidifier: isChecked,
                    },
                  });
                }}
              />
            </View>
          </View>
        </View>
        <BottomToolBar
          colors={colors}
          icons={icons}
          backMessage={
            translation.core && translation.core.headers.bottomToolBar.Back
          }
          handleGoBack={handleGoBack}
          handlePressNext={handlePressNext}
          nextMessage={
            translation.core && translation.core.headers.bottomToolBar.Save
          }
        />
      </View>
    </Modal>
  );
};

export default CreateEnv;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  form: {flex: 1},
  textInput: {
    alignSelf: 'center',
    width: '90%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
  },
  textInputLights: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    minWidth: 60,
    textAlign: 'center',
  },
  textInputMeasurements: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    minWidth: 80,
    textAlign: 'center',
  },
  textInputTemp: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    width: 180,
    marginBottom: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  inputText: {fontSize: 16, fontFamily: 'Poppins-Regular', margin: 5},
  inputTextAdditional: {fontSize: 13, fontFamily: 'Poppins-Regular', margin: 5},
  lightSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputHeading: {textAlign: 'center', marginTop: 50, marginVertical: 10},
  measurementSelect: {
    flexDirection: 'row',

    justifyContent: 'space-evenly',
  },
  modalSelector: {width: 220},
  otherDetails: {alignItems: 'center'},
  checkbox: {width: 140, marginVertical: 5},
});
