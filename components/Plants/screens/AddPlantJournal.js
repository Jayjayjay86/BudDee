import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {EnvironmentObject} from '../../../core/constants/Misc';

import BottomToolBar from '../../../core/components/Headers/BottomToolBar';
import CreateHeader from '../../../core/components/Headers/CreateHeader';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

const AddPlantJournal = ({navigation}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation} = useTranslation();

  const [envObject, setEnvObject] = useState(EnvironmentObject);

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handlePressNext = () => {
    navigation.navigate('Index');
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <CreateHeader colors={theme} message={'Plant Journal'} />
      <View style={styles.formContainer}>
        <Text>form</Text>
      </View>
      <BottomToolBar
        icons={icons}
        colors={theme}
        isDarkMode={isDarkMode}
        backMessage={
          translation.core && translation.core.headers.bottomToolBar.Back
        }
        handleGoBack={handleGoBack}
        handlePressNext={handlePressNext}
        nextMessage={
          translation.core && translation.core.headers.bottomToolBar.Save
        }
      />
    </View>
  );
};

export default AddPlantJournal;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  formContainer: {flex: 1},
});
