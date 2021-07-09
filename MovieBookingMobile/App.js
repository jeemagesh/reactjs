/* import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Init from './src/components/Init';
const App = () => {
  return (
    <ScrollView>
     
      <View>
        <Init></Init>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default App;
/* import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Init from './src/components/Init';

import { Provider } from 'react-redux';
import store from './src/Store';
//import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from './src/components/TabNavigator';
import Home from './src/components/Home';
import Bookings from './src/components/Bookings';
import StackNavigator from './src/components/StackNavigator';
import BookingDetails from './src/components/BookingDetails';
import { MainStackNavigator } from './src/components/MainStackNavigator';
const Stack = createStackNavigator();

function HomeScreen() {
  return (

/*     <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ title: 'BookYourFilm' }}
  /> */
    <Stack.Navigator>
       <Stack.Screen
    name="Home"
    component={Home}
    options={{ title: 'BookYourFilm' ,headerTitleAlign:"center"}}
  />

    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator /* screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          return (
            <Ionicons
              name={
                focused
                  ? 'home'
                  : 'home'
              }
              size={size}
              color={color}
            />
          );
        } else if (route.name === 'Bookings') {
          return (
            <Ionicons
              name={focused ? 'book' : 'book'}
              size={size}
              color={color}
            />
          );
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }} */
    >
      <Tab.Screen name="Home" component={Init} options={{
        tabBarLabel: 'Home'

      }} />
      <Tab.Screen name="Bookings" component={Bookings} />
      {/* <Tab.Screen name="BookingDetails" component={BookingDetails} /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    < Provider store={store} >
      <NavigationContainer>
     {/*    <MyTabs/>
        <MainStackNavigator/> */}
     <BottomTabNavigator />
    
      </NavigationContainer></Provider>
  );
}
