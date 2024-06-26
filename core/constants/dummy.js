export const envData = [
  {
    id: 0,
    lights: [{type: 'LED', wattage: '800', amount: '1'}],
    name: 'main',
    lightHours: 'flower',
    roomDetails: {
      length: '2',
      height: '3',
      width: '2',
      restingTemp: '30',
      sealed: true,
      aircon: true,
      dehumidifer: true,
    },
    plants: [
      {
        id: 1,
        fromType: 'cutting',
        startedLifeOn: new Date(),
        currentPhase: 'veg',
        strain: 'critcal mass',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '1',
      },
      {
        id: 2,
        fromType: 'seed',
        startedLifeOn: new Date(),
        currentPhase: 'flower',
        strain: 'queen',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '1',
      },
      {
        id: 3,
        fromType: 'cutting',
        startedLifeOn: new Date(),
        currentPhase: 'veg',
        strain: 'critcal mass',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '1',
      },
      {
        id: 4,
        fromType: 'cutting',
        startedLifeOn: new Date(),
        currentPhase: 'veg',
        strain: 'critcal mass',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '1',
      },
      {
        id: 5,
        fromType: 'seed',
        startedLifeOn: new Date(),
        currentPhase: 'flower',
        strain: 'queen',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '1',
      },
      {
        id: 6,
        fromType: 'cutting',
        startedLifeOn: new Date(),
        currentPhase: 'veg',
        strain: 'critcal mass',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '1',
      },
      {
        id: 7,
        fromType: 'cutting',
        startedLifeOn: new Date(),
        currentPhase: 'veg',
        strain: 'critcal mass',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '1',
      },
      {
        id: 8,
        fromType: 'seed',
        startedLifeOn: new Date(),
        currentPhase: 'flower',
        strain: 'queen',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '1',
      },
      {
        id: 9,
        fromType: 'cutting',
        startedLifeOn: new Date(),
        currentPhase: 'veg',
        strain: 'critcal mass',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '1',
      },
    ],
    harvestedPlants: [],
  },
  {
    id: 1,
    lights: [{type: 'HPS', wattage: '1000', amount: '8'}],
    name: 'imaginary',
    lightHours: '12',
    roomDetails: {
      length: '5',
      height: '5',
      width: '5',
      restingTemp: '24',
      sealed: false,
      aircon: false,
      dehumidifer: false,
    },
    plants: [
      {
        id: 1,
        fromType: 'cutting',
        startedLifeOn: new Date(),
        currentPhase: 'veg',
        strain: 'critcal mass',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '2',
      },
      {
        id: 2,
        fromType: 'seed',
        startedLifeOn: new Date(),
        currentPhase: 'flower',
        strain: 'queen',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '2',
      },
      {
        id: 3,
        fromType: 'cutting',
        startedLifeOn: new Date(),
        currentPhase: 'veg',
        strain: 'critcal mass',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '2',
      },
    ],
    harvestedPlants: [],
  },
  {
    id: 2,
    lights: [{type: 'CFL', wattage: '250', amount: '1'}],
    name: 'tent',
    lightHours: '18',
    roomDetails: {
      length: '1.5',
      height: '2',
      width: '1.5',
      restingTemp: '24',
      sealed: false,
      aircon: true,
      dehumidifer: false,
    },
    plants: [
      {
        id: 1,
        fromType: 'cutting',
        startedLifeOn: new Date(),
        currentPhase: 'veg',
        strain: 'critcal mass',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '3',
      },
      {
        id: 2,
        fromType: 'seed',
        startedLifeOn: new Date(),
        currentPhase: 'flower',
        strain: 'queen',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '3',
      },
      {
        id: 3,
        fromType: 'cutting',
        startedLifeOn: new Date(),
        currentPhase: 'veg',
        strain: 'critcal mass',
        veggingTime: '28',
        medium: 'coco',
        potSize: '13',
        batchId: '3',
      },
    ],
    harvestedPlants: [],
  },
];
export const fakeJournal = [
  {
    date: new Date(),
    envs: [
      {
        id: '',
        watered: [{date: new Date(), ph: '', ec: ''}],
        lightHours: '',
        plants: [],
        tasks: [
          {
            date: new Date(),
            details: {
              taskName: '',
              ph: '',
              ec: '',
              amt: '',
              timeTaken: '',
              notes: '',
            },
          },
        ],
      },
    ],
  },
];
