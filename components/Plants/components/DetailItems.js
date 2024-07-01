import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailItem from './DetailItem';
import DeleteButton from '../../../core/components/DeleteButton';

const DetailItems = ({
  translation,
  HandleDelete,
  theme,
  plantsData,
  plantsJournal,
}) => {
  const getAgeOfPlant = journal => {
    if (journal.currentPhase === 'veg') {
      return [`${Number(journal.vegTime)} Days Old`, ''];
    } else if (journal.currentPhase === 'flower') {
      return [
        `${Number(journal.vegTime) + Number(journal.flowerTime)} Days Old`,
        `(veg:${journal.vegTime}/flower:${journal.flowerTime})`,
      ];
    } else if (journal.currentPhase === 'hang') {
      return [
        `${
          Number(journal.vegTime) +
          Number(journal.flowerTime) +
          Number(journal.hangTime)
        } Days Old`,
        `(veg:${journal.vegTime}/flower:${journal.flowerTime}/hanging:${journal.flowerTime})`,
      ];
    }
    journal.flowerTime;
    journal.hangTime;
  };
  return (
    <ScrollView style={styles.container}>
      {plantsData.length > 0 &&
        plantsData.map((plant, plantIndex) => (
          <View style={styles.detailItems} key={plantIndex}>
            <View style={styles.form}>
              <DetailItem
                theme={theme}
                value={plant?.batchId}
                message={translation.core && translation.plants.plant.Batch}
              />
              <DetailItem
                theme={theme}
                value={plant?.strain.strainName}
                message={translation.core && translation.plants.plant.Strain}
              />
              <DetailItem
                theme={theme}
                value={plant?.currentPhase}
                message={
                  translation.plants && translation.plants.other.CurrentPhase
                }
              />
              <DetailItem
                theme={theme}
                value={`${getAgeOfPlant(plantsJournal)[0]}`}
                value2={`${getAgeOfPlant(plantsJournal)[1]}`}
                message={translation.core && translation.plants.plant.Age}
              />
              <DetailItem
                theme={theme}
                value={new Date(plantsJournal?.dateAdded).toLocaleDateString()}
                message={translation.core && translation.plants.plant.Started}
              />
            </View>

            <DeleteButton
              translation={translation}
              style={styles.deleteItem}
              onPress={HandleDelete}
              theme={theme}
            />
          </View>
        ))}
    </ScrollView>
  );
};

export default DetailItems;

const styles = StyleSheet.create({
  container: {height: '100%'},
  detailItems: {margin: 15},
  detailLabel: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  detailValue: {fontSize: 18, fontFamily: 'Poppins-Regular'},
  form: {},
});
