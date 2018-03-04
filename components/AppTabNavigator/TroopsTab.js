import React, {Component} from 'react';
import { Text, View, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import {Icon} from 'native-base';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCHfraXq0RIXerqkjsWxf31vxpONHUAuek",
  authDomain: "clashwithval-74aa4.firebaseapp.com",
  databaseURL: "https://clashwithval-74aa4.firebaseio.com",
  storageBucket: "clashwithval-74aa4.appspot.com"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

class TroopsTab extends Component{
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
    this.state= {
      itemDataSource: ds
    }

    this.itemsRef = firebaseApp.database().ref();

    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  getRef(){
    return firebaseApp.database().ref();
  }
  componentWillMount(){
    this.getItems(this.itemsRef);
  }
  componentDidMount(){
    this.getItems(this.itemsRef);
  }

  getItems(itemsRef){
    //let items= [{title: 'Item One'}, {title: 'Item Two'}, {title: 'Item Three'}];
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      });

    });

  }
  pressRow(item){
    console.log(item);
  }

  renderRow(item){
    return(
      <TouchableHighlight onPress= {() => {
        this.pressRow(item);
      }}>

        <View style= {styles.li}>
          <Text style= {styles.liText}> {item.title}</Text>
        </View>

      </TouchableHighlight>
    );
  }
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name= "person" style= {{ color: tintColor
      }} />
    )
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style= {styles.navbarTitle}>Troops.Tab</Text>

        <ListView style={styles.container}
          dataSource = {this.state.itemDataSource}

          renderRow= {this.renderRow}
        />
      </View>
    );
  }
}

export default TroopsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  navbar: {
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: "#444",
    fontSize: 16,
    fontWeight: "500"
  },

  liText: {
    color: '#333',
    fontSize: 16
  }
}); 