import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';
import {calculateDaysDifference} from '../core/constants/Misc';
import {getPlants, waterPlantsByBatch} from './plants';

export const newEntry = async entryObject => {
  const uniqueId = uuid.v4();

  try {
    const unparsedJournalArray = await AsyncStorage.getItem('Journal');

    const parsedJournal = unparsedJournalArray
      ? JSON.parse(unparsedJournalArray)
      : [];

    parsedJournal.forEach(journalItem => {
      if (
        entryObject.type === 'water' &&
        new Date(entryObject.date).toLocaleDateString() ===
          new Date(journalItem.date).toLocaleDateString()
      ) {
        return Promise.reject({});
      }
    });

    const combinedentryObject = {
      id: uniqueId,
      dateAdded: new Date().toISOString(),
      ...entryObject,
    };
    parsedJournal.push(combinedentryObject);

    await AsyncStorage.setItem('Journal', JSON.stringify(parsedJournal));

    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getJournals = async () => {
  try {
    const unparsedJournal = await AsyncStorage.getItem('Journal');
    return Promise.resolve(unparsedJournal ? JSON.parse(unparsedJournal) : []);
  } catch (error) {
    return Promise.reject(`Error get Journal: ${error}`);
  }
};
export const getJournalByBatch = async id => {
  try {
    const unparsedJournal = await AsyncStorage.getItem('Journal');
    const parsedJournal = unparsedJournal ? JSON.parse(unparsedJournal) : [];

    const JournalEntry = parsedJournal.find(object => object.batchId === id);

    if (JournalEntry) {
      return Promise.resolve(JournalEntry);
    } else {
      return Promise.reject();
    }
  } catch (error) {
    return Promise.reject();
  }
};
export const destroyJournal = async () => {
  try {
    await AsyncStorage.removeItem('Journal');
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getEntryObjectById = async id => {
  try {
    const unparsedJournal = await AsyncStorage.getItem('Journal');
    const parsedJournal = unparsedJournal ? JSON.parse(unparsedJournal) : [];

    const JournalEntry = parsedJournal.find(object => object.id === id);

    if (JournalEntry) {
      return Promise.resolve(JournalEntry);
    } else {
      return Promise.reject();
    }
  } catch (error) {
    return Promise.reject();
  }
};
export const removePlantsInBatch = async (batchId, plants) => {
  try {
    const unparsedJournal = await AsyncStorage.getItem('Journal');
    const parsedJournal = unparsedJournal ? JSON.parse(unparsedJournal) : [];

    const batchJournal = parsedJournal.find(
      object => object.batchId === batchId,
    );

    if (batchJournal) {
      return Promise.resolve(batchJournal);
    } else {
      return Promise.reject();
    }
  } catch (error) {
    return Promise.reject();
  }
};

export const removeEnvironmentsJournalEntries = async environmentId => {
  try {
    const Journal = await AsyncStorage.getItem('Journal');
    const parsedJournal = Journal ? JSON.parse(Journal) : [];

    const updatedJournal = parsedJournal.filter(
      JournalEntry => JournalEntry.envId !== environmentId,
    );

    if (parsedJournal.length > updatedJournal.length) {
      await AsyncStorage.setItem('Journal', JSON.stringify(updatedJournal));
      return Promise.resolve([true, environmentId]);
    }
  } catch (error) {
    return Promise.reject([false, error]);
  }
};
export const removeBatch = async batchId => {
  try {
    const Journal = await AsyncStorage.getItem('Journal');
    const parsedJournal = Journal ? JSON.parse(Journal) : [];

    const updatedJournal = parsedJournal.filter(
      JournalEntry =>
        JournalEntry.type === 'batch' && JournalEntry.batchId !== batchId,
    );

    if (parsedJournal.length > updatedJournal.length) {
      await AsyncStorage.setItem('Journal', JSON.stringify(updatedJournal));
      return Promise.resolve([true, batchId]);
    }
  } catch (error) {
    return Promise.reject([false, error]);
  }
};
export const waterBatch = async (batchId, exrtaEntry) => {
  try {
    const today = new Date();
    const Journal = await AsyncStorage.getItem('Journal');

    const parsedJournal = Journal ? JSON.parse(Journal) : [];

    const updatedJournal = parsedJournal.map(JournalEntry => {
      if (JournalEntry.type === 'batch' && JournalEntry.batchId === batchId) {
        JournalEntry.wateredOn.push(today);
      }
    });

    if (parsedJournal.length > updatedJournal.length) {
      await AsyncStorage.setItem('Journal', JSON.stringify(updatedJournal));
      await waterPlantsByBatch(batchId);
      return Promise.resolve([true, batchId]);
    }
  } catch (error) {
    return Promise.reject([false, error]);
  }
};
export const removeJournalEntry = async JournalEntryId => {
  try {
    const Journal = await AsyncStorage.getItem('Journal');
    const parsedJournal = Journal ? JSON.parse(Journal) : [];
    const updatedJournal = parsedJournal.filter(
      JournalEntry => JournalEntry.id !== JournalEntryId,
    );
    if (parsedJournal.length > updatedJournal.length) {
      await AsyncStorage.setItem('Journal', JSON.stringify(updatedJournal));
      return Promise.resolve([true, JournalEntryId]);
    }
  } catch (error) {
    return Promise.reject([false, error]);
  }
};

export const checkPlantsForJournal = async () => {
  try {
    const JournalEntries = await AsyncStorage.getItem('Journal');
    const parsedArray = JournalEntries ? JSON.parse(JournalEntries) : [];
    const allPlants = await getPlants();

    // Iterate through all plants and ensure each one has a journal entry
    const updatedPlants = allPlants.map(plant => {
      let Journal = parsedArray.find(
        journalPlant => journalPlant.plantId === plant.id,
      );
      const todaysDate = new Date().toISOString();
      if (!Journal) {
        if (!Journal) {
          switch (plant.currentPhase) {
            case 'veg':
              Journal = {
                plantId: plant.id,
                envId: plant.environmentId,
                batchId: plant.batchId,
                totalVegDays: 1,
                totalFlowerDays: 0,
                totalHangDays: 0,
                watered: [],
                lastUpdated: todaysDate,
                lastUserUpdated: '',
              };

              break;
            case 'flower':
              Journal = {
                plantId: plant.id,
                envId: plant.environmentId,
                batchId: plant.batchId,
                totalVegDays: 0,
                totalFlowerDays: 1,
                totalHangDays: 0,
                watered: [],
                lastUpdated: '',
                lastUserUpdated: '',
              };

              break;
            case 'hang':
              Journal = {
                plantId: plant.id,
                envId: plant.environmentId,
                batchId: plant.batchId,
                totalVegDays: 0,
                totalFlowerDays: 0,
                totalHangDays: 1,
                watered: [],
                lastUpdated: '',
                lastUserUpdated: '',
              };

              break;
            default:
              break;
          }
        }
        parsedArray.push(Journal);
      }
    });
    const updatedPlantsString = JSON.stringify(updatedPlants);
    await AsyncStorage.setItem('plants', updatedPlantsString);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(false);
  }
};
export const dailyPlantUpdate = async () => {
  try {
    // get all plant entries
    const JournalEntries = await AsyncStorage.getItem('Journal');
    const parsedArray = JournalEntries ? JSON.parse(JournalEntries) : [];
    // get all plants
    const allPlants = await getPlants();
    // set todays date and upadted
    const todaysDate = new Date();
    let updated = false;
    const updatedPlants = allPlants.map(plant => {
      let Journal = parsedArray.find(
        journalPlant => journalPlant.plantId === plant.id,
      );

      if (!Journal) {
        const newJournalEntry = {
          plantId: plant.id,
          envId: plant.environmentId,
          batchId: plant.batchId,
          totalVegDays: 0,
          totalFlowerDays: 0,
          totalHangDays: 0,
          watered: [],
          lastUpdated: '',
          lastUserUpdated: '',
        };
        parsedArray.push(newJournalEntry);
      }

      const lastUpdateDate = new Date(Journal.lastUpdated).toLocaleDateString();

      if (lastUpdateDate !== todaysDate.toLocaleDateString()) {
        const daysSinceStart = calculateDaysDifference(plant.dateAdded);

        let totalVegDays = Journal.vegTime;
        let totalFlowerDays = Journal.flowerTime;

        switch (plant.currentPhase) {
          case 'veg':
            totalVegDays = daysSinceStart;
            break;
          case 'flower':
            totalFlowerDays = daysSinceStart - totalVegDays;
            break;
          default:
            break;
        }

        updated = true;
        return {
          ...Journal,
          totalVegDays,
          totalFlowerDays,

          lastUpdated: new Date().toISOString(),
        };
      }

      return Journal;
    });

    if (updated) {
      const updatedPlantsString = JSON.stringify(updatedPlants);
      await AsyncStorage.setItem('plants', updatedPlantsString);
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
