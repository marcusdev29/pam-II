import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import MenuItem from './componentes/MenuItem';

export default class App extends React.Component{
  render(){
    return (
      <ImageBackground
        source={require('./img/sfc.jpg')}
        style={styles.container}>

        <View style={styles.overlayContainer}>
        
          <View style={styles.top}>
            <Text style={styles.header}>Santos F.C</Text>
          </View>
          <View style={styles.menuContainer}>
              <MenuItem itemImage={require('./img/li.png')} />
              <MenuItem itemImage={require('./img/li.png')} />
              <MenuItem itemImage={require('./img/li.png')} />
             
          </View>   
          
        
        </View>  

        
       </ImageBackground>
      
    );
    

  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer:{
    flex:1,
   
  },
  top: {
    height:'30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)'
  },
  menuContainer:{
    height:'40%',
    flexDirection:'row',
    flexWrap: 'wrap',
  }

});
