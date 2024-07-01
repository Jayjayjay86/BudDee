import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import PlantsDisplay from './PlantsDisplay';

import PhaseButtons from './PhaseButtons';

const PlantsList = ({
  icons,
  colors,
  environmentData,
  translation,
  plants,
  HandleLongPressPlant,
  HandlePressPlant,
  pressNewBatchButton,
  pressNewAction,
  selectedPlants,
  showDeleteBatch,
  setShowDeleteBatch,
  showFinishBatch,
  setShowFinishBatch,
  showWaterBatch,
  setShowWaterBatch,
  journalEntry,
  setJournalEntry,
  loadData,
  navigation,
  isDarkMode,
}) => {
  const [expandedBatch, setExpandedBatch] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleMoreInfo = index => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.envList}>
        {environmentData &&
          environmentData.map((item, itemIndex) => (
            <View key={itemIndex}>
              <PhaseButtons
                translation={translation}
                colors={colors}
                setExpandedBatch={setExpandedBatch}
                setExpandedIndex={setExpandedIndex}
                expandedBatch={expandedBatch}
                expandedIndex={expandedIndex}
                environmentData={environmentData}
                HandlePressPlant={HandlePressPlant}
                HandleLongPressPlant={HandleLongPressPlant}
                icons={icons}
                plants={plants}
                toggleMoreInfo={toggleMoreInfo}
                pressNewBatchButton={pressNewBatchButton}
                pressNewAction={pressNewAction}
                item={item}
                itemIndex={itemIndex}
              />

              <PlantsDisplay
                loadData={loadData}
                environmentData={environmentData}
                journalEntry={journalEntry}
                setJournalEntry={setJournalEntry}
                showDeleteBatch={showDeleteBatch}
                setShowDeleteBatch={setShowDeleteBatch}
                showFinishBatch={showFinishBatch}
                setShowFinishBatch={setShowFinishBatch}
                showWaterBatch={showWaterBatch}
                setShowWaterBatch={setShowWaterBatch}
                expandedBatch={expandedBatch}
                setExpandedBatch={setExpandedBatch}
                translation={translation}
                setExpandedIndex={setExpandedIndex}
                item={item}
                HandleLongPressPlant={HandleLongPressPlant}
                HandlePressPlant={HandlePressPlant}
                itemIndex={itemIndex}
                icons={icons}
                theme={colors}
                plants={plants}
                expandedIndex={expandedIndex}
                selectedPlants={selectedPlants}
                navigation={navigation}
                isDarkMode={isDarkMode}
              />
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default PlantsList;

const styles = StyleSheet.create({
  container: {height: '100%'},
  envList: {},
  envLinks: {},
  envName: {flex: 1, fontSize: 22, margin: 10},
  actionLinkText: {fontSize: 15},
  envPlantAmount: {fontSize: 22, margin: 5},
  arrow: {width: 15, height: 15, margin: 5},
  phaseArrow: {width: 12, height: 12, marginHorizontal: 5},
  phasesContainer: {margin: 10},
  phaseContainer: {},
  phaseTitle: {fontSize: 17, fontFamily: 'Poppins-Regular', flex: 1},
  plantsContainer: {width: '95%', margin: 10, paddingBottom: 10},
  plantLink: {
    marginHorizontal: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  strainLabel: {alignItems: 'center'},
  link: {},
});
