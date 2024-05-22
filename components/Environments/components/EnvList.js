import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const EnvList = ({
  selectedEnvironment,
  setSelectedEnvironment,
  setShowConfirm,
  data,
  navigation,
  translation,
  icons,
  plants,
  selectedPlants,
  setSelectedPlants,
}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [plantsSelected, setPlantsSelected] = useState(false);
  const pressBinButton = environment => {
    setShowConfirm(true);
  };
  const pressJournalButton = environment => {
    navigation.navigate('add_envs_journal', {
      envData: JSON.stringify(environment),
    });
  };
  const pressEditButton = environment => {
    navigation.navigate('env', {
      envData: JSON.stringify(environment),
    });
  };

  const toggleMoreInfo = index => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
      setSelectedEnvironment(data[index]);
    } else {
      setExpandedIndex(index);
      setSelectedEnvironment(data[index]);
    }
  };
  const HandleAddPlants = index => {
    navigation.navigate('add_plants', {environmentData: data[index]});
  };
  const handlePressPlant = plant => {
    navigation.navigate('plant', {plantData: JSON.stringify([plant])});
  };
  const handleLongPressPlant = (plantI, plant) => {
    console.log(plantI, plant);
  };
  const borderStyle = {borderBottomWidth: 1};
  return (
    <ScrollView style={styles.container}>
      {data &&
        data.map((item, itemIndex) => (
          <View style={styles.envLinks} key={item.id}>
            <TouchableOpacity
              onPress={() => {
                toggleMoreInfo(itemIndex);
              }}
              style={styles.envLink}>
              <View style={styles.envName}>
                <Text style={styles.envNameText}>{item.name}</Text>
              </View>
              <View style={styles.detailContainer}>
                <View style={styles.envImageContainer}>
                  <Image
                    style={styles.envImage}
                    source={icons.buttons.bottomTabs[2]}
                  />
                </View>

                <View style={styles.rightBox}>
                  <View style={styles.rightBoxContent}>
                    <Text style={styles.lightHeaderText}>
                      {translation.environments &&
                        translation.environments.env_list.Lights}
                    </Text>
                    <View style={styles.lightItem}>
                      <Text style={styles.titleText}>{item.lights.length}</Text>
                    </View>
                  </View>
                  <View style={styles.rightBoxContent}>
                    <Text style={styles.lightHeaderText}>
                      {translation.environments &&
                        translation.environments.env_list.Phase}
                    </Text>
                    <View style={styles.lightItem}>
                      <Text style={styles.Text}>
                        {item.lightHours < 13
                          ? translation.environments &&
                            translation.environments.env_list.Flowering
                          : translation.environments &&
                            translation.environments.env_list.Vegging}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {expandedIndex === itemIndex && (
              <>
                <View
                  key={(itemIndex, item.id)}
                  style={[styles.moreInfoContainer, borderStyle]}>
                  <Text style={styles.plantsText}>
                    {plants ? plants.length : 0}{' '}
                    {translation.environments &&
                      translation.environments.env_list.PlantsLow}
                  </Text>

                  <ScrollView horizontal={true} style={styles.plantContainer}>
                    {item.plants &&
                      expandedIndex === itemIndex &&
                      plants &&
                      plants.map((plant, plantI) => (
                        <TouchableOpacity
                          key={plantI}
                          onPress={() => {
                            handlePressPlant(plant);
                          }}
                          onLongPress={() => {
                            handleLongPressPlant(plantI, plant);
                          }}>
                          <View style={styles.plant}>
                            <Image
                              style={styles.plantImage}
                              source={icons.others.plant_guide[6]}
                            />
                            <Text style={styles.strain}>
                              {plant.strain.strainName}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                    <TouchableOpacity
                      onPress={() => {
                        HandleAddPlants(itemIndex);
                      }}>
                      <View style={styles.plant}>
                        <Image
                          style={styles.plantImage}
                          source={icons.others.misc[0]}
                        />
                        <Text style={styles.strain}>Add Plant</Text>
                      </View>
                    </TouchableOpacity>
                  </ScrollView>
                </View>

                <View style={[styles.envToolBar, borderStyle]}>
                  <View style={styles.controls}>
                    <TouchableOpacity
                      onPress={() => {
                        pressJournalButton(item);
                      }}
                      style={styles.journal}>
                      <Text style={styles.journalText}>
                        {translation.environments &&
                          translation.environments.env_list.AddJournal}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        pressEditButton(item);
                      }}
                      style={styles.edit}>
                      <Text style={styles.editText}>
                        {translation.environments &&
                          translation.environments.env_list.Edit}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.bin}>
                    <TouchableOpacity
                      onPress={() => {
                        pressBinButton(item);
                      }}>
                      <Image
                        style={styles.binImage}
                        source={icons.others.misc[8]}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </View>
        ))}
    </ScrollView>
  );
};

export default EnvList;

const styles = StyleSheet.create({
  container: {marginHorizontal: 5, height: '92.2%'},
  envLinks: {
    marginBottom: 20,
    backgroundColor: 'rgba(150,150,150,0.3)',
  },
  arrow: {width: 15, height: 15, margin: 5},
  envLink: {
    padding: 10,
    borderBottomWidth: 1,
  },
  envName: {},
  envNameText: {fontSize: 17, fontFamily: 'Poppins-Regular'},
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  envImageContainer: {
    margin: 5,
    justifyContent: 'center',
    width: 95,
  },
  envImage: {width: 90, height: 90},
  rightBox: {flexDirection: 'column'},
  rightBoxContent: {
    borderLeftWidth: 1,
    paddingLeft: 7,
    borderLeftColor: 'rgba(23,23,32,0.3)',
  },
  lightHeaderText: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    backgroundColor: 'rgba(150,150,150,0.3)',
    paddingTop: 2,
    marginRight: 2,
  },
  lightItem: {flexDirection: 'row', padding: 2},

  titleText: {fontSize: 13, fontFamily: 'Poppins-Regular', minWidth: 60},
  envToolBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingVertical: 5,
  },
  controls: {flexDirection: 'row', flex: 1},
  journal: {
    marginHorizontal: 5,
    backgroundColor: 'green',
    padding: 3,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  journalText: {fontFamily: 'Poppins-Regular', fontSize: 17},
  edit: {
    marginHorizontal: 10,
    backgroundColor: 'green',
    padding: 3,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  editText: {fontFamily: 'Poppins-Regular', fontSize: 17},
  bin: {},
  binImage: {width: 48, height: 48},

  wattageText: {fontSize: 13, fontFamily: 'Poppins-Regular'},
  plantsText: {fontSize: 15, fontFamily: 'Poppins-Regular', marginVertical: 3},
  moreInfoContainer: {
    alignItems: 'center',
  },
  plantContainer: {
    width: '90%',
    paddingBottom: 10,
  },
  plant: {
    marginHorizontal: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },

  plantImage: {
    alignSelf: 'center',

    width: 45,
    height: 45,
    borderRadius: 20,
    backgroundColor: 'rgba(200,200,200,0.5)',
  },
  strain: {fontFamily: 'Poppins-Light'},

  Text: {fontSize: 13, fontFamily: 'Poppins-Regular'},
});
