import {colorMode} from './Color';

export const calculateDaysDifference = startDate => {
  const start = new Date(startDate);
  const today = new Date();
  const timeDiff = today - start;
  return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
};

export const plantsByBatch = plantsArray => {
  try {
    let returnable = {};
    for (let i = 0; i < plantsArray.length; i++) {
      const batchId = plantsArray[i].batchId;

      if (!returnable[batchId]) {
        returnable[batchId] = [];
      }

      returnable[batchId].push(plantsArray[i]);
    }
    return returnable;
  } catch (error) {}
};
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
  currentPhase: '',
  strain: {},
  environmentId: '',
  batchId: '',
  harvestedOn: new Date(),
};
export const EnvironmentObject = {
  name: '',
  lightHours: '',
  roomDetails: {
    length: '',
    height: '',
    width: '',
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
  isAgreed: false,
  preferredLanguage: 'en',
  preferredFirstDay: 'Sunday',
  preferredTempertureUnit: 'C',
  preferDarkMode: false,
};
export const OptionsObject = {
  isAgreed: false,
  preferredLanguage: '',
  preferredFirstDay: '',
  preferredTempertureUnit: '',
  preferDarkMode: false,
};
export const EnvironmentJournalObject = {
  date: new Date(),
  envId: '',
  actions: {
    createdBatch: {amount: '', strainName: ''},
    water: {amount: '', ph: '', ec: ''},
    nutes: {amount: '', ph: '', ec: ''},
  },
  lastUpdated: new Date(),
  lastUserUpdated: new Date(),
};
export const strainObject = {
  strainName: '',
  seedBankName: '',
  floweringTime: '',
};
export const PlantJournalObject = {
  date: new Date(),
  startedLifeOn: '',
  plantId: '',
  envId: '',
  currentPhase: '',
  vegTime: 0,
  flowerTime: 0,
  hangTime: 0,
  watered: [{date: new Date(), ph: '', ec: ''}],
  lastUpdated: new Date(),
  lastUserUpdated: new Date(),

  previousLocations: [],
};
export const lightObject = {name: '', wattage: '', amount: ''};
