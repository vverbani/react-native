import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Icon} from 'native-base';

class TowersTab extends Component{
 
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name= "ios-home" style= {{ color: tintColor
      }} />
    )
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>TowerTab</Text>
      </View>
    );
  }
}

export default TowersTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 