import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import BookingDetails from './BookingDetails';
import {
  StyleSheet, CheckBox, SafeAreaView, StatusBar, Text, Button, TextInput, Image,
  TouchableOpacity, View, ScrollView
} from 'react-native';
const Tab = createMaterialBottomTabNavigator();

function BookingConfirmation({ route }) {
  console.log(route);
  const { movieTitle, poster } = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "blue"
    },
  });
  return (
    <View style={styles.container}> 
     <Image style={{ height: "50%", width: "50%", resizeMode: "contain" }}
      source={{ uri: poster }}
      ></Image>
      <Text>             {"\n"}           </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text>{movieTitle}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>             {"\n"}           </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>You have successfully booked the ticket !!!</Text>
      </View>
    </View>

  );
}

export default BookingConfirmation;