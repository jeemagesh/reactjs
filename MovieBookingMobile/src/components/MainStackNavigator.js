import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bookings from "./Bookings";
import BookingDetails from "./BookingDetails";
import BookingConfirmation from "./BookingConfirmation";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};
const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#9AC4F8",
                },
                headerTintColor: "white",
                headerBackTitle: "Back",
            }}
        ><Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="Bookings"  component={Bookings} options={{ title: 'Movie Details' }}/>
        <Stack.Screen name="BookingDetails" component={BookingDetails} options={{ title: 'Booking Details' }}/>

        <Stack.Screen name="BookingConfirmation" component={BookingConfirmation} options={{ title: 'Confirmation' }}/>
            
        </Stack.Navigator>
    );
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={HomeScreen} />

        </Stack.Navigator>
    );
}



export { MainStackNavigator, ContactStackNavigator };