import {Errors} from '../core/constants/Errors';

export const validateOperation = async operationObject => {
  try {
    if (!operationObject) {
      return Promise.reject(Errors.OperationErrors.NotFound);
    }
    return Promise.resolve(true);
  } catch (error) {
    console.error(error);
  }
};
