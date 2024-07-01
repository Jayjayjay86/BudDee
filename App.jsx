import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/navigationStack';
import {DefaultOptionsObject} from './core/constants/Misc';
import 'moment';
import SplashScreen from 'react-native-splash-screen';
import LoadingScreen from './core/components/Loading/LoadingScreen';
import Disclaimer from './core/components/Loading/Disclaimer';
import {createOptions, getOptions, updateOptions} from './database/options';
import {ThemeProvider} from './core/constants/Theme/ContextManager';
import TranslationProvider from './core/constants/Locales/TranslationContext';
import {dailyPlantUpdate} from './database/journal';

function App() {
  const [isAgreed, setIsAgreed] = useState(false);

  const [appIsReady, setAppIsReady] = useState(false);
  const [userOptions, setUserOptions] = useState(DefaultOptionsObject);

  const pressAccept = async () => {
    updateOptions({...userOptions, isAgreed: true});
    await prepare();
  };
  const pressDecline = () => {
    prepare();
  };
  async function prepare() {
    setAppIsReady(false);
    try {
      // await dailyPlantUpdate();
    } catch {}
    try {
      const options = await getOptions();

      if (options.length < 1) {
        await createOptions(DefaultOptionsObject);
        setUserOptions(DefaultOptionsObject);
        SplashScreen.hide();
        setAppIsReady(true);
        return;
      }

      if (options[0].isAgreed) {
        setIsAgreed(true);
      }
      setUserOptions(options[0]);
      SplashScreen.hide();
      setAppIsReady(true);
      return;
    } catch (error) {
      console.error('Error preparing the app:', error);
    }
  }

  useEffect(() => {
    prepare();
  }, []);
  console.log('bumbum', userOptions);
  const userTheme = userOptions.preferDarkMode ? 'dark' : 'light';
  const userTranslation = userOptions.preferredLanguage;

  return (
    <ThemeProvider userTheme={userTheme}>
      <TranslationProvider userTranslation={userTranslation}>
        {!appIsReady ? (
          <LoadingScreen />
        ) : (
          <>
            {!isAgreed ? (
              <Disclaimer
                userOptions={userOptions}
                setUserOptions={setUserOptions}
                pressAccept={pressAccept}
                pressDecline={pressDecline}
              />
            ) : (
              <NavigationContainer>
                <StackNavigator />
              </NavigationContainer>
            )}
          </>
        )}
      </TranslationProvider>
    </ThemeProvider>
  );
}
export default App;
