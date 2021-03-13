import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ant from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Main from './pages/Main';
import TabScreen2 from './pages/TabScreen2';
import TabScreen3 from './pages/TabScreen3';

const Tab = createBottomTabNavigator();

const Tabs = ()=>(
  <Tab.Navigator
        initialRouteName="Main"
        backBehavior="initialRoute"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let bg = { backgroundColor: "white",padding:10};
            let real_size = 32;
            if (route.name === 'Main') {
              return <FontAwesome5 name="folder-minus" size={real_size} color={color} style={bg} />;
            } else if (route.name === 'Tab2') {
              return <MaterialCommunityIcons name="comment-processing" size={real_size} color={color} style={bg} />;
            } else if (route.name === 'Tab3') {
              return <MaterialCommunityIcons name="book" size={real_size} color={color} style={bg} />;
            } 

            // You can return any component that you like here!
            return <Ant name="home" size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: { borderTopWidth: 0, elevation: 0, },
          size: 32,
        }}
      >
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Tab2" component={TabScreen2} />
        <Tab.Screen name="Tab3" component={TabScreen3} />
    </Tab.Navigator>
);


const Routes = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>

  );
}

export default Routes;
