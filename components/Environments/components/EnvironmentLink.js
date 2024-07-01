import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const EnvironmentLink = ({
  translation,
  colors,
  toggleMoreInfo,
  itemIndex,
  item,
  icons,
  expandedIndex,
  plants,
  handlePressPlant,
  handleLongPressPlant,
  HandleAddPlants,
  pressBinButton,
  pressEditButton,
  pressJournalButton,
}) => {
  const plantBackground = {backgroundColor: 'rgba(200,200,200,0.9)'};
  const binBackground = {backgroundColor: 'rgba(200,200,200,0.9)'};
  const borderStyle = {borderBottomWidth: 1};
  const textColor = {color: colors.core.textColor};
  const buttonColor = {backgroundColor: colors.core.primary};
  const rightBoxBorder = {borderLeftColor: 'rgba(23,23,32,0.3)'};
  const lightHeaderStyle = {backgroundColor: 'rgba(150,150,150,0.3)'};
  const journalColor = {backgroundColor: 'green'};
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          toggleMoreInfo(itemIndex);
        }}
        style={styles.envLink}>
        <View style={styles.envName}>
          <Text style={[styles.envNameText, textColor]}>{item.name}</Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.envImageContainer}>
            <Image
              style={styles.envImage}
              source={icons.buttons.bottomTabs[2]}
            />
          </View>

          <View style={styles.rightBox}>
            <View style={[styles.rightBoxContent, rightBoxBorder]}>
              <Text
                style={[styles.lightHeaderText, textColor, lightHeaderStyle]}>
                {translation.environments &&
                  translation.environments.environments.Batches}
              </Text>
              <View style={styles.lightItem}>
                <Text style={[styles.titleText, textColor]}>
                  {item.plants.length > 0 ? item.plants.length : 0}
                </Text>
              </View>
            </View>
            <View style={[styles.rightBoxContent, rightBoxBorder]}>
              <Text
                style={[styles.lightHeaderText, textColor, lightHeaderStyle]}>
                {translation.environments &&
                  translation.environments.environments.Phase}
              </Text>
              <View style={styles.lightItem}>
                <Text style={[styles.Text, textColor]}>
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
            <Text style={[styles.plantsText, textColor]}>
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
                        style={[styles.plantImage, plantBackground]}
                        source={icons.others.plant_guide[6]}
                      />
                      <Text style={[styles.strain, textColor]}>
                        {plant.strain.strainName}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>

          <View style={[styles.envToolBar, borderStyle]}>
            <View style={styles.controls}>
              <TouchableOpacity
                onPress={() => {
                  pressJournalButton(item);
                }}
                style={[styles.journal, journalColor]}>
                <Text style={[styles.journalText, textColor]}>
                  {translation.environments &&
                    translation.environments.environments.RecordWork}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  pressEditButton(item);
                }}
                style={[styles.edit, buttonColor]}>
                <Text style={[styles.editText, textColor]}>
                  {translation.environments &&
                    translation.environments.env_list.Edit}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                HandleAddPlants(itemIndex);
              }}>
              <View style={styles.plant}>
                <Image
                  style={[styles.plantImage, plantBackground]}
                  source={icons.others.misc[0]}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.bin}>
              <TouchableOpacity
                onPress={() => {
                  pressBinButton(item);
                }}>
                <Image
                  style={[styles.binImage, binBackground]}
                  source={icons.others.misc[8]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default EnvironmentLink;

const styles = StyleSheet.create({
  container: {marginHorizontal: 5, height: '92.2%'},

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
  },
  lightHeaderText: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    paddingTop: 2,
    marginRight: 2,
  },
  lightItem: {flexDirection: 'row', padding: 2},

  titleText: {fontSize: 13, fontFamily: 'Poppins-Regular', minWidth: 60},
  envToolBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  controls: {flexDirection: 'row', flex: 1},
  journal: {
    marginHorizontal: 5,
    padding: 3,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  journalText: {fontFamily: 'Poppins-Regular', fontSize: 15, paddingTop: 2},
  edit: {
    marginHorizontal: 10,

    padding: 3,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  editText: {fontFamily: 'Poppins-Regular', fontSize: 15, paddingTop: 2},
  bin: {},
  binImage: {
    borderRadius: 10,
    width: 43,
    height: 43,

    marginHorizontal: 5,
  },

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

    width: 42,
    height: 42,
    borderRadius: 10,
    marginHorizontal: 10,
  },

  strain: {fontFamily: 'Poppins-Light'},
  Text: {fontSize: 13, fontFamily: 'Poppins-Regular'},
});
