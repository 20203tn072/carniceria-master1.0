import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Historial from '../../historial/adapters/screens/Historial'
const Stack = createStackNavigator();

export default function HistorialStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="a" component={Historial} options={{title: 'Historial'}}/>
        </Stack.Navigator>
    )
}