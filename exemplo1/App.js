import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import bonoro from './assets/img/bonabo.jpg';

const Pokemon = () => {
  return(
    <ScrollView>
      <view>
        <text
          style={{
            fontSize:45,
            alignSelf:"center",
            color:"blue"

          }}
        >
        </text>
        AAAAAAAAAAA
        <image
          source={{
            uri: bonoro
          }}
          style={{width:200, height:210, alignSelf:"center"}}
        />
      </view>
      <TextInput>
          style={{
            height:40,
            borderColor:'Gray',
            borderwidth:1,
            padding:5,
            margin:15,
          }}
          defaultValue="Digite essa poha"
      </TextInput>

    </ScrollView>
  )
}
export default Pokemon;
 