import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {plantsByBatch} from '../../../core/constants/Misc';
import FinishPlantButton from './FinishPlantButton';
import {newEntry, removeBatch, waterBatch} from '../../../database/journal';
import {
  getPlantsByBatch,
  removePlantsByBatch,
  waterPlantsByBatch,
} from '../../../database/plants';
import {
  getEnvironmentById,
  updateEnvironment,
} from '../../../database/environments';
import WaterPlantButton from './WaterPlantButton';
import DeleteBatchButton from './DeleteBatchButton';
import ConfirmDeleteBatch from '../screens/modal/ConfirmDeleteBatch';
import ConfirmFinishBatch from '../screens/modal/ConfirmFinishBatch';
import ConfirmWaterBatch from '../screens/modal/ConfirmWaterBatch';

const PlantsDisplay = ({
  expandedIndex,
  itemIndex,
  navigation,
  isDarkMode,
  translation,
  icons,
  theme,
  plants,
  HandlePressPlant,
  HandleLongPressPlant,
  item,
  selectedPlants,
  environmentData,
  loadData,
}) => {
  const [selectedEnv, setSelectedEnv] = useState({});
  const [showWaterBatch, setShowWaterBatch] = useState(false);
  const [showFinishBatch, setShowFinishBatch] = useState(false);
  const [showDeleteBatch, setShowDeleteBatch] = useState(false);
  const [expandedVegIndex, setExpandedVegIndex] = useState(null);
  const [expandedFlowerIndex, setExpandedFlowerIndex] = useState(null);
  const [expandedHangingIndex, setExpandedHangingIndex] = useState(null);
  const [journalEntry, setJournalEntry] = useState({
    amount: '',
    ph: '',
    ec: '',
    ppm: '',
    date: new Date(),
  });

  const confirmFinishBatchJournal = async () => {
    const batchPlants = await getPlantsByBatch(journalEntry.selectedBatchId);
    const environmentObject = await getEnvironmentById(
      journalEntry.selectedEnvId,
    );

    // const finishedEntry = await newEntry({
    //   type: 'finish_batch',
    //   env: environmentObject,
    //   plants: [...batchPlants],
    //   amount: journalEntry.amount,
    //   date: journalEntry.date,
    // });

    // await removePlantsByBatchEnv(
    //   journalEntry.selectedEnvId,
    //   journalEntry.selectedBatchId,
    // );
    // await removePlantsByBatch(journalEntry.selectedBatchId);

    // setJournalEntry({amount: '', ph: '', ec: '', ppm: '', date: new Date()});
    // loadData();
    // setShowFinishBatch(false);
    ToastAndroid.show('Plants Archived', ToastAndroid.BOTTOM);
  };

  const confirmWaterBatchJournal = async () => {
    await waterBatch(journalEntry.selectedBatchId, {
      amount: journalEntry.amount,
      ph: journalEntry.ph,
      ec: journalEntry.ec,
      ppm: journalEntry.ppm,
      date: journalEntry.date,
    });

    await waterPlantsByBatch(journalEntry.selectedBatchId);

    await newEntry({
      type: 'water',
      envId: journalEntry.selectedEnvId,
      amount: journalEntry.amount,
      ph: journalEntry.ph,
      ec: journalEntry.ec,
      ppm: journalEntry.ppm,
      date: journalEntry.date,
    });
    setJournalEntry({amount: '', ph: '', ec: '', ppm: '', date: new Date()});
    loadData();
    setShowWaterBatch(false);
    ToastAndroid.show('Plants Watered', ToastAndroid.BOTTOM);
  };

  const confirmDeleteBatchJournal = async () => {
    const updatedPlantsArray = selectedEnv[0].plants
      ? selectedEnv[0].plants.filter(plantId => {
          return plantId !== journalEntry.selectedBatchId;
        })
      : [];

    await updateEnvironment({
      ...selectedEnv[0],
      plants: updatedPlantsArray,
    });

    await removePlantsByBatch(journalEntry.selectedBatchId);
    await removeBatch(journalEntry.selectedBatchId);
    await newEntry({
      type: 'deleteBatch',
      envId: journalEntry.selectedEnvId,
      dateDeleted: new Date(),
    });
    loadData();
    setShowWaterBatch(false);
    ToastAndroid.show('Batch Removed', ToastAndroid.BOTTOM);
  };

  const toggleFlower = index => {
    if (index === expandedFlowerIndex) {
      setExpandedFlowerIndex(null);
    } else {
      setExpandedFlowerIndex(index);
    }
  };

  const toggleVeg = index => {
    if (index === expandedVegIndex) {
      setExpandedVegIndex(null);
    } else {
      setExpandedVegIndex(index);
    }
  };

  const toggleHanging = index => {
    if (index === expandedHangingIndex) {
      setExpandedHangingIndex(null);
    } else {
      setExpandedHangingIndex(index);
    }
  };

  const groupedPlants = plantsByBatch(plants);
  const selectedBorder = {borderColor: theme.core.primary, borderWidth: 2};
  const unSelectedBorder = {
    borderColor: theme.core.lightestBorder,
    borderWidth: 1,
  };

  const pressFinish = async (envId, batchId) => {
    setJournalEntry(prevState => ({
      ...prevState,
      selectedEnvId: envId,
      selectedBatchId: batchId,
    }));
    setShowFinishBatch(prevState => !prevState);
  };
  const pressWater = async (envId, batchId) => {
    setJournalEntry(prevState => ({
      ...prevState,
      selectedEnvId: envId,
      selectedBatchId: batchId,
    }));
    setShowWaterBatch(prevState => !prevState);
  };
  const pressDelete = async (envId, batchId) => {
    const selectedEnvData = await getEnvironmentById(envId);
    setSelectedEnv(selectedEnvData);
    setJournalEntry(prevState => ({
      ...prevState,
      selectedEnv: selectedEnvData,
      selectedBatchId: batchId,
    }));
    setShowDeleteBatch(prevState => !prevState);
  };
  const textColor = {color: theme.core.textColor};
  const phaselinkStyle = {borderBottomColor: 'rgba(230,230,230,0.2)'};
  const plantlinkStyle = {backgroundColor: 'rgba(100,100,100,0.5)'};
  const plantImage = {backgroundColor: 'rgba(222,222,222,0.5)'};
  return (
    <View style={styles.phasesContainer}>
      <View style={styles.phaseContainer}>
        {expandedIndex === itemIndex && (
          <TouchableOpacity
            style={[styles.phaseLink, phaselinkStyle]}
            onPress={() => {
              toggleVeg(itemIndex);
            }}>
            <Text style={[styles.phaseTitle, textColor]}>
              {translation.plants && translation.plants.Vegetating} (
              {plants.length > 0 &&
                plants.filter(
                  plant =>
                    plant.currentPhase === 'veg' &&
                    plant.environmentId === item.id,
                ).length}
              )
            </Text>

            {expandedVegIndex === itemIndex ? (
              <>
                <Image
                  style={styles.phaseArrow}
                  source={icons.others.misc[4]}
                />
              </>
            ) : (
              <>
                <Image
                  style={styles.phaseArrow}
                  source={icons.others.misc[3]}
                />
              </>
            )}
          </TouchableOpacity>
        )}

        {expandedVegIndex === itemIndex &&
          groupedPlants &&
          Object.keys(groupedPlants).filter(batch =>
            item.plants.includes(batch),
          ).length > 0 &&
          Object.keys(groupedPlants).map((batchId, batchIndex) => (
            <View key={batchIndex}>
              {groupedPlants[batchId].filter(
                plant => plant.currentPhase === 'veg',
              ).length > 0 && (
                <View style={styles.batchBoxContainer}>
                  <View style={styles.batchHeader}>
                    <View style={styles.batchLabelHeader}>
                      <Text style={styles.batchlabel}>
                        {translation.plants && translation.plants.other.BatchId}
                      </Text>

                      <Text style={styles.batchId}>{batchId.slice(0, 5)} </Text>
                      <Text style={[styles.batchAmount, textColor]}>
                        {`(${
                          groupedPlants[batchId].filter(
                            plant => plant.currentPhase === 'veg',
                          ).length
                        })`}
                      </Text>
                    </View>

                    <WaterPlantButton
                      translation={translation}
                      icons={icons}
                      theme={theme}
                      pressButton={pressWater}
                      batchId={batchId}
                      envId={item.id}
                    />
                    <DeleteBatchButton
                      translation={translation}
                      icons={icons}
                      theme={theme}
                      pressButton={pressDelete}
                      batchId={batchId}
                      envId={item.id}
                    />
                  </View>
                </View>
              )}
              <View key={batchIndex}>
                <ScrollView horizontal={true} style={styles.plantsContainer}>
                  {groupedPlants[batchId].map((plant, plantIndex) => {
                    if (
                      plant.currentPhase === 'veg' &&
                      plant.environmentId === item.id
                    ) {
                      return (
                        <View
                          key={plant.id}
                          style={[
                            styles.plantLink,
                            selectedPlants.includes(plant.id)
                              ? selectedBorder
                              : unSelectedBorder,
                            plantlinkStyle,
                          ]}>
                          <TouchableOpacity
                            onPress={() => {
                              HandlePressPlant(plant);
                            }}
                            onLongPress={() => {
                              HandleLongPressPlant(plantIndex, plant);
                            }}
                            key={plantIndex}
                            style={[
                              styles.plantLink,
                              selectedPlants.includes(plant.id)
                                ? selectedBorder
                                : unSelectedBorder,
                              plantlinkStyle,
                            ]}>
                            <View style={styles.plantDetail}>
                              <Image
                                style={(styles.plantImage, plantImage)}
                                source={icons.others.plant_guide[6]}
                              />
                            </View>
                          </TouchableOpacity>
                          <Text style={[styles.strainLabel, textColor]}>
                            {plant.strain.strainName}
                          </Text>
                        </View>
                      );
                    }
                  })}
                </ScrollView>
              </View>
            </View>
          ))}
      </View>

      <View style={styles.phaseContainer}>
        {expandedIndex === itemIndex && (
          <TouchableOpacity
            style={[styles.phaseLink, phaselinkStyle]}
            onPress={() => {
              toggleFlower(itemIndex);
            }}>
            <Text style={[styles.phaseTitle, textColor]}>
              {translation.plants && translation.plants.Flowering} (
              {plants &&
                plants.filter(
                  plant =>
                    plant.currentPhase === 'flower' &&
                    plant.environmentId === item.id,
                ).length}
              )
            </Text>
            {expandedFlowerIndex === itemIndex ? (
              <>
                <Image
                  style={styles.phaseArrow}
                  source={icons.others.misc[4]}
                />
              </>
            ) : (
              <>
                <Image
                  style={styles.phaseArrow}
                  source={icons.others.misc[3]}
                />
              </>
            )}
          </TouchableOpacity>
        )}
        {expandedFlowerIndex === itemIndex &&
          groupedPlants &&
          Object.keys(groupedPlants).filter(batch =>
            item.plants.includes(batch),
          ).length > 0 &&
          Object.keys(groupedPlants).map((batchId, batchIndex) => (
            <View key={batchIndex}>
              {groupedPlants[batchId].filter(
                plant => plant.currentPhase === 'flower',
              ).length > 0 && (
                <View style={styles.batchBoxContainer}>
                  <View style={styles.batchHeader}>
                    <Text style={[styles.batchlabel, textColor]}>
                      {translation.plants && translation.plants.other.BatchId}
                    </Text>

                    <Text style={[styles.batchId, textColor]}>
                      {batchId.slice(0, 5)}{' '}
                    </Text>
                    <Text style={[styles.batchAmount, textColor]}>
                      (
                      {
                        groupedPlants[batchId].filter(
                          plant => plant.currentPhase === 'flower',
                        ).length
                      }
                      )
                    </Text>
                    <WaterPlantButton
                      translation={translation}
                      icons={icons}
                      theme={theme}
                      pressButton={() => {
                        pressWater(item.id, batchId);
                      }}
                      batchId={batchId}
                      envId={item.id}
                    />
                    <DeleteBatchButton
                      translation={translation}
                      icons={icons}
                      theme={theme}
                      pressButton={pressDelete}
                      batchId={batchId}
                      envId={item.id}
                    />
                  </View>
                </View>
              )}
              <ScrollView horizontal={true} style={styles.plantsContainer}>
                {groupedPlants[batchId].map((plant, plantIndex) => {
                  if (
                    plant.currentPhase === 'flower' &&
                    plant.environmentId === item.id
                  ) {
                    return (
                      <View key={plantIndex}>
                        <TouchableOpacity
                          onPress={() => {
                            HandlePressPlant(plant);
                          }}
                          onLongPress={() => {
                            HandleLongPressPlant(plantIndex, plant);
                          }}
                          style={[
                            styles.plantLink,
                            selectedPlants.includes(plant.id)
                              ? unSelectedBorder
                              : selectedBorder,
                            plantlinkStyle,
                          ]}>
                          <View style={styles.plantDetail}>
                            <Image
                              style={(styles.plantImage, plantImage)}
                              source={icons.others.plant_guide[6]}
                            />
                          </View>
                        </TouchableOpacity>
                        <Text style={[styles.strainLabel, textColor]}>
                          {plant.strain.strainName}
                        </Text>
                      </View>
                    );
                  }
                  return;
                })}
              </ScrollView>
            </View>
          ))}
      </View>
      <View style={styles.phaseContainer}>
        {expandedIndex === itemIndex && (
          <TouchableOpacity
            style={[styles.phaseLink, phaselinkStyle]}
            onPress={() => {
              toggleHanging(itemIndex);
            }}>
            <Text style={[styles.phaseTitle, textColor]}>
              {translation.plants && translation.plants.other.Hanging} (
              {plants &&
                plants.filter(
                  plant =>
                    plant.currentPhase === 'hang' &&
                    plant.environmentId === item.id,
                ).length}
              )
            </Text>
            {expandedHangingIndex === itemIndex ? (
              <>
                <Image
                  style={styles.phaseArrow}
                  source={icons.others.misc[4]}
                />
              </>
            ) : (
              <>
                <Image
                  style={styles.phaseArrow}
                  source={icons.others.misc[3]}
                />
              </>
            )}
          </TouchableOpacity>
        )}
        {expandedHangingIndex === itemIndex &&
          groupedPlants &&
          Object.keys(groupedPlants).map((batchId, batchIndex) => (
            <View key={batchIndex}>
              {groupedPlants[batchId].filter(
                plant => plant.currentPhase === 'hang',
              ).length > 0 && (
                <View style={styles.batchBoxContainer}>
                  <View style={styles.batchHeader}>
                    <Text style={[styles.batchlabel, textColor]}>
                      {translation.plants && translation.plants.other.BatchId}
                    </Text>
                    <Text style={[styles.batchId, textColor]}>
                      {batchId.slice(0, 5)}{' '}
                    </Text>
                    <Text style={[styles.batchAmount, textColor]}>
                      (
                      {
                        groupedPlants[batchId].filter(
                          plant => plant.currentPhase === 'hang',
                        ).length
                      }
                      )
                    </Text>
                    <FinishPlantButton
                      translation={translation}
                      icons={icons}
                      theme={theme}
                      pressButton={pressFinish}
                      batchId={batchId}
                      envId={item.id}
                    />
                    <DeleteBatchButton
                      translation={translation}
                      icons={icons}
                      theme={theme}
                      pressButton={pressDelete}
                      batchId={batchId}
                      envId={item.id}
                    />
                  </View>

                  <View style={styles.batchContainer}>
                    <ScrollView
                      horizontal={true}
                      style={styles.plantsContainer}>
                      {groupedPlants[batchId].map((plant, plantIndex) => {
                        if (
                          plant.currentPhase === 'hang' &&
                          plant.environmentId === item.id
                        ) {
                          return (
                            <View key={plantIndex}>
                              <TouchableOpacity
                                onPress={() => {
                                  HandlePressPlant(plant);
                                }}
                                onLongPress={() => {
                                  HandleLongPressPlant(plantIndex, plant);
                                }}
                                style={[
                                  styles.plantLink,
                                  selectedPlants &&
                                  selectedPlants.includes(plant.id)
                                    ? selectedBorder
                                    : unSelectedBorder,
                                  plantlinkStyle,
                                ]}>
                                <View style={styles.plantDetail}>
                                  <Image
                                    style={(styles.plantImage, plantImage)}
                                    source={icons.others.plant_guide[6]}
                                  />
                                </View>
                              </TouchableOpacity>
                              <Text style={[styles.strainLabel, textColor]}>
                                {plant.strain.strainName}
                              </Text>
                            </View>
                          );
                        }
                        return;
                      })}
                    </ScrollView>
                  </View>
                </View>
              )}
            </View>
          ))}
      </View>
      <ConfirmWaterBatch
        confirmWaterBatchJournal={confirmWaterBatchJournal}
        isVisible={showWaterBatch}
        setIsVisible={setShowWaterBatch}
        translation={translation}
        environmentArray={environmentData}
        icons={icons}
        theme={theme}
        navigation={navigation}
        selectedPlants={selectedPlants}
        updatePlants={loadData}
        plants={plants}
        isDarkMode={isDarkMode}
        journalEntry={journalEntry}
        setJournalEntry={setJournalEntry}
      />
      <ConfirmFinishBatch
        confirmFinishBatchJournal={confirmFinishBatchJournal}
        isVisible={showFinishBatch}
        setIsVisible={setShowFinishBatch}
        translation={translation}
        environmentArray={environmentData}
        icons={icons}
        theme={theme}
        navigation={navigation}
        selectedPlants={selectedPlants}
        updatePlants={loadData}
        plants={plants}
        isDarkMode={isDarkMode}
        journalEntry={journalEntry}
        setJournalEntry={setJournalEntry}
      />
      <ConfirmDeleteBatch
        confirmDeleteBatchJournal={confirmDeleteBatchJournal}
        isVisible={showDeleteBatch}
        setIsVisible={setShowDeleteBatch}
        translation={translation}
        environmentArray={environmentData}
        icons={icons}
        theme={theme}
        navigation={navigation}
        selectedPlants={selectedPlants}
        updatePlants={loadData}
        plants={plants}
        isDarkMode={isDarkMode}
        journalEntry={journalEntry}
        setJournalEntry={setJournalEntry}
      />
    </View>
  );
};

export default PlantsDisplay;

const styles = StyleSheet.create({
  batchBoxContainer: {},
  batchContainer: {
    borderBottomWidth: 1,
  },
  batchLabelHeader: {flexDirection: 'row', flex: 1},
  batchlabel: {fontSize: 15, fontFamily: 'Poppins-Regular'},
  batchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batchId: {fontSize: 15, fontFamily: 'Poppins-Regular', flexDirection: 'row'},
  phaseArrow: {width: 12, height: 12, marginHorizontal: 5},

  phaseLink: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: 2,
  },
  phaseTitle: {fontSize: 20, fontFamily: 'Poppins-Light', flex: 1},
  plantsContainer: {width: '95%', margin: 10, paddingBottom: 10},
  plantLink: {
    minHeight: 70,
    minWidth: 70,
    padding: 4,
    paddingVertical: 8,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'Center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  plantImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',

    borderRadius: 50,
  },
  strainLabel: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
