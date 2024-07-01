import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import BottomToolBar from '../../../core/components/Headers/BottomToolBar';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import ModalSelector from 'react-native-modal-selector';
import {useFocusEffect} from '@react-navigation/native';
import {
  getEnvironments,
  updateEnvironment,
} from '../../../database/environments';

import {createPlants} from '../../../database/plants';

import {
  modalOverlayStyle,
  modalSelectorCancelStyle,
  modalSelectorCancelTextStyle,
  modalSelectorOptionContainerStyle,
  modalSelectorOptionTextStyle,
} from '../../../core/constants/Styles';

const SelectEnv = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(true);
  const {plantData} = route.params ?? {};

  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();
  const [environmentArray, setEnvironmentArray] = useState([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handlePressNext = async () => {
    if (plantData) {
      const parsedPlantData = JSON.parse(plantData);
      const newPlantObject = {
        ...parsedPlantData,
        environmentId: selectedEnvironment.id,
      };

      const batchId = await createPlants(newPlantObject);
      const updatedPlants = [...selectedEnvironment.plants, batchId];

      const newEnvironmentData = {
        ...selectedEnvironment,
        plants: updatedPlants,
      };

      await updateEnvironment(newEnvironmentData);

      ToastAndroid.show(
        selectedEnvironment
          ? `Created,Updated ${newEnvironmentData.name}`
          : 'Created,Updated',
        ToastAndroid.BOTTOM,
      );
      navigation.navigate('Index', 'Plants');
    } else {
      ToastAndroid.show('No PlantData.', ToastAndroid.BOTTOM);
    }
  };

  async function loadData() {
    setIsLoading(true);
    try {
      const environmentsArray = await getEnvironments();

      setEnvironmentArray(environmentsArray);
    } catch (error) {
      // console.error('Error In Environments.js:', error);
    }

    setIsLoading(false);
  }
  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.selectForm}>
        <Text style={styles.inputText}>
          {translation.plants && translation.plants.selectEnv.Choose}
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

      <BottomToolBar
        colors={theme}
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
  );
};

export default SelectEnv;

const styles = StyleSheet.create({
  container: {height: '100%'},
  inputText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    margin: 5,
    textAlign: 'center',
  },

  selectForm: {flex: 1},
});
