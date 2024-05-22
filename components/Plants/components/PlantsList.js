import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import CreateHeader from '../../../core/components/Headers/CreateHeader';
import PlantsDisplay from './PlantsDisplay';

const PlantsList = ({
  icons,
  colors,
  navigation,
  environmentData,
  translation,
  setSelectedPlants,
  selectedPlants,
  plants,
  setPlants,
}) => {
  const [expandedBatch, setExpandedBatch] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [expandedVegIndex, setExpandedVegIndex] = useState(null);
  const [expandedFlowerIndex, setExpandedFlowerIndex] = useState(null);
  const [selectOn, setSelectOn] = useState(false);

  const toggleMoreInfo = index => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
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
  const pressNewAction = item => {
    navigation.navigate('add_actions', {
      environmentData: JSON.stringify(item),
    });
  };

  const HandlePressPlant = plant => {
    navigation.navigate('plant', {plantData: JSON.stringify([plant])});
  };

  const HandleLongPressPlant = (plantIndex, plant) => {
    const newSelectedPlants = selectedPlants.includes(plant.id)
      ? plants.filter(plantItem => plantItem.id !== plant.id)
      : [...selectedPlants, plant.id];

    // Update the selectedPlants state
    setSelectedPlants(newSelectedPlants);

    // Set selectOn to true if there are any selected plants, otherwise set it to false
    setSelectOn(newSelectedPlants.length > 0);

    console.log('selected:', newSelectedPlants);
  };

  return (
    <ScrollView style={styles.container}>
      <CreateHeader
        colors={colors}
        message={translation.plants && translation.plants.Plants}
      />
      <View style={styles.envList}>
        {environmentData &&
          environmentData.map((item, itemIndex) => (
            <View style={styles.envLinks} key={itemIndex}>
              <TouchableOpacity
                style={styles.envLink}
                onPress={() => {
                  toggleMoreInfo(itemIndex);
                }}>
                <Text style={styles.envName}>{item.name}</Text>
                <TouchableOpacity
                  style={styles.actionLink}
                  onPress={() => {
                    pressNewAction(item);
                  }}>
                  <Text style={styles.actionLinkText}>
                    {translation.plants && translation.plants.NewAction}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.envPlantAmount}>{item.plants.length}</Text>

                {expandedIndex === itemIndex ? (
                  <>
                    <Image style={styles.arrow} source={icons.others.misc[4]} />
                  </>
                ) : (
                  <>
                    <Image style={styles.arrow} source={icons.others.misc[3]} />
                  </>
                )}
              </TouchableOpacity>

              <PlantsDisplay
                expandedBatch={expandedBatch}
                setExpandedBatch={setExpandedBatch}
                translation={translation}
                toggleFlower={toggleFlower}
                toggleVeg={toggleVeg}
                setExpandedFlowerIndex={setExpandedFlowerIndex}
                setExpandedIndex={setExpandedIndex}
                setExpandedVegIndex={setExpandedVegIndex}
                item={item}
                HandleLongPressPlant={HandleLongPressPlant}
                HandlePressPlant={HandlePressPlant}
                itemIndex={itemIndex}
                icons={icons}
                theme={colors}
                plants={plants}
                expandedIndex={expandedIndex}
                expandedFlowerIndex={expandedFlowerIndex}
                expandedVegIndex={expandedVegIndex}
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
