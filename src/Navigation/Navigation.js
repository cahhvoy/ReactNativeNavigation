
import React from 'react'
import {createStackNavigator } from "react-navigation-stack"
import {createDrawerNavigator} from "react-navigation-drawer"
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createSwitchNavigator,createAppContainer} from "react-navigation"
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feed from "../screens/Feed"
import Dashboard from "../screens/Dashboard"
import Profile from "../screens/Profile"
import Settings from "../screens/Settings"
import Welcome from "../screens/Welcome"


const DashboardTabNavigator = createBottomTabNavigator(
    {
      Feed,
      Profile,
      Settings
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          headerTitle: routeName
        };
      }
    }
  );
  const DashboardStackNavigator = createStackNavigator(
    {
      DashboardTabNavigator: DashboardTabNavigator
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerLeft: () => (
            <Ionicons 
              name="menu"
              color="#010f00" 
              color="#ffa800" 
              style={{position:"relative",top:-4,fontWeight:"normal"}} 
              size={34}
              onPress={() => navigation.openDrawer()}
              />
          )
        };
      }
    }
  );
  
  const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
      screen: DashboardStackNavigator
    }
  });

  
  
  const AppSwitchNavigator = createSwitchNavigator({
    Welcome: { screen: Welcome },
    Dashboard: { screen: AppDrawerNavigator }
  });
  
  //const AppContainer = createAppContainer(AppSwitchNavigator);
  export default createAppContainer(AppSwitchNavigator)