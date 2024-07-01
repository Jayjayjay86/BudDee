import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {getEnvironmentById} from '../../../database/environments';
import {getPlantsByBatch} from '../../../database/plants';
import {getJournalByBatch} from '../../../database/journal';

const Journal = ({translation, colors, journal, selectedDate, navigation}) => {
  const textColor = {color: colors.home.journal.textColor};
  const dateTextColor = {color: colors.core.darkBorder};
  const linkTextColor = {color: colors.core.textColor};
  const valueTextColor = {color: colors.core.grey};
  const journalStyles = {
    backgroundColor: colors.core.background,
  };
  const HandlePressButton = async (id, index) => {
    const selectedEntries = journal[selectedDate];
    const selectedEntry = selectedEntries.items[index];
    switch (id) {
      case 'strain':
        navigation.navigate('journal', {
          journalEntry: {...journal[selectedDate][index]},
        });
        break;
      case 'batch':
        const selectedPlants = await getPlantsByBatch(selectedEntry.batchId);
        const selectedPlantJournals = await getJournalByBatch(
          selectedEntry.batchId,
        );

        navigation.navigate('plant', {
          plantData: JSON.stringify(selectedPlants),
          plantJournalData: JSON.stringify(selectedPlantJournals),
        });
        break;

      case 'env':
        const selectedEnv = await getEnvironmentById(selectedEntry.envId);

        navigation.navigate('env', {
          envData: JSON.stringify(selectedEnv[0]),
        });
        break;

      default:
        break;
    }
  };
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={[styles.heading, textColor]}>
          {translation.home && translation.home.journal.Heading}
        </Text>
        <Text style={[styles.dateText, dateTextColor]}> {selectedDate}</Text>
      </View>

      <ScrollView style={[styles.journal, journalStyles]}>
        {Object.keys(journal).filter(Fentry => Fentry === selectedDate).length >
        0 ? (
          <View style={styles.entrys}>
            {journal[selectedDate] &&
              journal[selectedDate].items.map((entry, entryIndex) => (
                <View key={entryIndex} style={styles.entry}>
                  <View style={styles.topBar}>
                    {entry.type === 'strain' && (
                      <TouchableOpacity
                        onPress={() => {
                          HandlePressButton('strain', entryIndex);
                        }}
                        style={styles.link}>
                        <Text style={[styles.linkText, linkTextColor]}>
                          {translation.home &&
                            translation.home.journal.StrainCreated}
                        </Text>
                        <Text style={[styles.valueText, valueTextColor]}>
                          {entry.name}
                        </Text>
                      </TouchableOpacity>
                    )}
                    {entry.type === 'env' && (
                      <TouchableOpacity
                        onPress={() => {
                          HandlePressButton('env', entryIndex);
                        }}
                        style={styles.link}>
                        <Text style={[styles.linkText, linkTextColor]}>
                          {translation.home &&
                            translation.home.journal.EnvironmentCreated}
                        </Text>
                        <Text style={[styles.valueText, valueTextColor]}>
                          {entry.name}
                        </Text>
                      </TouchableOpacity>
                    )}
                    {entry.type === 'batch' && (
                      <TouchableOpacity
                        onPress={() => {
                          HandlePressButton('batch', entryIndex);
                        }}
                        style={styles.link}>
                        <Text style={[styles.linkText, linkTextColor]}>
                          {entry.type === 'batch' && !entry.harvested
                            ? `Batch Created (${entry.amountStarted} plants )`
                            : `Harvested On: ${new Date(
                                entry.harvestedOn,
                              ).toLocaleDateString()}`}
                        </Text>
                        <Text style={[styles.valueText, valueTextColor]}>
                          {entry.name}
                        </Text>
                      </TouchableOpacity>
                    )}
                    {entry.type === 'water' && (
                      <TouchableOpacity
                        onPress={() => {
                          HandlePressButton('water', entryIndex);
                        }}
                        style={styles.link}>
                        <Text style={[styles.linkText, linkTextColor]}>
                          {translation.home &&
                            translation.home.journal.PlantsWatered}
                        </Text>
                        {/* <View style={styles.journalDetailRow}>
                          <Text>Amount:</Text>
                          <Text style={[styles.valueText, valueTextColor]}>
                            {entry.amount} {translation.home &&
                            translation.home.journal.Liters}
                          </Text>
                        </View>
                        <View style={styles.journalDetailRow}>
                          <Text>{translation.home &&
                            translation.home.journal.Ph}</Text>
                          <Text style={[styles.valueText, valueTextColor]}>
                            {entry.ph}
                          </Text>
                        </View> */}
                      </TouchableOpacity>
                    )}

                    {entry.type === 'delete_batch' && (
                      <>
                        <Text style={[styles.linkText, linkTextColor]}>
                          {translation.home &&
                            translation.home.journal.BatchDeleted}
                        </Text>
                      </>
                    )}
                    {entry.type === 'delete_plant' && (
                      <>
                        <Text style={[styles.linkText, linkTextColor]}>
                          {translation.home &&
                            translation.home.journal.PlantsDeleted}
                        </Text>
                      </>
                    )}
                    {entry.type === 'delete_env' && (
                      <>
                        <Text style={[styles.linkText, linkTextColor]}>
                          {translation.home &&
                            translation.home.journal.EnvironmentDeleted}
                        </Text>
                      </>
                    )}
                  </View>
                </View>
              ))}
          </View>
        ) : (
          <View style={styles.entry}>
            <Text style={[styles.entryHeader, textColor]}>
              {translation.home && translation.home.journal.Nothing}
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default Journal;

const styles = StyleSheet.create({
  topBar: {flexDirection: 'row', alignItems: 'center'},
  journal: {
    margin: 5,
    height: '40%',
  },
  journalDetailRow: {flexDirection: 'row'},
  headingContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: 5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    textAlign: 'center',
  },
  entrys: {},
  entry: {margin: 5, padding: 5},
  entryHeader: {fontFamily: 'Poppins-Regular'},
  actionDetail: {flexDirection: 'row', alignItems: 'center'},
  actionDetails: {},
  label: {fontSize: 19, fontFamily: 'Poppins-Light', flex: 1},
  value: {fontSize: 18, fontFamily: 'Poppins-Light'},
  valueText: {fontSize: 11, fontFamily: 'Poppins-SemiBold'},
  linkText: {fontSize: 15, fontFamily: 'Poppins-Regular'},
  dateText: {fontSize: 13, fontFamily: 'Poppins-Light'},
  link: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  date: {fontSize: 19, fontFamily: 'Poppins-SemiBold', textAlign: 'right'},
});
