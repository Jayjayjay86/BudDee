import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

// {
//   fromType: '',
//   startedLifeOn: new Date(),
//   currentPhase: '',
//   strain: '',
//   veggingTime: '',
//   medium: '',
//   potSize: '',
//   environmentId: '',
//   batchID: '',
// };

export const createPlants = async object => {
  try {
    const plantBatchSize = object.amount;
    const newDate = new Date().toISOString();
    const unparsedPlantsArray = await AsyncStorage.getItem('plants');
    const parsedPlants = unparsedPlantsArray
      ? JSON.parse(unparsedPlantsArray)
      : [];

    if (plantBatchSize > 1) {
      const batchId = uuid.v4();
      const combinedOperationObject = {
        dateAdded: newDate,
        ...object,
        batchId: batchId,
      };
      for (let i = 0; i < plantBatchSize; i++) {
        let tempId = uuid.v4();
        parsedPlants.push({...combinedOperationObject, id: tempId});
      }
      await AsyncStorage.setItem('plants', JSON.stringify(parsedPlants));

      return Promise.resolve(combinedOperationObject);
    }
    let plantId = uuid.v4();
    const combinedOperationObject = {
      id: plantId,
      dateAdded: newDate,
      ...object,
      batchId: '',
    };
    parsedPlants.push(combinedOperationObject);
    await AsyncStorage.setItem('plants', JSON.stringify(parsedPlants));
    return Promise.resolve(combinedOperationObject);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPlants = async () => {
  try {
    const unparsedPlants = await AsyncStorage.getItem('plants');
    return Promise.resolve(unparsedPlants ? JSON.parse(unparsedPlants) : []);
  } catch (error) {
    return Promise.reject(`Error get plants: ${error}`);
  }
};

export const updatePlants = async object => {
  try {
    const plants = await AsyncStorage.getItem('plants');
    const parsedPlants = plants ? JSON.parse(plants) : [];

    const updatedPlants = parsedPlants.map(plant =>
      plant.id === object.id ? {...plant, ...object} : plant,
    );

    const updatedPlantsString = JSON.stringify(updatedPlants);

    await AsyncStorage.setItem('plants', updatedPlantsString);

    if (plants !== updatedPlantsString) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const destroyPlants = async () => {
  try {
    await AsyncStorage.removeItem('plants');
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const removePlant = async plantId => {
  try {
    const plant = await AsyncStorage.getItem('plants');
    const parsedPlant = plant ? JSON.parse(plant) : [];
    const updatedPlant = parsedPlant.filter(
      plantEntry => plantEntry.id !== plantId,
    );
    if (parsedPlant.length > updatedPlant.length) {
      await AsyncStorage.setItem('plants', JSON.stringify(updatedPlant));
      return Promise.resolve([true, plantId]);
    }
  } catch (error) {
    return Promise.reject([false, error]);
  }
};
