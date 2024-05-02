import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

import {Errors} from '../core/constants/Errors';
import {validateOperation} from './validation';

export const makeNewOperation = async operationObject => {
  const uniqueId = uuid.v4();
  const validObject = await validateOperation(operationObject).catch(error => {
    return Promise.reject(response => {
      console.error(response, error);
    });
  });
  if (validObject) {
    try {
      const unparsedOperationArray = await AsyncStorage.getItem('operations');

      const parsedOperations = unparsedOperationArray
        ? JSON.parse(unparsedOperationArray)
        : [];

      const combinedOperationObject = {
        id: uniqueId,
        dateAdded: new Date().toISOString(),
        ...operationObject,
      };
      parsedOperations.push(combinedOperationObject);

      await AsyncStorage.setItem(
        'operations',
        JSON.stringify(parsedOperations),
      );

      return Promise.resolve(true);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

export const getOperations = async () => {
  try {
    const unparsedOperations = await AsyncStorage.getItem('operations');
    return Promise.resolve(
      unparsedOperations ? JSON.parse(unparsedOperations) : [],
    );
  } catch (error) {
    return Promise.reject(`Error get operations: ${error}`);
  }
};

export const destroyOperations = async () => {
  try {
    await AsyncStorage.removeItem('operations');
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const operationObjectById = async id => {
  try {
    const unparsedOpertaions = await AsyncStorage.getItem('operations');
    const parsedOperations = unparsedOpertaions
      ? JSON.parse(unparsedOpertaions)
      : [];

    const operation = parsedOperations.find(object => object.id === id);

    if (operation) {
      return Promise.resolve(operation);
    } else {
      return Promise.reject(Errors.OperationErrors.NotFound);
    }
  } catch (error) {
    return Promise.reject(Errors.OperationErrors.InvalidObject);
  }
};

export const removeOperation = async studentId => {
  // try {
  //   const students = await AsyncStorage.getItem('students');
  //   const parsedStudents = students ? JSON.parse(students) : [];
  //   const updatedStudents = parsedStudents.filter(
  //     student => student.id !== studentId,
  //   );
  //   if (parsedStudents.length > updatedStudents.length) {
  //     await AsyncStorage.setItem('students', JSON.stringify(updatedStudents));
  //     return Promise.resolve(studentData.name);
  //   }
  // } catch (error) {
  //   return Promise.reject(error);
  // }
};
