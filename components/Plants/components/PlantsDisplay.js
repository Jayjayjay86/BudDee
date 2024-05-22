import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const PlantsDisplay = ({
  expandedBatch,
  setExpandedBatch,
  expandedIndex,
  expandedVegIndex,
  itemIndex,
  expandedFlowerIndex,
  toggleVeg,
  toggleFlower,
  translation,
  icons,
  theme,
  plants,
  HandlePressPlant,
  HandleLongPressPlant,
  item,
}) => {
  const plantsByBatch = plantsArray => {
    try {
      let returnable = {};
      for (let i = 0; i < plantsArray.length; i++) {
        const batchId = plantsArray[i].batchId;
        console.log('Processing batchId:', batchId);

        if (!returnable[batchId]) {
          console.log('Creating new batch array for:', batchId);
          returnable[batchId] = [];
        }

        returnable[batchId].push(plantsArray[i]);
      }
      return returnable;
    } catch (error) {
      console.log('Error in plantsByBatch:', error);
    }
  };
  const groupedPlants = plantsByBatch(plants);
  return (
    <View style={styles.phasesContainer}>
      <View style={styles.phaseContainer}>
        {expandedIndex === itemIndex && (
          <TouchableOpacity
            style={styles.phaseLink}
            onPress={() => {
              toggleVeg(itemIndex);
            }}>
            <Text style={styles.phaseTitle}>
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
          Object.keys(groupedPlants).map(batchId => (
            <>
              <Text style={styles.batchId}>{batchId}</Text>
              <ScrollView horizontal={true} style={styles.plantsContainer}>
                {groupedPlants[batchId].map((plant, plantIndex) => {
                  if (
                    plant.currentPhase === 'veg' &&
                    plant.environmentId === item.id
                  ) {
                    return (
                      <View key={plantIndex} style={styles.plantLink}>
                        <TouchableOpacity
                          onPress={() => {
                            HandlePressPlant(plant);
                          }}
                          onLongPress={() => {
                            HandleLongPressPlant(plantIndex, plant);
                          }}
                          key={plantIndex}
                          style={styles.plantLink}>
                          <View style={styles.plantDetail}>
                            <Image
                              style={styles.plantImage}
                              source={icons.others.plant_guide[6]}
                            />
                          </View>
                        </TouchableOpacity>
                        <Text style={styles.strainLabel}>
                          {plant.strain.strainName}
                        </Text>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </>
          ))}
      </View>
      <View style={styles.phaseContainer}>
        {expandedIndex === itemIndex && (
          <TouchableOpacity
            style={styles.phaseLink}
            onPress={() => {
              toggleFlower(itemIndex);
            }}>
            <Text style={styles.phaseTitle}>
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
          Object.keys(groupedPlants).map(batchId => (
            <>
              <Text style={styles.batchLabel}>Batch Id:</Text>
              <Text style={styles.batchId}>{batchId.slice(0, 5)}</Text>
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
                          style={styles.plantLink}>
                          <View style={styles.plantDetail}>
                            <Image
                              style={styles.plantImage}
                              source={icons.others.plant_guide[6]}
                            />
                          </View>
                        </TouchableOpacity>
                        <Text style={styles.strainLabel}>
                          {plant.strain.strainName}
                        </Text>
                      </View>
                    );
                  }
                  return;
                })}
              </ScrollView>
            </>
          ))}
      </View>
    </View>
  );
};

export default PlantsDisplay;

const styles = StyleSheet.create({
  container: {height: '100%'},
  envList: {},
  envLinks: {},
  envLink: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: 2,
    borderBottomColor: 'rgba(23,23,23,0.2)',
  },
  envName: {flex: 1, fontSize: 22, margin: 10},
  actionLink: {
    backgroundColor: 'rgba(100,100,100,0.3)',
    padding: 2,
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  actionLinkText: {fontSize: 15},
  envPlantAmount: {fontSize: 22, margin: 5},
  imageContainer: {
    backgroundColor: 'rgba(200,200,200,0.3)',
    paddingVertical: 5,

    borderRadius: 10,
    minWidth: 80,
  },
  arrow: {width: 15, height: 15, margin: 5},
  phaseArrow: {width: 12, height: 12, marginHorizontal: 5},
  phasesContainer: {margin: 10},
  phaseContainer: {},
  phaseLink: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: 2,
    borderBottomColor: 'rgba(230,230,230,0.2)',
  },
  phaseTitle: {fontSize: 17, fontFamily: 'Poppins-Regular', flex: 1},
  plantsContainer: {width: '95%', margin: 10, paddingBottom: 10},
  plantLink: {
    marginHorizontal: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  plantImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(200,200,200,0.5)',
    borderRadius: 50,
  },
  strainLabel: {alignItems: 'center'},
  link: {},
});
