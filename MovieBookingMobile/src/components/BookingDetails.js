import * as React from 'react';
import { connect } from 'react-redux'
import { fetchMovies } from '../Actions/MovieAction';
import { useEffect } from 'react'
import {
    StyleSheet, CheckBox, SafeAreaView, StatusBar, Text, Button, TextInput, Image,
    TouchableOpacity, View, ScrollView
} from 'react-native';

export default function BookingDetails({ route, navigation }) {
    console.log(route)
    const { movieTitle, poster, year } = route.params;

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
                <Text>{movieTitle}</Text><Text>{" "}</Text><Text>{year}</Text>

            </View>
            <Text>             {"\n"}           </Text>
            <View style={{ flexDirection: 'row' }}>
                <Text>Your Next available show is on : </Text>
                <Text>{new Date().getDate()}  {" "}
                    {new Date().toLocaleString("en-US", { month: "long" })}  {new Date().getFullYear()}
                </Text></View>
                <Text>             {"\n"}           </Text>
            <View style={{ flexDirection: 'row' }}>
                <Text>Show Time: </Text>
                <Text>02:00 PM
                </Text></View>
                <Text>             {"\n"}           </Text>
            <View>
                <Button title="Submit"  onPress={() => navigation.navigate("BookingConfirmation",{
                    movieTitle: movieTitle,
                    poster: poster
                })}></Button>
            </View>
        </View>

    );
}