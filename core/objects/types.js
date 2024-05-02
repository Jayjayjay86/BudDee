export const plantObject = {
  birthday: new Date(),
  strain: {name: '', finish_time_days: 0},
  current_phase: '',
};
export const phaseObject = {title: ''};
export const lightObject = {
  light_on_hour: new Date(),
  light_off_hour: new Date(),
};
export const dehumidiferObject = {change_tank: new Date()};

export const solutionObject = {ph: 0, ec: 0, quantity: 0};
export const activityDetailsObject = {ph: 0, ec: 0, quantity: 0};

export const activityRecordObject = {
  date_performed: new Date(),
  time_taken_minutes: 0,
  action_performed: '',
  details: activityDetailsObject,
};
export const nutrientObject = {name: '', npk: (0, 0, 0)};
export const waterObject = {last_watered: new Date(), solution: solutionObject};

export const equipmentObjectLight = {
  name: '',
  wattage: 0,
  size: {l: 0, w: 0},
  type: '',
};
export const equipmentObjectPot = {type: '', size_liters: 0};
export const equipmentObjectNutrient = {
  grow: nutrientObject,
  bloom: nutrientObject,
};
export const equipmentObjectPump = {type: '', size: ''};
export const equipmentObjectTray = {size: {h: 0, l: 0, d: 0}, name: ''};
export const equipmentObjectBowser = {size: 0};
export const equipmentObjectTimer = {name: ''};
export const equipmentObjectAircon = {name: '', size_btu: 0};

export const operationObject = {
  name: '',
  start_date: new Date(),
  est_finish_date: new Date(),
  phase: phaseObject,
  light: lightObject,
  dehumid: dehumidiferObject,
  approx_flower_time_days: 0,
  water: waterObject,
  plants: [],

  activity_records: [],

  equipment: [
    {lights: []},
    {pots: []},
    {
      nutrients: [],
    },
    {pumps: []},
    {trays: []},
    {bowsers: []},
    {timers: []},
    {aircon: []},
  ],
};
export const phaseObjects = [
  {
    id: 'germ',
    title: 'germination',
    min_age_days: 0,
    max_age_days: 14,
    thresholds: {humidity_low_high: (90, 100), temp_low_high_C: (22, 24)},
  },
  {
    id: 'seed',
    title: 'seedling',
    min_age_days: 14,
    max_age_days: 42,
    thresholds: {humidity_low_high: (90, 100), temp_low_high_C: (22, 24)},
  },
  {
    id: 'cutting',
    title: 'cutting',
    min_age_days: 0,
    max_age_days: 14,
    thresholds: {humidity_low_high: (60, 90), temp_low_high_C: (24, 26)},
  },
  {
    id: 'clone_xsmall',
    title: 'clone (XS)',
    min_age_days: 14,
    max_age_days: 19,
    thresholds: {humidity_low_high: (60, 67), temp_low_high_C: (24, 26)},
  },
  {
    id: 'clone_small',
    title: 'clone (S)',
    min_age_days: 19,
    max_age_days: 40,
    thresholds: {humidity_low_high: (60, 67), temp_low_high_C: (24, 26)},
  },
  {
    id: 'clone',
    title: 'clone (M)',
    min_age_days: 40,
    max_age_days: 47,
    thresholds: {humidity_low_high: (60, 67), temp_low_high_C: (24, 26)},
  },
  {
    id: 'veg1',
    title: 'vegetating (week 1)',
    min_age_days: 35,
    max_age_days: 55,
    thresholds: {humidity_low_high: (60, 67), temp_low_high_C: (24, 27)},
  },
  {
    id: 'veg',
    title: 'vegetating (main)',
    min_age_days: 42,
    max_age_days: 68,
    thresholds: {humidity_low_high: (60, 67), temp_low_high_C: (24, 27)},
  },
  {
    id: 'flower0',
    title: 'flowering (<15 days)',
    min_age_days: 63,
    max_age_days: 77,
    thresholds: {humidity_low_high: (60, 67), temp_low_high_C: (24, 27)},
  },
  {
    id: 'flower',
    title: 'flowering (<45 days)',
    min_age_days: 76,
    max_age_days: 100,
    thresholds: {humidity_low_high: (60, 67), temp_low_high_C: (24, 26)},
  },
  {
    id: 'flower45',
    title: 'flowering (>45 days)',
    min_age_days: 76,
    max_age_days: 100,
    thresholds: {humidity_low_high: (60, 65), temp_low_high_C: (24, 25)},
  },
  {
    id: 'hang',
    title: 'hanging',
    min_age_days: 15,
    max_age_days: 21,
    thresholds: {humidity_low_high: (60, 65), temp_low_high_C: (24, 25)},
  },
];
