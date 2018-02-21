import React from 'react';
import { 
  StyleSheet, 
  Text,
  Alert, 
  TouchableHighlight,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
}from 'react-native';

export default class HeaderBar extends React.Component {
  constructor(props){
    super(props)
  }

  onPress = () => {
      Alert.alert("You have pressed button!")
  }
  render() {
    return (
      <View style= {styles.headerSecond}>
        <TouchableHighlight
          style= {styles.button}
          onPress= {this.onPress}
          >
          <Text style= {styles.headerSecondText}>Attack</Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerSecond:{
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 6,
    borderBottomColor: '#faebd7',
  },
  headerSecondText: {
    color: 'black',
    fontSize: 18,
    padding: 14,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding:10,
  },  
}); 