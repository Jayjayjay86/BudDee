import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
};

const backupAsyncStorage = async () => {
  try {
    // Retrieve data from AsyncStorage
    const keys = await AsyncStorage.getAllKeys();
    const data = await AsyncStorage.multiGet(keys);

    // Save data to a file
    const backupPath = RNFS.DocumentDirectoryPath + '/asyncStorageBackup.json';
    await RNFS.writeFile(backupPath, JSON.stringify(data), 'utf8');
  } catch (error) {
    console.error('Backup failed:', error);
    // Handle backup failure
  }
};
