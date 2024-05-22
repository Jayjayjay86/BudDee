import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailItem from './DetailItem';
import DeleteButton from '../../../core/components/DeleteButton';
import {getAge} from '../../../core/constants/Misc';

const DetailItems = ({translation, HandleDelete, theme, plantsData}) => {
  return (
    <View style={styles.container}>
      {plantsData.length > 0 &&
        plantsData.map((plant, plantIndex) => (
          <View style={styles.detailItems} key={plantIndex}>
            <View style={styles.form}>
              <DetailItem
                value={plant?.batchId}
                message={translation.core && translation.plants.plant.Batch}
              />
              <DetailItem
                value={plant?.strain.strainName}
                message={translation.core && translation.plants.plant.Strain}
              />
              <DetailItem
                value={getAge(new Date(plant?.startedLifeOn))}
                message={translation.core && translation.plants.plant.Age}
              />
              <DetailItem
                value={new Date(plant?.startedLifeOn).toLocaleDateString()}
                message={translation.core && translation.plants.plant.Started}
              />
            </View>

            <DeleteButton
              style={styles.deleteItem}
              onPress={HandleDelete}
              theme={theme}
            />
          </View>
        ))}
    </View>
  );
};

export default DetailItems;

const styles = StyleSheet.create({
  container: {flex: 1},
  detailItems: {margin: 10, flex: 1},
  detailItem: {},
  detailLabel: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  detailValue: {fontSize: 18, fontFamily: 'Poppins-Regular'},
  form: {flex: 1},
});
