import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddPlant from '../components/Plants/screens/AddPlant';
import AddEnv from '../components/Environments/screens/AddEnv';

import NewAction from '../components/Actions/screens/NewAction';
import BottomTabs from './bottomTabNavigator';
import MoreTools from '../components/Settings/screens/MoreTools';
import Calculators from '../components/Calculators/screens/Calculators';
import Charts from '../components/Calculators/screens/Charts';
import Faq from '../components/Guides/screens/Faq';

import Library from '../components/Guides/screens/Library';
import Air from '../components/Guides/screens/Air';
import Checklist from '../components/Guides/screens/Checklist';
import Containers from '../components/Guides/screens/Containers';
import Cuttings from '../components/Guides/screens/Cuttings';
import General from '../components/Guides/screens/General';
import HouseKeeping from '../components/Guides/screens/HouseKeeping';
import Light from '../components/Guides/screens/Light';
import Medium from '../components/Guides/screens/Medium';
import Nute from '../components/Guides/screens/Nute';
import Pests from '../components/Guides/screens/Pests';
import Phases from '../components/Guides/screens/Phases';
import Repots from '../components/Guides/screens/Repots';
import Smell from '../components/Guides/screens/Smell';
import Strain from '../components/Guides/screens/Strain';

import Watering from '../components/Guides/screens/Watering';
import Humidity from '../components/Guides/screens/Humidity';
import Crops from '../components/Guides/screens/Crops';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen
        name="Index"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="add_actions"
        component={NewAction}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="add_plants"
        component={AddPlant}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="add_envs"
        component={AddEnv}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Toolbox"
        component={MoreTools}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="calc"
        component={Calculators}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="chart"
        component={Charts}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="faq"
        component={Faq}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="library"
        component={Library}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="air"
        component={Air}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="checklist"
        component={Checklist}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="container"
        component={Containers}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cutting"
        component={Cuttings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="crops"
        component={Crops}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="humidity"
        component={Humidity}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="general"
        component={General}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="housekeeping"
        component={HouseKeeping}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="medium"
        component={Medium}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="lights"
        component={Light}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="nute"
        component={Nute}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="pest"
        component={Pests}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="phases"
        component={Phases}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="repots"
        component={Repots}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="smell"
        component={Smell}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="strain"
        component={Strain}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="watering"
        component={Watering}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
