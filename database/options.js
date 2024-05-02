import AsyncStorage from '@react-native-async-storage/async-storage';

export const createOptions = async object => {
  try {
    const unparsedOptionsArray = await AsyncStorage.getItem('options');

    const parsedOptions = unparsedOptionsArray
      ? JSON.parse(unparsedOptionsArray)
      : [];
    if (parsedOptions.length > 1) {
      Promise.reject(0);
    }
    const optionObject = {
      id: 0,
      dateAdded: new Date().toISOString(),
      isAgreed: object.isAgreed,
      preferredLanguage: object.preferredLanguage,
      preferredFirstDay: object.preferredFirstDay,
      preferredTempertureUnit: object.preferredTempertureUnit,
      preferDarkMode: object.preferDarkMode,
    };
    parsedOptions.push(optionObject);

    await AsyncStorage.setItem('options', JSON.stringify(parsedOptions));

    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};
export const getOptions = async () => {
  try {
    const unparsedOptions = await AsyncStorage.getItem('options');
    return Promise.resolve(unparsedOptions ? JSON.parse(unparsedOptions) : []);
  } catch (error) {
    return Promise.reject(`Error get options: ${error}`);
  }
};
export const updateOptions = async object => {
  try {
    const options = await AsyncStorage.getItem('options');
    const parsedOptions = options ? JSON.parse(options) : [];

    const updatedOptions = parsedOptions.map(option =>
      option.id === 0 ? {...option, ...object} : option,
    );

    const updatedOptionsString = JSON.stringify(updatedOptions);

    await AsyncStorage.setItem('options', updatedOptionsString);

    if (options !== updatedOptionsString) {
      return Promise.resolve();
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
export const destroyOptions = async () => {
  try {
    await AsyncStorage.removeItem('options');
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};
