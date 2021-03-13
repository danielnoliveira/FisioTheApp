/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from './../components/Button';
import InfoTaskSquare from './../components/InfoTaskSquare';
function Exercise({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate("Main")}>
          <Ionicons name="chevron-back-outline" size={48} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={require("./../assets/hand.png")} />
      <Text style={styles.taskTitle}>
        Fechar e abrir as mãos!
      </Text>
      <Button text="Feito!" screen="Main" navigation={navigation}/>
      <View style={styles.taskInfo}>
        <InfoTaskSquare text="Séries" number={0}/>
        <InfoTaskSquare text="Repetições" number={10}/>
        <InfoTaskSquare text="Duração" number={20} timer/>
      </View>
    </View>
  );
}

export default Exercise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom:50
  },
  header: {
    width:'100%',
  },
  taskTitle:{
    fontSize:32,
    textAlign:'center',
    paddingHorizontal:50,
  },
  taskInfo:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center'
  }
});
