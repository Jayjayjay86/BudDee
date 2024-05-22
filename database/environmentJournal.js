import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

import {validateEnvironmentJournalEntry} from './validation';

export const newEnvironmentEntry = async EnvironmentEntryObject => {
  const uniqueId = uuid.v4();
  const validObject = await validateEnvironmentJournalEntry(
    EnvironmentEntryObject,
  ).catch(error => {
    return Promise.reject(response => {
      console.error(response, error);
    });
  });
  if (validObject) {
    try {
      const unparsedEnvironmentJournalArray = await AsyncStorage.getItem(
        'environmentJournal',
      );

      const parsedEnvironmentJournal = unparsedEnvironmentJournalArray
        ? JSON.parse(unparsedEnvironmentJournalArray)
        : [];

      const combinedEnvironmentEntryObject = {
        id: uniqueId,
        dateAdded: new Date().toISOString(),
        ...EnvironmentEntryObject,
      };
      parsedEnvironmentJournal.push(combinedEnvironmentEntryObject);

      await AsyncStorage.setItem(
        'environmentJournal',
        JSON.stringify(parsedEnvironmentJournal),
      );

      return Promise.resolve(true);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

export const getEnvironmentJournals = async () => {
  try {
    const unparsedEnvironmentJournal = await AsyncStorage.getItem(
      'environmentJournal',
    );
    return Promise.resolve(
      unparsedEnvironmentJournal ? JSON.parse(unparsedEnvironmentJournal) : [],
    );
  } catch (error) {
    return Promise.reject(`Error get EnvironmentJournal: ${error}`);
  }
};

export const destroyEnvironmentJournal = async () => {
  try {
    await AsyncStorage.removeItem('environmentJournal');
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getEnvironmentEntryObjectById = async id => {
  try {
    const unparsedEnvironmentJournal = await AsyncStorage.getItem(
      'environmentJournal',
    );
    const parsedEnvironmentJournal = unparsedEnvironmentJournal
      ? JSON.parse(unparsedEnvironmentJournal)
      : [];

    const EnvironmentJournalEntry = parsedEnvironmentJournal.find(
      object => object.id === id,
    );

    if (EnvironmentJournalEntry) {
      return Promise.resolve(EnvironmentJournalEntry);
    } else {
      return Promise.reject();
    }
  } catch (error) {
    return Promise.reject();
  }
};

export const removeEnvironmentJournalEntry =
  async EnvironmentJournalEntryId => {
    try {
      const EnvironmentJournal = await AsyncStorage.getItem(
        'environmentJournal',
      );
      const parsedEnvironmentJournal = EnvironmentJournal
        ? JSON.parse(EnvironmentJournal)
        : [];
      const updatedEnvironmentJournal = parsedEnvironmentJournal.filter(
        EnvironmentJournalEntry =>
          EnvironmentJournalEntry.id !== EnvironmentJournalEntryId,
      );
      if (parsedEnvironmentJournal.length > updatedEnvironmentJournal.length) {
        await AsyncStorage.setItem(
          'environmentJournal',
          JSON.stringify(updatedEnvironmentJournal),
        );
        return Promise.resolve([true, EnvironmentJournalEntryId]);
      }
    } catch (error) {
      return Promise.reject([false, error]);
    }
  };
