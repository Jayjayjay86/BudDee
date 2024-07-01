import {StyleSheet, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {
  modalOverlayStyle,
  modalSelectorCancelStyle,
  modalSelectorCancelTextStyle,
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
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 30,
  },

  modalSelector: {flex: 1},
});
