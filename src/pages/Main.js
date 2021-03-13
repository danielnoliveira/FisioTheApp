import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import Exercise from './Exercise';
import Button from './../components/Button';
const stack = createStackNavigator();

function Main({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require("./../assets/person.png")} style={{width:'80%'}} />
      <Text style={styles.textHeader}>
        Olá, Lorena!
      </Text>
      <Text style={styles.textParagraph}>
        Vamos iniciar o seu tratamento? :)
      </Text>
      <Button text="Iniciar tratamento" screen="Exercise" navigation={navigation}/>
    </View>
  );
}
const Stacks = () => {
  return (
    <stack.Navigator initialRouteName="Main" headerMode="none">
      <stack.Screen name="Main" component={Main} />
      <stack.Screen name="Exercise" component={Exercise} />
    </stack.Navigator>
  );
}
export default Stacks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  textHeader: {
    fontSize:32,
    textAlign:'center',
    marginBottom:30
  },
  textParagraph:{
    fontSize:28,
    textAlign:'center',
    marginBottom:30
  }
});
