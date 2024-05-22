import {StyleSheet, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {
  modalOverlayStyle,
  modalSelectorCancelStyle,
  modalSelectorCancelTextStyle,
  modalSelectorOptionContainerStyle,
  modalSelectorOptionTextStyle,
  themeOptionContainerStyle,
} from '../../../core/constants/Styles';
import {useTheme} from '../../../core/constants/Theme/ContextManager';
const ThemeSelector = ({
  setPageHasBeenEdited,
  translation,
  newUserOptions,
  setNewUserOptions,
}) => {
  const {toggleTheme} = useTheme();
  return (
    <View style={styles.formInput}>
      <ModalSelector
        overlayStyle={modalOverlayStyle}
        optionContainerStyle={themeOptionContainerStyle}
        style={styles.modalSelector}
        optionTextStyle={modalSelectorOptionTextStyle}
        cancelStyle={modalSelectorCancelStyle}
        cancelTextStyle={modalSelectorCancelTextStyle}
        data={translation.settings && translation.settings.settings.modes}
        initValue={
          newUserOptions.preferDarkMode
            ? translation.settings && translation.settings.settings.DarkMode
            : translation.settings && translation.settings.settings.LightMode
        }
        onChange={theme => {
          const newTheme = theme.key === 'dark' ? 'dark' : 'light';
          toggleTheme();

          setNewUserOptions({
            ...newUserOptions,
            preferDarkMode: newTheme === 'dark',
          });
          setPageHasBeenEdited(true);
        }}
        listType={'SCROLLVIEW'}
        animationType={'fade'}
      />
    </View>
  );
};

export default ThemeSelector;

const styles = StyleSheet.create({
  container: {},
  form: {marginBottom: 20},
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 30,
  },
  optionInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 30,
  },
  optionExtra: {
    margin: 5,
    marginTop: 10,
    marginLeft: 15,
    fontFamily: 'Poppins-Bold',
  },
  optionImage: {width: 40, height: 40, marginRight: 20},
  formImage: {width: 40, height: 40, marginRight: 20},
  optionTextInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  dateMarker: {
    borderBottomColor: 'black',
    fontFamily: 'Poppins-Regular',
  },
  actionPickerItem: {},
  modalSelector: {flex: 1},
});
