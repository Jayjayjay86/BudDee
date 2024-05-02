import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Journal = ({translation, colors}) => {
  const todaysTasks = [];
  const textColor = {color: colors.home.journal.textColor};

  const journalStyles = {backgroundColor: colors.core.background};
  return (
    <View style={[styles.journal, journalStyles]}>
      <Text style={[styles.heading, textColor]}>
        {translation.home && translation.home.journal.Heading}
      </Text>
      {todaysTasks.length < 1 ? (
        <View style={styles.entry}>
          <Text style={[styles.entryHeader, textColor]}>
            {translation.home && translation.home.journal.Nothing}
          </Text>
        </View>
      ) : (
        <View>
          {todaysTasks.map((entry, index) => (
            <View style={styles.entry}>
              <></>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Journal;

const styles = StyleSheet.create({
  journal: {padding: 10, margin: 5, height: '45%'},
  heading: {marginBottom: 20, fontFamily: 'Poppins-Regular', fontSize: 17},
  entry: {margin: 10},
  entryHeader: {fontFamily: 'Poppins-Regular'},
});
