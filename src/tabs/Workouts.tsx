import React from 'react'
import {StyleSheet} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as Screens from '../screens'
import Colors from '../variables/colors'

const Stack = createNativeStackNavigator()

export default function Workouts() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Screens.Workouts.Home}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: Colors.neutral[950]
    }
})