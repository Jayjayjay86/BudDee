import {StatusBar, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {EnvironmentObject} from '../../../core/constants/Misc';

import BottomToolBar from '../../../core/components/Headers/BottomToolBar';
import CreateHeader from '../../../core/components/Headers/CreateHeader';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';
import ModalSelector from 'react-native-modal-selector';
import DatePicker from 'react-native-date-picker';

const AddEnvJournal = ({navigation}) => {
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
      <CreateHeader colors={theme} message={'Environment Journal'} />
      <View style={styles.formContainer}>
        <ModalSelector initValue="Select Environment" />
        <DatePicker date={new Date()} mode="date" />
        <TextInput placeholder="Other Notes" />
        <TextInput placeholder="Plants Distance From Lights" />
        <TextInput placeholder="Temperature" />
        <TextInput placeholder="Humidity" />
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

export default AddEnvJournal;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  formContainer: {flex: 1},
});
