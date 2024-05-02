import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Home/screens/Home';
import Settings from '../components/Settings/screens/Settings';
import {Image} from 'react-native';
import Plants from '../components/Plants/screens/Plants';
import Environments from '../components/Environments/screens/Environments';
import {useTranslation} from '../core/constants/Locales/TranslationContext';
import {useTheme} from '../core/constants/Theme/ContextManager';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({source, size}) => {
  return <Image style={{width: size, height: size}} source={source} />;
};

function BottomTabs() {
  const {theme, icons} = useTheme();
  const {translation} = useTranslation();

  const bottomTabColors = {
    borderColor: theme.core.bottomtabs.borderColor,
    textColor: theme.core.bottomtabs.textColor,
    backgroundColor: theme.core.bottomtabs.backgroundColor,
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Poppins-SemiBoldItalic',
          color: bottomTabColors.textColor,
        },
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          borderTopColor: bottomTabColors.borderColor,

          height: 58,
          elevation: 0,
          backgroundColor: bottomTabColors.backgroundColor,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => (
            <TabBarIcon source={icons.buttons.bottomTabs[0]} size={size + 10} />
          ),
          tabBarLabel:
            translation.core && translation.core.headers.bottomToolBar.Home,
        }}
      />
      <Tab.Screen
        name="Plants"
        component={Plants}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => (
            <TabBarIcon source={icons.buttons.bottomTabs[1]} size={size + 20} />
          ),
          tabBarLabel:
            translation.core && translation.core.headers.bottomToolBar.Plants,
        }}
      />
      <Tab.Screen
        name="Environments"
        component={Environments}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => (
            <TabBarIcon source={icons.buttons.bottomTabs[2]} size={size + 35} />
          ),
          tabBarLabel:
            translation.core &&
            translation.core.headers.bottomToolBar.Environments,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => (
            <TabBarIcon source={icons.buttons.bottomTabs[3]} size={size} />
          ),
          tabBarLabel:
            translation.core && translation.core.headers.bottomToolBar.Settings,
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
