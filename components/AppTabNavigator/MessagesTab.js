import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {Icon} from 'native-base';

class MessagesTab extends Component{
  
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name= "ios-send-outline" style= {{ color: tintColor
      }} />
    )
  } 
  render(){
    return (
      <View style={styles.container}>
        <Text>MessagesTab</Text>
      </View>
    );
  }
}

export default MessagesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 