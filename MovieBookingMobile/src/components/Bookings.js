import * as React from 'react';
import { connect } from 'react-redux'
import { fetchMovies } from '../Actions/MovieAction';
import { useEffect, useState } from 'react'
import {
  StyleSheet, CheckBox, SafeAreaView, StatusBar, Text, Button, TextInput, Image,
  TouchableOpacity, View, ScrollView,Pressable
} from 'react-native';
import { DateTimePicker } from '@react-native-community/datetimepicker';
import { Table, Cell, Rows, Cols, Row, Col } from 'react-native-table-component';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from './Home';
import BookingDetails from './BookingDetails';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './StackNavigator';
function Bookings({ route, navigation }) {

  const Tab = createMaterialBottomTabNavigator();
  
  const elementButton = () => (
    <TouchableOpacity >
      <View style={styles.btn}>
        <Button title="Book" onPress={() => navigation.navigate('BookingDetails', {
          movieTitle: item.Title,
          poster: item.Poster,
          year: item.Year
        })}></Button>
      </View>
    </TouchableOpacity>
  );
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30 },
    head: { height: 40 },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1 },
    row: { height: 28 },
    text: { textAlign: 'center', width: "100%" },
    btn: { width: 58, height: 18, marginLeft: 15, borderRadius: 2 },
    btnText: { textAlign: 'center' }
  });

  /* 2. Get the param */
  const { movieTitle, poster, year } = route.params;
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  console.log(route.params)
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showTimepicker = () => {
    showMode('time');
  };
  const elementImage = (poster) => (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ height: "50%", width: "50%", resizeMode: "contain" }}
        source={{ uri: poster }}
      ></Image>
    </View>

  );
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Image style={{ height: "50%", width: "50%", resizeMode: "contain" }}
        source={{ uri: poster }}
      ></Image>
      <Text>             {"\n"}           </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text>{movieTitle}</Text><Text>{" "}</Text><Text>{year}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>             {"\n"}           </Text>

      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text  >130 min</Text>
      
     
        <Text>   Rating: 4.5</Text>

      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>             {"\n"}           </Text>

      </View><View style={styles.btn}>
        {/*  <Tab.Navigator>
    <Tab.Screen name="Book"  component={Home} onPress={() => navigation.navigate('BookingDetails', {
          movieTitle: item.Title,
          poster: item.Poster,
          year: item.Year
        })}/>
 
  </Tab.Navigator> */}
        <Button title="Book"  onPress={() => navigation.navigate('BookingDetails', {
          movieTitle: movieTitle,
          poster: poster,
          year: year
        })}></Button>
        
       {/*  <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('BookingDetails')}>
        <Text>Book</Text>
      </Pressable> */}
      </View>

      {/* <Table borderStyle={{ borderColor: '#C1C0B9' }}>
        <Row></Row>

        <Row data={[movieTitle, year]} flexArr={[4,2]} style={styles.head} textStyle={styles.text}>
        </Row>
        <Row data={["130 min"]} flexArr={[2]} style={styles.head} textStyle={styles.text}>
        </Row>
        <Row data={["Rating: 4.5"]} flexArr={[2]} style={styles.head} textStyle={styles.text}>
        </Row>
        <Row data={[elementButton()]} alignItems="center" style={styles.head}
          textStyle={styles.text}></Row>
      </Table> */}
      {/*  <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
      {/*  {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />)} */}
    </View>
  );
}

export default Bookings