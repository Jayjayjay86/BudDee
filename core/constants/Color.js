export const CoreColor = {
  primary: 'rgba(202,102,36,1)', //leather brown
  primaryBorder: 'rgba(139,58,5,1)',
  lightGrey: 'rgba(200,200,200,0.8)',
  lightest: 'rgba(235,235,230,1)',
  darkest: 'rgba(68, 20, 4, 1)',
  black: 'rgba(1,1,1,1)',
  blackBlue: 'rgba(1,1,45,1)',
  white: 'rgba(250,250,250,1)',
  cream: 'rgba(249,203,133,.8)',
  lessCream: 'rgba(249,203,133,.7)',
  leastCream: 'rgba(249,203,133,.2)',
  darkText: 'rgba(150,136,113,1)',
  darkBackground: 'rgba(38,66,85,1)',
  lightBorder: 'rgba(212,155,80,1)',
  darkDarkest: 'rgba(15,18,31,1)',
  greyDark: 'rgba(113,122,123,1)',
  plantGreen: 'rgba(0,122,0,0.3)',
  deleteRed: 'rgba(170,0,0,0.7)',
  calculate: 'rgba(0,122,0,0.7)',
  softGrey: 'rgba(235,235,230,0.3)',
};
export const colorMode = async isDarkmode => {
  try {
    if (isDarkmode) {
      return {
        // dark

        library: {textColor: CoreColor.darkText},
        core: {
          calculate: CoreColor.calculate,
          delete: CoreColor.deleteRed,
          plantGreen: CoreColor.plantGreen,
          background: CoreColor.darkBackground,
          darkBorder: CoreColor.darkDarkest,
          textColor: CoreColor.darkText,
          lightBorder: CoreColor.lightBorder,
          lightestBorder: CoreColor.softGrey,
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
    }

    return {
      // light

      library: {textColor: CoreColor.darkest},
      core: {
        calculate: CoreColor.calculate,
        delete: CoreColor.deleteRed,
        plantGreen: CoreColor.plantGreen,
        background: CoreColor.white,
        activityIndicator: CoreColor.darkGrey,
        textColor: CoreColor.darkest,
        lightestBorder: CoreColor.softGrey,
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
      },
      settings: {
        header: {
          backgroundColor: CoreColor.cream,
          borderColor: CoreColor.darkest,
        },
        list: {
          backgroundColor: CoreColor.primary,
          textColor: CoreColor.black,
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
  } catch (error) {
    console.error('shitson', error);
  }
};
