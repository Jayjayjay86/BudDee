// lightmode
const loadingImage = require('../../../assets/images/splashscreen/transparent.png');
const backButton = require('../../../assets/images/buttons/back.png');
const nextButton = require('../../../assets/images/buttons/next.png');
const phButton = require('../../../assets/images/buttons/ph.png');
const ecButton = require('../../../assets/images/buttons/ec.png');
const timeButton = require('../../../assets/images/buttons/time.png');
const amountButton = require('../../../assets/images/buttons/amount.png');
const NutesButton = require('../../../assets/images/buttons/nutrients.png');
const repotButton = require('../../../assets/images/buttons/repot.png');
const trimButton = require('../../../assets/images/buttons/Trim.png');
const destroyButton = require('../../../assets/images/buttons/destroy.png');
const flushButton = require('../../../assets/images/buttons/flush.png');
const bugButton = require('../../../assets/images/buttons/bug.png');
const trainButton = require('../../../assets/images/buttons/train.png');
const defoliateButton = require('../../../assets/images/buttons/defoliate.png');
const harvestButton = require('../../../assets/images/buttons/harvest.png');
const waterButton = require('../../../assets/images/buttons/water.png');
const activityButton = require('../../../assets/images/buttons/actions.png');
const dateButton = require('../../../assets/images/buttons/date.png');
const journalButton = require('../../../assets/images/buttons/journal.png');
const plantButton = require('../../../assets/images/buttons/plant.png');
const moreToolsImage = require('../../../assets/images/buttons/more_tools.png');
const createButton = require('../../../assets/images/buttons/about.png');
// badges
const vegBadge = require('../../../assets/images/badges/veg.png');
const flowerBadge = require('../../../assets/images/badges/flower.png');
const hangingBadge = require('../../../assets/images/badges/hung.png');

const NoPlantsImage = require('../../../assets/images/no_plants.png');
const addPlantsButton = require('../../../assets/images/buttons/add_pots.png');
const activityIconImage = require('../../../assets/images/buttons/actions.png');
const potLogIconImage = require('../../../assets/images/buttons/add_pots.png');
const envLogIconImage = require('../../../assets/images/buttons/add_environments.png');
const calcIconImage = require('../../../assets/images/buttons/calculators.png');
const faqIconImage = require('../../../assets/images/buttons/faq.png');
const infoIconImage = require('../../../assets/images/buttons/about.png');
const buddeeLogo = require('../../../assets/images/icon.png');
const NoEnvsImage = require('../../../assets/images/no_envs.png');
const arrowImage = require('../../../assets/images/arrow.png');
const addEnvsButton = require('../../../assets/images/buttons/add_environments.png');
const HomeButtonImage = require('../../../assets/images/buttons/home.png');
const PlantsImage = require('../../../assets/images/buttons/pots.png');
const EnvironmentImage = require('../../../assets/images/buttons/environments.png');
const MoreImage = require('../../../assets/images/buttons/more.png');
const chartImage = require('../../../assets/images/buttons/charts.png');
const airImage = require('../../../assets/images/activity_buttons/air.png');
const checklistImage = require('../../../assets/images/activity_buttons/checklist.png');
// activity buttons
const containersImage = require('../../../assets/images/activity_buttons/containers.png');
const generalImage = require('../../../assets/images/activity_buttons/general.png');
const housekeepingImage = require('../../../assets/images/activity_buttons/housekeeping.png');
const humidityImage = require('../../../assets/images/activity_buttons/humidity.png');
const mediumsImage = require('../../../assets/images/activity_buttons/mediums.png');
const nutesImage = require('../../../assets/images/activity_buttons/nutes.png');
const phaseImage = require('../../../assets/images/activity_buttons/phase.png');
const repotImage = require('../../../assets/images/activity_buttons/repot.png');
const rotatingImage = require('../../../assets/images/activity_buttons/rotating.png');
const seedsImage = require('../../../assets/images/activity_buttons/seeds.png');
const smellImage = require('../../../assets/images/activity_buttons/smell.png');
const wateringImage = require('../../../assets/images/activity_buttons/watering.png');
const libraryImage = require('../../../assets/images/buttons/library.png');
const StrainImage = require('../../../assets/images/buttons/strain.png');
export const lightIcons = {
  others: {
    core: [backButton, nextButton, dateButton, createButton],
    misc: [addPlantsButton],
  },
  badge: [vegBadge, flowerBadge, hangingBadge],
  image: [arrowImage, loadingImage, buddeeLogo, NoPlantsImage, NoEnvsImage],
  buttons: {
    toolbox: [
      potLogIconImage,
      envLogIconImage,
      activityIconImage,
      moreToolsImage,
    ],
    bottomTabs: [HomeButtonImage, PlantsImage, EnvironmentImage, MoreImage],
    settings: [buddeeLogo],
    moreTools: [
      activityIconImage,
      addPlantsButton,
      addEnvsButton,
      calcIconImage,
      chartImage,

      libraryImage,
      faqIconImage,
    ],
    actions: {
      newAction: [plantButton, activityButton, calcIconImage, journalButton],
      options: {
        water: [amountButton, phButton, ecButton, timeButton],
        nutes: [amountButton, journalButton],
        bugs: [journalButton],
        repot: [journalButton, amountButton],
        trim: [journalButton, amountButton],
        train: [journalButton, amountButton],
        defoliate: [journalButton, amountButton],
        flush: [amountButton, journalButton],
        harvest: [amountButton],
        destroy: [journalButton],
      },
    },
    guides: {
      library: [
        checklistImage,
        housekeepingImage,
        smellImage,
        StrainImage,
        containersImage,
        mediumsImage,
        airImage,
        humidityImage,
        nutesImage,
        phaseImage,
        wateringImage,
        seedsImage,
        repotImage,
        bugButton,
        rotatingImage,
        generalImage,
      ],
      others: [
        phButton,
        ecButton,
        timeButton,
        amountButton,
        NutesButton,
        repotButton,
        trimButton,
        destroyButton,
        flushButton,
        bugButton,
        trainButton,
        defoliateButton,
        harvestButton,
        waterButton,
        infoIconImage,
      ],
    },
  },
};
// dark mode

const arrowImageDark = require('../../../assets/images/arrow.png');
const loadingImageDark = require('../../../assets/images/splashscreen/transparent.png');
const BuddeeLogoDark = require('../../../assets/images/iconDark.png');
const NoPlantsImageDark = require('../../../assets/images/no_plants.png');
const NoEnvironmentsImageDark = require('../../../assets/images/no_envs.png');

// badges dark
const vegBadgeDark = require('../../../assets/images/badges/veg.png');
const flowerBadgeDark = require('../../../assets/images/badges/flower.png');
const hangingBadgeDark = require('../../../assets/images/badges/hung.png');
// buttons dark
const StrainImageDark = require('../../../assets/images/buttons/dark/strain.png');
const libraryImageDark = require('../../../assets/images/buttons/dark/library.png');
const addPlantsButtonDark = require('../../../assets/images/buttons/dark/add_pots.png');
const activityIconImageDark = require('../../../assets/images/buttons/dark/actions.png');
const potLogIconImageDark = require('../../../assets/images/buttons/dark/add_pots.png');
const envLogIconImageDark = require('../../../assets/images/buttons/dark/add_environments.png');
const calcIconImageDark = require('../../../assets/images/buttons/dark/calculators.png');
const faqIconImageDark = require('../../../assets/images/buttons/dark/faq-food.png');
const infoIconImageDark = require('../../../assets/images/buttons/dark/about.png');
const addEnvsButtonDark = require('../../../assets/images/buttons/dark/add_environments.png');
const HomeButtonImageDark = require('../../../assets/images/buttons/dark/home.png');
const PlantsImageDark = require('../../../assets/images/buttons/dark/pots.png');
const EnvironmentImageDark = require('../../../assets/images/buttons/dark/environments.png');
const MoreImageDark = require('../../../assets/images/buttons/dark/more.png');
const chartImageDark = require('../../../assets/images/buttons/dark/charts.png');

const backButtonDark = require('../../../assets/images/buttons/dark/back.png');
const nextButtonDark = require('../../../assets/images/buttons/dark/next.png');
const phButtonDark = require('../../../assets/images/buttons/dark/ph.png');
const ecButtonDark = require('../../../assets/images/buttons/dark/ec.png');
const timeButtonDark = require('../../../assets/images/buttons/dark/time.png');
const amountButtonDark = require('../../../assets/images/buttons/dark/amount.png');
const NutesButtonDark = require('../../../assets/images/buttons/dark/nutrients.png');
const repotButtonDark = require('../../../assets/images/buttons/dark/repot.png');
const trimButtonDark = require('../../../assets/images/buttons/dark/Trim.png');
const destroyButtonDark = require('../../../assets/images/buttons/dark/destroy.png');
const flushButtonDark = require('../../../assets/images/buttons/dark/flush.png');
const bugButtonDark = require('../../../assets/images/buttons/dark/bug.png');
const trainButtonDark = require('../../../assets/images/buttons/dark/train.png');
const defoliateButtonDark = require('../../../assets/images/buttons/dark/defoliate.png');
const harvestButtonDark = require('../../../assets/images/buttons/dark/harvest.png');
const waterButtonDark = require('../../../assets/images/buttons/dark/water.png');
const activityButtonDark = require('../../../assets/images/buttons/dark/actions.png');
const dateButtonDark = require('../../../assets/images/buttons/dark/date.png');
const journalButtonDark = require('../../../assets/images/buttons/dark/journal.png');
const plantButtonDark = require('../../../assets/images/buttons/dark/plant.png');
const moreToolsImageDark = require('../../../assets/images/buttons/dark/more_tools.png');
const createButtonDark = require('../../../assets/images/buttons/dark/about.png');
// activity buttons
const airImageDark = require('../../../assets/images/activity_buttons/dark/air.png');
const checklistImageDark = require('../../../assets/images/activity_buttons/dark/checklist.png');
const containersImageDark = require('../../../assets/images/activity_buttons/dark/containers.png');
const generalImageDark = require('../../../assets/images/activity_buttons/dark/general.png');
const housekeepingImageDark = require('../../../assets/images/activity_buttons/dark/housekeeping.png');
const humidityImageDark = require('../../../assets/images/activity_buttons/dark/humidity.png');
const mediumsImageDark = require('../../../assets/images/activity_buttons/dark/mediums.png');
const nutesImageDark = require('../../../assets/images/activity_buttons/dark/nutes.png');
const phaseImageDark = require('../../../assets/images/activity_buttons/dark/phase.png');
const repotImageDark = require('../../../assets/images/activity_buttons/dark/repot.png');
const rotatingImageDark = require('../../../assets/images/activity_buttons/dark/rotating.png');
const seedsImageDark = require('../../../assets/images/activity_buttons/dark/seeds.png');
const smellImageDark = require('../../../assets/images/activity_buttons/dark/smell.png');
const wateringImageDark = require('../../../assets/images/activity_buttons/dark/watering.png');
const pestsImageDark = require('../../../assets/images/buttons/bug.png');
export const darkIcons = {
  others: {
    core: [backButtonDark, nextButtonDark, dateButtonDark, createButtonDark],
    misc: [addPlantsButtonDark],
  },
  badge: [vegBadgeDark, flowerBadgeDark, hangingBadgeDark],
  image: [
    arrowImageDark,
    loadingImageDark,
    BuddeeLogoDark,
    NoPlantsImageDark,
    NoEnvironmentsImageDark,
  ],
  buttons: {
    toolbox: [
      potLogIconImageDark,
      envLogIconImageDark,
      activityIconImageDark,
      moreToolsImageDark,
    ],
    bottomTabs: [
      HomeButtonImageDark,
      PlantsImageDark,
      EnvironmentImageDark,
      MoreImageDark,
    ],
    settings: [BuddeeLogoDark],
    moreTools: [
      activityIconImageDark,
      addPlantsButtonDark,
      addEnvsButtonDark,
      calcIconImageDark,
      chartImageDark,

      libraryImageDark,
      faqIconImageDark,
    ],
    actions: {
      newAction: [
        plantButtonDark,
        activityButtonDark,
        calcIconImageDark,
        journalButtonDark,
      ],
      options: {
        water: [amountButtonDark, phButtonDark, ecButtonDark, timeButtonDark],
        nutes: [amountButtonDark, journalButtonDark],
        bugs: [journalButtonDark],
        repot: [journalButtonDark, amountButtonDark],
        trim: [journalButtonDark, amountButtonDark],
        train: [journalButtonDark, amountButtonDark],
        defoliate: [journalButtonDark, amountButtonDark],
        flush: [amountButtonDark, journalButtonDark],
        harvest: [amountButtonDark],
        destroy: [journalButtonDark],
      },
    },
    guides: {
      library: [
        checklistImageDark,
        housekeepingImageDark,
        smellImageDark,
        StrainImageDark,
        containersImageDark,
        mediumsImageDark,
        airImageDark,
        humidityImageDark,
        nutesImageDark,
        phaseImageDark,
        wateringImageDark,
        seedsImageDark,
        repotImageDark,
        pestsImageDark,
        rotatingImageDark,
        generalImageDark,
      ],
      others: [
        phButtonDark,
        ecButtonDark,
        timeButtonDark,
        amountButtonDark,
        NutesButtonDark,
        repotButtonDark,
        trimButtonDark,
        destroyButtonDark,
        flushButtonDark,
        bugButtonDark,
        trainButtonDark,
        defoliateButtonDark,
        harvestButtonDark,
        waterButtonDark,
        infoIconImageDark,
      ],
    },
  },
};
