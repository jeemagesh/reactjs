import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import BookingDetails from './BookingDetails';
import Bookings from './Bookings';



const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
    
      <Stack.Screen name="BookingDetails" component={BookingDetails} />
      
      
      
    </Stack.Navigator>
  );
};
