import React, {Component} from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Platform
} from 'react-native';

import {TabNavigator} from 'react-navigation';
import {Icon} from 'native-base';

import TroopsTab from './AppTabNavigator/TroopsTab';
import TowersTab from './AppTabNavigator/TowersTab';
import MessagesTab from './AppTabNavigator/MessagesTab';

class MainScreen extends Component{

  static navigationOptions = {
    title: "ClashWithVal"
  }

  render(){
    return(
       <AppTabNavigator />
      )
  }
}

export default MainScreen;

const AppTabNavigator = TabNavigator({

  TroopsTab: {
    screen: TroopsTab
  },
  TowersTab: {
    screen: TowersTab
  },
  MessagesTab: {
    screen: MessagesTab
  }
}, 
  {
    animationEnabled: true,
    tabBarPosition:  "bottom",
    swipeEnabled: true,
    tabBarOptions:{
      style:{
        ...Platform.select({
          android: {
            backgroundColor: 'white'
          }
        })
      },

      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true,
  } 
})



const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 