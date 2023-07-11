import React from 'react'
import {StyleSheet, View, Text, PlatformColor, Pressable, Alert} from 'react-native'
import {Link, useLinkProps} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as Screens from '../screens'
import Colors from '../variables/colors'

// Components
import * as Home from '../components/home'

const Stack = createNativeStackNavigator()

export default function Workouts() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Overview'}
                component={Screens.Workouts.Home}
                options={{
                    headerRight: () => <Home.HeaderRight/>,
                }}
            />

            <Stack.Screen name={'Track'} component={Screens.Workouts.Track}/>
            <Stack.Screen name={'Create workout'} component={Screens.Workouts.CreateWorkout}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: Colors.neutral[950]
    },
    header_right_text: {
        color: PlatformColor('link')
    }
})