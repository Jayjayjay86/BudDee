import {colorMode} from './Color';
export const getAge = startLife => {
  const today = new Date();
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((today - startLife) / millisecondsPerDay);
};
export const handleChangeAction = (option, setActionOptions) => {
  switch (option.label) {
    case 'Water':
      setActionOptions('water');
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

export const PlantObject = {
  fromType: '',
  startedLifeOn: new Date(),
  currentPhase: '',
  strain: '',
  veggingTime: '',
  medium: '',
  potSize: '',
  environmentId: '',
  batchId: '',
  amount: '',
};
export const EnvironmentObject = {
  lights: [],
  name: '',
  lightHours: '',
  roomDetails: {
    length: '',
    height: '',
    width: '',
    restingTemp: '',
    sealed: false,
    aircon: false,
    dehumidifier: false,
  },
  plants: [],
  harvestedPlants: [],
};
export const DisplayObject = {
  veg: false,
  flower: false,
  hang: false,
};
export const DefaultOptionsObject = {
  id: '',
  isAgreed: false,
  preferredLanguage: 'en',
  preferredFirstDay: 'Sunday',
  preferredTempertureUnit: 'C',
  preferDarkMode: false,
};
export const OptionsObject = {
  id: '',
  isAgreed: false,
  preferredLanguage: '',
  preferredFirstDay: '',
  preferredTempertureUnit: '',
  preferDarkMode: false,
};
export const EnvironmentJournalObject = {
  id: '',
  date: new Date(),
  actions: [{actionId: '', plantId: '', activity: '', details: {}}],
  plants: [{plantId: ''}],
  batches: [{batchId: '', plantIds: [], environmentId: ''}],
};
export const strainObject = {
  id: '',
  strainName: '',
  seedBankName: '',
  flowerTime: '',
};
export const PlantActionObject = {
  plantAmount: '',
  actionsTaken: [
    {actionId: '', plantId: '', batchId: '', activity: '', details: {}},
  ],
  plants: [{plantId: ''}],
  batches: [{batchId: '', plantIds: [], environmentId: ''}],
};
export const lightObject = {name: '', wattage: '', amount: ''};
