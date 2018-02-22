import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Icon} from 'native-base';

class TroopsTab extends Component{
  
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name= "person" style= {{ color: tintColor
      }} />
    )
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Troops.Tab</Text>
      </View>
    );
  }
}

export default TroopsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 