import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import EnvironmentLink from './EnvironmentLink';
import {getJournals} from '../../../database/journal';

const EnvList = ({
  selectedEnvironment,
  setSelectedEnvironment,
  setShowConfirm,
  data,
  navigation,
  translation,
  icons,
  plants,
  colors,
}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
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
    navigation.navigate('add_plants', {
      environmentData: JSON.stringify(data[index]),
    });
  };
  const handlePressPlant = async plant => {
    const journals = await getJournals();
    const plantJournal = journals.find(item => item.plantId === plant.id);

    navigation.navigate('plant', {
      plantData: JSON.stringify([plant]),
      plantJournalData: JSON.stringify(plantJournal),
    });
  };
  const handleLongPressPlant = (plantI, plant) => {};
  const envColor = {backgroundColor: 'rgba(150,150,150,0.3)'};
  return (
    <ScrollView style={styles.container}>
      {data &&
        data.map((item, itemIndex) => (
          <View style={[styles.envLinks, envColor]} key={item.id}>
            <EnvironmentLink
              selectedEnvironment={selectedEnvironment}
              colors={colors}
              translation={translation}
              toggleMoreInfo={toggleMoreInfo}
              itemIndex={itemIndex}
              item={item}
              icons={icons}
              expandedIndex={expandedIndex}
              plants={plants}
              handleLongPressPlant={handleLongPressPlant}
              handlePressPlant={handlePressPlant}
              HandleAddPlants={HandleAddPlants}
              pressBinButton={pressBinButton}
              pressEditButton={pressEditButton}
              pressJournalButton={pressJournalButton}
            />
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
  },
});
