import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

import {validateplantJournalEntry} from './validation';

export const newPlantEntry = async plantEntryObject => {
  const uniqueId = uuid.v4();
  const validObject = await validateplantJournalEntry(plantEntryObject).catch(
    error => {
      return Promise.reject(response => {
        console.error(response, error);
      });
    },
  );
  if (validObject) {
    try {
      const unparsedPlantJournalArray = await AsyncStorage.getItem(
        'plantJournal',
      );

      const parsedplantJournal = unparsedPlantJournalArray
        ? JSON.parse(unparsedPlantJournalArray)
        : [];

      const combinedPlantEntryObject = {
        id: uniqueId,
        dateAdded: new Date().toISOString(),
        ...plantEntryObject,
      };
      parsedplantJournal.push(combinedPlantEntryObject);

      await AsyncStorage.setItem(
        'plantJournal',
        JSON.stringify(parsedplantJournal),
      );

      return Promise.resolve(true);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

export const getplantJournals = async () => {
  try {
    const unparsedplantJournal = await AsyncStorage.getItem('plantJournal');
    return Promise.resolve(
      unparsedplantJournal ? JSON.parse(unparsedplantJournal) : [],
    );
  } catch (error) {
    return Promise.reject(`Error get plantJournal: ${error}`);
  }
};

export const destroyPlantJournal = async () => {
  try {
    await AsyncStorage.removeItem('plantJournal');
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPlantEntryObjectById = async id => {
  try {
    const unparsedPlantJournal = await AsyncStorage.getItem('plantJournal');
    const parsedplantJournal = unparsedPlantJournal
      ? JSON.parse(unparsedPlantJournal)
      : [];

    const plantJournalEntry = parsedplantJournal.find(
      object => object.id === id,
    );

    if (plantJournalEntry) {
      return Promise.resolve(plantJournalEntry);
    } else {
      return Promise.reject();
    }
  } catch (error) {
    return Promise.reject();
  }
};

export const removePlantJournalEntry = async plantJournalEntryId => {
  try {
    const plantJournal = await AsyncStorage.getItem('plantJournal');
    const parsedplantJournal = plantJournal ? JSON.parse(plantJournal) : [];
    const updatedplantJournal = parsedplantJournal.filter(
      plantJournalEntry => plantJournalEntry.id !== plantJournalEntryId,
    );
    if (parsedplantJournal.length > updatedplantJournal.length) {
      await AsyncStorage.setItem(
        'plantJournal',
        JSON.stringify(updatedplantJournal),
      );
      return Promise.resolve([true, plantJournalEntryId]);
    }
  } catch (error) {
    return Promise.reject([false, error]);
  }
};
