import * as React from 'react';
import { connect } from 'react-redux'
import { fetchMovies } from '../Actions/MovieAction';
import { useEffect } from 'react'
import {
    StyleSheet, CheckBox, SafeAreaView, StatusBar, Text, Button, TextInput, Image,
    TouchableOpacity, View, ScrollView
} from 'react-native';

function HomeScreen({ MoviesData, fetchMovies,navigation }) {
    const styles = StyleSheet.create({
        contentContainer: {
            paddingVertical: 20,
            flex: 1,
            paddingBottom: 20
        },
        scrollView: {
            flex: 1,
            marginHorizontal: 80,


        },
        view: {
            flex: 1,
            padding: 10
        },
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        },
        text: {
            fontSize: 12,
            alignContent: 'center'
        },
    });


    useEffect(() => {
        fetchMovies()
    }, [])


    return MoviesData.loading ? (
        <Text>Loading.....</Text>
    ) : MoviesData.error ? (
        <Text>Error.....</Text>
    ) :

        (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}
                    contentContainerStyle={styles.contentContainer}>

                    {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
                    {

                        MoviesData && MoviesData.movieReducer &&
                        MoviesData.movieReducer.movies && MoviesData.movieReducer.movies.map((item) => {
                            return (
                                <View style={styles.view} key={item.Title}>
                                    <Text key={item.Title} style={styles.text}>
                                        {item.Title}</Text>
                                    <TouchableOpacity 
                                     onPress={() => navigation.navigate('Bookings',{
                                         movieTitle:item.Title,
                                         poster:item.Poster,
                                         year:item.Year
                                     })}
                                     style={{ height: "100%", width: "100%" }}>
                                        <Image style={{ height: "100%", width: "100%" }}
                                            source={{ uri: item.Poster }} 
                                           ></Image>
                                    </TouchableOpacity>
                                </View>
                            )

                        })
                    }

                    {/* </View> */}
                </ScrollView></SafeAreaView>

        )



}

const mapStateToProps = (state) => ({
    MoviesData: state


})

const mapDispatchToProps = dispatch => {

    return {

        //dispatch method fetchFoods() written in action file. 
        fetchMovies: () => dispatch(fetchMovies())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)