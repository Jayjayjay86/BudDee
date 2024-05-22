import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

// environmentObject = {
//   lights: {type: '', wattage: '', amount: ''},
//   name: '',
//   lightHours: '',
//   roomDetails: {
//     length: '',
//     height: '',
//     width: '',
//     restingTemp: '',
//     sealed: false,
//     aircon: false,
//     dehumidifer: false,
//   },
// plants: [],
// harvestedPlants: [],
// };

export const createEnvironment = async object => {
  const uniqueId = uuid.v4();
  try {
    const unparsedEnvironmentsArray = await AsyncStorage.getItem(
      'environments',
    );

    const parsedEnvironments = unparsedEnvironmentsArray
      ? JSON.parse(unparsedEnvironmentsArray)
      : [];
    if (parsedEnvironments.length > 1) {
      Promise.reject(0);
    }

    const combinedOperationObject = {
      id: uniqueId,
      dateAdded: new Date().toISOString(),
      ...object,
    };
    parsedEnvironments.push(combinedOperationObject);

    await AsyncStorage.setItem(
      'environments',
      JSON.stringify(parsedEnvironments),
    );

    return Promise.resolve(uniqueId);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getEnvironments = async () => {
  try {
    const unparsedEnvironments = await AsyncStorage.getItem('environments');
    return Promise.resolve(
      unparsedEnvironments ? JSON.parse(unparsedEnvironments) : [],
    );
  } catch (error) {
    return Promise.reject(`Error get environments: ${error}`);
  }
};

export const updateEnvironment = async object => {
  console.log(object);
  try {
    const environments = await AsyncStorage.getItem('environments');
    const parsedEnvironments = environments ? JSON.parse(environments) : [];

    const updatedenvironments = parsedEnvironments.map(env =>
      env.id === object.id ? {...env, ...object} : env,
    );

    const updatedenvironmentsString = JSON.stringify(updatedenvironments);

    await AsyncStorage.setItem('environments', updatedenvironmentsString);

    if (environments !== updatedenvironmentsString) {
      return Promise.resolve();
    }
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
    const parsedEnvironments = Environments ? JSON.parse(Environments) : [];
    const updatedEnvironments = parsedEnvironments.filter(
      environment => environment.id !== environmentId,
    );
    if (parsedEnvironments.length > updatedEnvironments.length) {
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
