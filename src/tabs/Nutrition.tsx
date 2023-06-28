import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as Screens from '../screens'

const Stack = createNativeStackNavigator()

export default function Nutrition() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Screens.Nutrition.Home}/>
        </Stack.Navigator>
    )
}