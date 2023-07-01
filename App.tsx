import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Tabs from './src/tabs'
import { Icons } from './src/components'

const BottomTabs = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer theme={DarkTheme}>
            <BottomTabs.Navigator>
                <BottomTabs.Screen name={'Workouts'} component={Tabs.Workouts} options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Icons.Custom name={'WorkoutIcon'} color={color} size={32} />
                        )
                    }
                }} />
                <BottomTabs.Screen name={'Nutrition'} component={Tabs.Nutrition} options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Icons.Custom name={'NutritionIcon'} color={color} size={24} />
                        )
                    }
                }} />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}