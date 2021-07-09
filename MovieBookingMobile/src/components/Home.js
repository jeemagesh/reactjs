import React from 'react';
import { View, Text,Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        /* //https://reactnavigation.org/docs/navigating */
        <View style={{ justifyContent: 'center', alignContent: "center", flex: 1, 
        paddingBottom: 300, paddingTop: 200, paddingLeft: 100 }}>
            <Text>BookYourFilm Welcomes you !!</Text>
            <Text>Please go to Bookings tab to book your ticket</Text>
       
        </View>
    );
}

export default Home;