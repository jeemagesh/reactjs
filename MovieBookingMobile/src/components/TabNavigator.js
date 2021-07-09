import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./MainStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      labelStyle: {
        fontSize: 35,
      }
    }}>
      {/* <Tab.Screen name="Home" component={ContactStackNavigator} /> */}
      <Tab.Screen name="Booking" options={{ title: 'BookMyFilm' }} component={MainStackNavigator} />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;