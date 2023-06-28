import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as Screens from '../screens'

const Stack = createNativeStackNavigator()

export default function Workouts() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Screens.Workouts.Home}/>
        </Stack.Navigator>
    )
}