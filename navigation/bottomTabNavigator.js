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

  const EnvironmentsTabBar = () => (
    <TabBarIcon source={icons.buttons.bottomTabs[2]} size={65} />
  );

  const homeTabBar = () => (
    <TabBarIcon source={icons.buttons.bottomTabs[0]} size={40} />
  );
  const plantsTabBar = () => (
    <TabBarIcon source={icons.buttons.bottomTabs[1]} size={60} />
  );

  const settingsTabBar = () => (
    <TabBarIcon source={icons.buttons.bottomTabs[3]} size={30} />
  );
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
          tabBarIcon: homeTabBar,
          tabBarLabel:
            translation.core && translation.core.headers.bottomToolBar.Home,
        }}
      />
      <Tab.Screen
        name="Plants"
        component={Plants}
        options={{
          headerShown: false,
          tabBarIcon: plantsTabBar,
          tabBarLabel:
            translation.core && translation.core.headers.bottomToolBar.Plants,
        }}
      />
      <Tab.Screen
        name="Environments"
        component={Environments}
        options={{
          headerShown: false,
          tabBarIcon: EnvironmentsTabBar,
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
          tabBarIcon: settingsTabBar,
          tabBarLabel:
            translation.core && translation.core.headers.bottomToolBar.Settings,
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
