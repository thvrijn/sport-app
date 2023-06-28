import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import * as Tabs from './src/tabs'

const BottomTabs = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabs.Navigator>
                <BottomTabs.Screen name={'Workouts'} component={Tabs.Workouts}/>
                <BottomTabs.Screen name={'Nutrition'} component={Tabs.Nutrition}/>
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}