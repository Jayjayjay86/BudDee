import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';
import {newEntry} from './journal';

export const createEnvironment = async object => {
  const uniqueId = uuid.v4();
  const dateAdded = new Date();
  try {
    const EnvsArray = await AsyncStorage.getItem('environments');
    const parsedArray = EnvsArray ? JSON.parse(EnvsArray) : [];

    const combinedOperationObject = {
      id: uniqueId,
      dateAdded: dateAdded,
      ...object,
    };
    parsedArray.push(combinedOperationObject);

    await AsyncStorage.setItem('environments', JSON.stringify(parsedArray));
    newEntry({
      type: 'env',
      envId: uniqueId,
      dateAdded: dateAdded,
      batches: [],
      plants: [],
      currentPhase: object.lightHours,
      name: object.name,
    });
    return Promise.resolve(combinedOperationObject);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getEnvironments = async () => {
  try {
    const unparsedArray = await AsyncStorage.getItem('environments');
    return Promise.resolve(unparsedArray ? JSON.parse(unparsedArray) : []);
  } catch (error) {
    return Promise.reject(`Error get environments: ${error}`);
  }
};
export const getEnvironmentById = async id => {
  try {
    const unparsedEnvironments = await AsyncStorage.getItem('environments');
    const parsedEnvironments = unparsedEnvironments
      ? JSON.parse(unparsedEnvironments)
      : [];

    const environment = parsedEnvironments.filter(object => object.id === id);

    if (environment) {
      return Promise.resolve(environment);
    } else {
      return Promise.reject();
    }
  } catch (error) {
    return Promise.reject();
  }
};
export const updateEnvironment = async object => {
  try {
    const environments = await AsyncStorage.getItem('environments');
    const parsedArray = environments ? JSON.parse(environments) : [];

    const updatedEnvironments = parsedArray.map(environment =>
      environment.id === object.id ? {...environment, ...object} : environment,
    );

    const updatedEnvironmentsString = JSON.stringify(updatedEnvironments);

    await AsyncStorage.setItem('environments', updatedEnvironmentsString);

    if (environments !== updatedEnvironmentsString) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const removePlantsByBatchEnv = async batchId => {
  try {
    const environments = await AsyncStorage.getItem('environments');
    const parsedEnvironments = environments ? JSON.parse(environments) : [];

    const updatedEnvironments = parsedEnvironments.map(env => ({
      ...env,
      plants: env.plants.filter(plantId => plantId !== batchId),
    }));

    const updatedEnvironmentsString = JSON.stringify(updatedEnvironments);

    await AsyncStorage.setItem('environments', updatedEnvironmentsString);

    if (environments !== updatedEnvironmentsString) {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
export const destroyEnvironmentBatches = async () => {
  try {
    const unparsedArray = await AsyncStorage.getItem('environments');
    const parsedArray = JSON.parse(unparsedArray)
      ? JSON.parse(unparsedArray)
      : [];
    if (parsedArray.length < 1) {
      return Promise.resolve(true);
    }
    const mappedArray = parsedArray.map(environment => ({
      ...environment,
      plants: [],
    }));
    await AsyncStorage.setItem('environments', JSON.stringify(mappedArray));
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const destroyEnvironments = async () => {
  try {
    await AsyncStorage.removeItem('environments');
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const removeEnvironment = async environmentId => {
  try {
    const Environments = await AsyncStorage.getItem('environments');
    const parsedArray = Environments ? JSON.parse(Environments) : [];
    const updatedEnvironments = parsedArray.filter(
      environment => environment.id !== environmentId,
    );
    if (parsedArray.length > updatedEnvironments.length) {
      await AsyncStorage.setItem(
        'environments',
        JSON.stringify(updatedEnvironments),
      );
      return Promise.resolve([true, environmentId]);
    }
  } catch (error) {
    return Promise.reject([false, error]);
  }
};
