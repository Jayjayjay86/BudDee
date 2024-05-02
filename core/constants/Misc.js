import {colorMode} from './Color';

export const handleColor = async (isDarkMode, setColors) => {
  const colors = await colorMode(isDarkMode);
  return setColors(colors);
};
export const languageNames = (language, setNewUserOptions, newUserOptions) => {
  switch (language.label) {
    case 'English':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'en',
      });
      break;
    case 'อังกฤษ':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'en',
      });
      break;
    case 'Thai':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'th',
      });
      break;
    case 'ไทย':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'th',
      });
      break;
    case 'Spanish':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'sp',
      });
      break;
    case 'French':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'fr',
      });
      break;
    case 'Hindu':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'hind',
      });
      break;
  }
};
export const actionNames = (option, setActionOptions) => {
  switch (option.label) {
    case 'Water':
      setActionOptions('water');
      break;
    case 'Mix Nutrients':
      setActionOptions('nutes');
      break;
    case 'Bug Report':
      setActionOptions('nutes');
      break;
    case 'Repot':
      setActionOptions('repot');
      break;
    case 'Trim':
      setActionOptions('trim');
      break;
    case 'Defoliate':
      setActionOptions('defoliate');
      break;
    case 'Train':
      setActionOptions('defoliate');
      break;
    case 'Flush':
      setActionOptions('flush');
      break;
    case 'Harvest':
      setActionOptions('harvest');
      break;
    case 'Destroy':
      setActionOptions('kill');
      break;
    default:
      break;
  }
};

export const newPlantObject = {
  fromType: '',
  startOn: new Date(),
  currentPhase: '',
  strain: '',
  amount: '',
  veggingTime: '',
  medium: '',
  lights: {},
};

export const newEnvObject = {
  lights: {type: '', wattage: '', amount: ''},
  name: '',
  lightHours: '',
  roomDetails: {
    length: '',
    height: '',
    width: '',
    restingTemp: '',
    sealed: false,
    aircon: false,
    dehumidifer: false,
  },
};
export const PlantObject = {
  fromType: '',
  startOn: new Date(),
  currentPhase: '',
  strain: '',
  amount: '',
  veggingTime: '',
  medium: '',
  lights: {},
};
export const EnvironmentObject = {
  lights: {type: '', wattage: '', amount: ''},
  name: '',
  lightHours: '',
  roomDetails: {
    length: '',
    height: '',
    width: '',
    restingTemp: '',
    sealed: false,
    aircon: false,
    dehumidifer: false,
  },
};
export const DisplayObject = {
  veg: false,
  flower: false,
  hang: false,
};
export const DefaultOptionsObject = {
  id: 0,
  isAgreed: false,
  preferredLanguage: 'en',
  preferredFirstDay: 'Sunday',
  preferredTempertureUnit: 'C',
  preferDarkMode: false,
};
export const OptionsObject = {
  id: 0,
  isAgreed: false,
  preferredLanguage: '',
  preferredFirstDay: '',
  preferredTempertureUnit: '',
  preferDarkMode: false,
};
