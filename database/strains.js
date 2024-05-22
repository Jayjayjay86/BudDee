import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

// strainObject = {strainName: '',seedBankName: '', flowerTime: ''};

export const createStrain = async object => {
  const uniqueId = uuid.v4();
  try {
    const unparsedStrainArray = await AsyncStorage.getItem('strain');

    const parsedStrain = unparsedStrainArray
      ? JSON.parse(unparsedStrainArray)
      : [];
    if (parsedStrain.length > 1) {
      Promise.reject(0);
    }

    const combinedStrainObject = {
      id: uniqueId,
      dateAdded: new Date().toISOString(),
      ...object,
    };
    parsedStrain.push(combinedStrainObject);

    await AsyncStorage.setItem('strain', JSON.stringify(parsedStrain));

    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};
export const getStrains = async () => {
  try {
    const unparsedStrain = await AsyncStorage.getItem('strain');
    return Promise.resolve(unparsedStrain ? JSON.parse(unparsedStrain) : []);
  } catch (error) {
    return Promise.reject(`Error get Strain: ${error}`);
  }
};
export const updateStrain = async object => {
  try {
    const Strain = await AsyncStorage.getItem('strain');
    const parsedStrain = Strain ? JSON.parse(Strain) : [];

    const updatedStrain = parsedStrain.map(option =>
      option.id === 0 ? {...option, ...object} : option,
    );

    const updatedStrainString = JSON.stringify(updatedStrain);

    await AsyncStorage.setItem('strain', updatedStrainString);

    if (Strain !== updatedStrainString) {
      return Promise.resolve();
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
export const destroyAllStrains = async () => {
  try {
    await AsyncStorage.removeItem('strain');
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};
export const removeStrain = async strainId => {
  try {
    const strain = await AsyncStorage.getItem('strain');
    const parsedStrain = strain ? JSON.parse(strain) : [];
    const updatedStrain = parsedStrain.filter(
      strainEntry => strainEntry.id !== strainId,
    );
    if (parsedStrain.length > updatedStrain.length) {
      await AsyncStorage.setItem('strains', JSON.stringify(updatedStrain));
      return Promise.resolve([true, strainId]);
    }
  } catch (error) {
    return Promise.reject([false, error]);
  }
};
