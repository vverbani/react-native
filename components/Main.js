import React from 'react';
import { 
  StyleSheet, 
  Text,
  Alert,
  Button, 
  TouchableHighlight,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
}from 'react-native';

export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state= { onPress: false};
  }

  onPress = () => {
    Alert.alert("You have pressed button");
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}> Welcome Valmir!</Text>
        </View>

        <View style= {styles.headerSecond}>
           <TouchableHighlight
           style= {styles.button}
           onPress= {this.onPress}
           underlayColor='transparent'
           >
           <Text style= {styles.headerSecondText}>Troops</Text>
           </TouchableHighlight> 
           <TouchableHighlight
           style= {styles.button}
           onPress= {this.onPress}
           underlayColor='transparent'
           >
           <Text style= {styles.headerSecondText}>Towers</Text>
           </TouchableHighlight>
           <TouchableHighlight
           style= {styles.button}
           onPress= {this.onPress}
           underlayColor='transparent'
           >
           <Text style= {styles.headerSecondText}>Bases</Text>
           </TouchableHighlight>
        </View>

        <View style={styles.headerOption}>
        </View>

        <ScrollView> 
        </ScrollView>
      
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#80bfff',
    alignItems:  'center',
    justifyContent: 'center',
    padding: 36,
  },
  headerSecond:{
    backgroundColor: '#4da6ff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerSecondText: {
    color: 'white',
    fontSize: 18,
    padding: 14,
  },
  button: {
    alignItems: 'center',
    padding:10,
  },
  buttonPress:{
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerText:{
      color: 'white',
      fontSize: 22,
      padding: 26,
  },
}); 