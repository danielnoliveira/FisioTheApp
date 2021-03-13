import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TabScreen3() {
  return (
    <View style={styles.container}>
      <Text>Tela 3</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
  },
});
