import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ModalHeader from '../../../../core/components/Headers/ModalHeader';
import {
  modalContainerStyle,
  modalOverlayStyle,
  textInputStyle,
} from '../../../../core/constants/Styles';

import DatePicker from 'react-native-date-picker';

const ConfirmWaterBatch = ({
  translation,

  isVisible,
  setIsVisible,
  icons,
  theme,
  navigation,
  isDarkMode,
  journalEntry,
  setJournalEntry,
  confirmWaterBatchJournal,
}) => {
  const textStyles = {color: theme.plants.new.textColor};
  const [datePickerVisible, setDatePickerVisible] = useState();
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
      style={styles.container}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={theme}
            navigation={navigation}
            message="Water Plants"
            actionLabel={
              translation.actions && translation.actions.newAction.ActionLabel
            }
            action={confirmWaterBatchJournal}
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />
          <View style={styles.formContainer}>
            <View style={styles.inputRow}>
              <Text style={styles.label}>
                {translation.plants && translation.plants.other.AmountLiters}
              </Text>
              <TextInput
                style={textInputStyle}
                value={journalEntry.amount}
                keyboardType="numeric"
                onChangeText={value => {
                  setJournalEntry(prevState => ({...prevState, amount: value}));
                }}
              />
            </View>
            <View style={styles.inputRow}>
              <Text style={styles.label}>
                {translation.plants && translation.plants.other.Ph}
              </Text>
              <TextInput
                style={textInputStyle}
                value={journalEntry.ph}
                keyboardType="numeric"
                onChangeText={value => {
                  setJournalEntry(prevState => ({...prevState, ph: value}));
                }}
              />
            </View>
            <View style={styles.inputRow}>
              <Text style={styles.label}>
                {translation.plants && translation.plants.other.Ec}
              </Text>
              <TextInput
                style={textInputStyle}
                value={journalEntry.ec}
                keyboardType="numeric"
                onChangeText={value => {
                  setJournalEntry(prevState => ({...prevState, ec: value}));
                }}
              />
            </View>
            <View style={styles.inputRow}>
              <Text style={styles.label}>
                {translation.plants && translation.plants.other.Ppm}
              </Text>
              <TextInput
                style={textInputStyle}
                value={journalEntry.ppm}
                keyboardType="numeric"
                onChangeText={value => {
                  setJournalEntry(prevState => ({...prevState, ppm: value}));
                }}
              />
            </View>
            <View style={styles.inputRow}>
              <Text style={[styles.label, textStyles]}>
                {translation.plants && translation.plants.other.Date}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setDatePickerVisible(prevState => !prevState);
                }}>
                <Text style={[styles.dateMarker, textStyles]}>
                  {journalEntry.date.toLocaleDateString()}
                </Text>
              </TouchableOpacity>

              <DatePicker
                theme={isDarkMode ? 'dark' : 'light'}
                title={'Date'}
                cancelText={translation.core && translation.core.Cancel}
                confirmText={translation.core && translation.core.Confirm}
                locale={translation.core && translation.core.Code}
                mode="date"
                date={journalEntry.date}
                style={styles.datePicker}
                modal
                open={datePickerVisible}
                value={journalEntry.date ? journalEntry.date : ''}
                onConfirm={date => {
                  setJournalEntry(prevState => ({...prevState, date: date}));
                  setDatePickerVisible(false);
                }}
                onCancel={() => {
                  setDatePickerVisible(false);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmWaterBatch;

const styles = StyleSheet.create({
  container: {},
  formContainer: {
    width: '100%',
    margin: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRow: {flexDirection: 'row', margin: 5},
  label: {flex: 1, fontFamily: 'Poppins-Regular', fontSize: 19},
  datePicker: {},
  dateMarker: {
    fontFamily: 'Poppins-Regular',
    fontSize: 19,
    borderBottomWidth: 2,
  },
  formText: {fontSize: 20, fontFamily: 'Poppins-Regular'},
});
