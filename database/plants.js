import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';
import {newPlantEntry} from './plantJournal';
import {calculateDaysDifference} from '../core/constants/Misc';

import {newEntry} from './journal';

// {

// };

export const createPlants = async object => {
  // unpack object
  const batchId = `C${uuid.v4()}`;
  const today = new Date();
  const currentPhase = object.currentPhase;
  const strain = object.strain;
  const environmentId = object.environmentId;
  // unpack variables
  const vegTime = object.vegTime;
  const flowerTime = object.flowerTime;
  const harvestedOn = object.harvestedOn ? object.harvestedOn : '';
  const plantBatchSize = Number(object.amount);

  // get plants Array
  const plantsArray = await AsyncStorage.getItem('plants');
  const parsedArray = plantsArray ? JSON.parse(plantsArray) : [];

  let totalAge = 0;
  const dryingTime = calculateDaysDifference(harvestedOn);
  switch (currentPhase) {
    case 'veg':
      totalAge += Number(vegTime);
      break;
    case 'flower':
      totalAge += Number(vegTime) + Number(flowerTime);
      break;
    case 'hang':
      totalAge += Number(vegTime) + Number(flowerTime) + dryingTime;
      break;
    default:
      break;
  }

  try {
    if (plantBatchSize > 1) {
      for (let i = 0; i < plantBatchSize; i++) {
        let tempId = `${strain.strainName.slice(0, 4)}${uuid
          .v4()
          .slice(0, 10)}`;
        parsedArray.push({
          id: tempId,
          environmentId: environmentId,
          batchId: batchId,
          currentPhase: currentPhase,
          strain: strain,
          dateAdded: today,
        });
        await newEntry({
          type: 'plant',
          plantId: tempId,
          batchId: batchId,
          envId: environmentId,
          dateAdded: today,
          currentPhase: currentPhase,
          vegTime: vegTime,
          flowerTime: flowerTime,
          startingAge: totalAge,
          harvestedOn: harvestedOn,
          lastUpdated: today,
          lastWatered: new Date(),
        });
      }
      await newEntry({
        type: 'batch',
        batchId: batchId,
        amountStarted: plantBatchSize,
        envId: environmentId,
        current_location: environmentId,
        currentPhase: currentPhase,
        vegTime: vegTime,
        flowerTime: flowerTime,
        startingAge: totalAge,
        harvestedOn: harvestedOn,
        hangTime: dryingTime,
        lastUpdated: today,
        dateAdded: today,
        wateredOn: [],
      });

      await AsyncStorage.setItem('plants', JSON.stringify(parsedArray));
      return Promise.resolve(batchId);
    }

    const plantId = `${strain.strainName.slice(0, 4)}${uuid.v4().slice(0, 10)}`;
    const combinedOperationObject = {
      id: plantId,
      environmentId: environmentId,
      batchId: batchId,
      currentPhase: currentPhase,
      strain: strain,
      dateAdded: today,
    };
    parsedArray.push(combinedOperationObject);
    await newEntry({
      type: 'plant',
      plantId: plantId,
      batchId: batchId,
      envId: environmentId,
      currentPhase: currentPhase,
      vegTime: vegTime,
      flowerTime: flowerTime,
      startingAge: totalAge,
      harvestedOn: harvestedOn,
      lastUpdated: today,
      dateAdded: today,
      lastWatered: '',
    });
    await newEntry({
      type: 'batch',
      batchId: batchId,
      amountStarted: plantBatchSize,
      envId: environmentId,
      current_location: environmentId,
      currentPhase: currentPhase,
      vegTime: vegTime,
      flowerTime: flowerTime,
      startingAge: totalAge,
      harvestedOn: harvestedOn,
      hangTime: dryingTime,
      lastUpdated: today,
      dateAdded: today,
      wateredOn: [],
    });
    await AsyncStorage.setItem('plants', JSON.stringify(parsedArray));
    return Promise.resolve(batchId);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPlants = async () => {
  try {
    const unparsedArray = await AsyncStorage.getItem('plants');
    return Promise.resolve(unparsedArray ? JSON.parse(unparsedArray) : []);
  } catch (error) {
    return Promise.reject(`Error get plants: ${error}`);
  }
};
export const getPlantsByBatch = async id => {
  try {
    const unparsedPlants = await AsyncStorage.getItem('plants');
    const parsedPlants = unparsedPlants ? JSON.parse(unparsedPlants) : [];

    const PlantsEntry = parsedPlants.filter(object => object.batchId === id);

    if (PlantsEntry) {
      return Promise.resolve(PlantsEntry);
    } else {
      return Promise.reject();
    }
  } catch (error) {
    return Promise.reject();
  }
};
export const removePlantsByBatch = async id => {
  try {
    const unparsedPlants = await AsyncStorage.getItem('plants');
    const parsedPlants = unparsedPlants ? JSON.parse(unparsedPlants) : [];

    const removedPlants = parsedPlants.filter(object => object.batchId === id);

    if (removedPlants.length === 0) {
      return Promise.reject(
        new Error('No plants found with the specified batch ID'),
      );
    }

    const remainingPlants = parsedPlants.filter(
      object => object.batchId !== id,
    );

    await AsyncStorage.setItem('plants', JSON.stringify(remainingPlants));

    return Promise.resolve(removedPlants);
  } catch (error) {
    return Promise.reject(error);
  }
};
export const movePlants = async (oldPlants, newEnvId) => {
  const newBatchId = `M${uuid.v4()}`;

  try {
    const newPlantObjects = oldPlants.map(plant => ({
      ...plant,
      batchId: newBatchId,
      environmentId: newEnvId,
    }));

    const plants = await AsyncStorage.getItem('plants');
    const parsedArray = plants ? JSON.parse(plants) : [];

    const updatedPlants = parsedArray.map(plant =>
      newPlantObjects.find(p => p.id === plant.id)
        ? {...plant, ...newPlantObjects.find(p => p.id === plant.id)}
        : plant,
    );

    newPlantObjects.forEach(newPlant => {
      if (!updatedPlants.some(plant => plant.id === newPlant.id)) {
        updatedPlants.push(newPlant);
      }
    });

    const updatedPlantsString = JSON.stringify(updatedPlants);
    await newPlantEntry({
      type: 'moved_batch',
      batchId: newBatchId,
      current_location: newEnvId,
      lastUpdated: new Date(),
    });
    await AsyncStorage.setItem('plants', updatedPlantsString);

    return Promise.resolve(newBatchId);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updatePlant = async object => {
  try {
    const plants = await AsyncStorage.getItem('plants');
    const parsedArray = plants ? JSON.parse(plants) : [];

    const updatedPlants = parsedArray.map(plant =>
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
export const waterPlantsByBatch = async id => {
  const today = new Date();
  try {
    const plants = await AsyncStorage.getItem('plants');
    const parsedArray = plants ? JSON.parse(plants) : [];

    const updatedPlants = parsedArray.map(plant =>
      plant.batchId === id ? {...plant, lastWatered: today} : plant,
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
