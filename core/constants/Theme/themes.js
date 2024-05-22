import {CoreColor} from '../Color';

export const light = {
  library: {
    textColor: CoreColor.darkest,
    borderColor: CoreColor.primary,
    backgroundColor: CoreColor.cream,
  },
  core: {
    calculate: CoreColor.calculate,
    delete: CoreColor.deleteRed,
    lessCream: CoreColor.leastCream,
    plantGreen: CoreColor.plantGreen,
    background: CoreColor.white,
    darkBorder: CoreColor.darkDarkest,
    lightBorder: CoreColor.lightBorder,
    activityIndicator: CoreColor.greyDark,
    textColor: CoreColor.darkest,
    white: CoreColor.lessCream,
    primary: CoreColor.primary,
    bottomtabs: {
      backgroundColor: CoreColor.primary,
      borderColor: CoreColor.primaryBorder,
      textColor: CoreColor.darkest,
    },
    header: {
      backgroundColor: CoreColor.primary,
      borderColor: CoreColor.primaryBorder,
      textColor: CoreColor.darkest,
    },
    horizontalBreak: CoreColor.lightest,
  },
  home: {
    toolbox: {
      buttonBackgroundColor: CoreColor.primary,
      borderColor: CoreColor.primary,
      buttonBorderColor: CoreColor.primaryBorder,

      textColor: CoreColor.darkest,
    },
    calenderbar: {
      borderColor: CoreColor.primary,
      textColor: CoreColor.darkest,
    },
    journal: {textColor: CoreColor.darkest},
  },
  plants: {
    button: {
      backgroundColor: CoreColor.primary,
      borderColor: CoreColor.primaryBorder,
    },
    modal: {},
    new: {
      backgroundColor: CoreColor.primary,
      borderColor: CoreColor.primary,
      textColor: CoreColor.darkest,
      nameInputBorder: CoreColor.darkest,
    },
  },
  envs: {
    button: {
      backgroundColor: CoreColor.primary,
      borderColor: CoreColor.primaryBorder,
    },
    new: {
      backgroundColor: CoreColor.primary,
      borderColor: CoreColor.primary,
      textColor: CoreColor.darkest,
      nameInputBorder: CoreColor.darkest,
      fill: CoreColor.primary,
      unfill: CoreColor.cream,
    },
    noEnvs: {background: CoreColor.white},
  },
  settings: {
    save: {
      backgroundColor: CoreColor.cream,
      borderColor: CoreColor.darkest,
      textColor: CoreColor.cream,
    },
    header: {
      backgroundColor: CoreColor.cream,
      borderColor: CoreColor.darkest,
    },
    list: {
      backgroundColor: CoreColor.primary,
      textColor: CoreColor.darkest,
    },
    moreTools: {
      backgroundColor: CoreColor.primary,
      borderColor: CoreColor.primary,
      textColor: CoreColor.darkest,
    },
  },
  faq: {
    textColor: CoreColor.darkest,
    cardBorder: CoreColor.darkest,
    cardBackground: CoreColor.cream,
    cardBackgroundInner: CoreColor.lessCream,
    cardBackgroundTextInner: CoreColor.leastCream,
  },
};

export const dark = {
  library: {textColor: CoreColor.darkText},
  core: {
    calculate: CoreColor.calculate,
    delete: CoreColor.deleteRed,
    plantGreen: CoreColor.plantGreen,
    background: CoreColor.darkBackground,
    darkBorder: CoreColor.darkDarkest,
    textColor: CoreColor.darkText,
    lightBorder: CoreColor.lightBorder,
    white: CoreColor.white,
    bottomtabs: {
      backgroundColor: CoreColor.darkBackground,
      borderColor: CoreColor.lightBorder,
      textColor: CoreColor.darkText,
    },
    header: {
      backgroundColor: CoreColor.darkBackground,
      borderColor: CoreColor.black,
      textColor: CoreColor.darkText,
    },
    horizontalBreak: CoreColor.lightBorder,
  },
  home: {
    toolbox: {
      buttonBackgroundColor: CoreColor.darkBackground,
      borderColor: CoreColor.lightBorder,
      buttonBorderColor: CoreColor.lightBorder,

      textColor: CoreColor.darkText,
    },
    calenderbar: {
      backgroundColor: CoreColor.darkBackground,
      borderColor: CoreColor.lightBorder,
      textColor: CoreColor.darkText,
    },
    journal: {textColor: CoreColor.darkText},
  },
  plants: {
    button: {
      backgroundColor: CoreColor.darkBackground,
      borderColor: CoreColor.lightBorder,
    },
    modal: {},
    new: {
      backgroundColor: CoreColor.darkBackground,
      borderColor: CoreColor.lightBorder,
      textColor: CoreColor.darkText,
      nameInputBorder: CoreColor.lightBorder,
    },
  },
  envs: {
    button: {
      backgroundColor: CoreColor.darkBackground,
      borderColor: CoreColor.lightBorder,
    },
    new: {
      backgroundColor: CoreColor.darkBackground,
      borderColor: CoreColor.lightBorder,
      textColor: CoreColor.darkText,
      nameInputBorder: CoreColor.lightBorder,
      fill: CoreColor.lightBorder,
      unfill: CoreColor.darkDarkest,
    },
    noEnvs: {background: CoreColor.greyDark},
  },
  settings: {
    save: {
      backgroundColor: CoreColor.cream,
      borderColor: CoreColor.darkest,
      textColor: CoreColor.darkest,
    },
    header: {
      backgroundColor: CoreColor.darkBackground,
      borderColor: CoreColor.darkText,
    },
    list: {
      backgroundColor: CoreColor.darkBackground,
      textColor: CoreColor.darkText,
    },
    moreTools: {
      backgroundColor: CoreColor.darkBackground,
      borderColor: CoreColor.black,
      textColor: CoreColor.darkText,
    },
  },
  faq: {
    textColor: CoreColor.darkText,
    cardBorder: CoreColor.lightBorder,
    cardBackground: CoreColor.darkDarkest,
    cardBackgroundInner: CoreColor.darkText,
    cardTextInner: CoreColor.white,
  },
};
