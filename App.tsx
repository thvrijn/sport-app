import React from 'react'
import {StatusBar, useColorScheme} from 'react-native'
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ActionSheetProvider} from '@expo/react-native-action-sheet'

import * as Tabs from './src/tabs'
import * as Icons from './src/components/icons'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const BottomTabs = createBottomTabNavigator()

export default function App() {
    const appearance = useColorScheme()

    return (
        <ActionSheetProvider>
            <NavigationContainer theme={appearance === 'dark' ? DarkTheme : DefaultTheme}>
                <StatusBar barStyle={`${appearance === 'dark' ? 'light' : 'dark'}-content`}/>

                <BottomTabs.Navigator screenOptions={{headerShown: false}}>
                    <BottomTabs.Screen
                        name={'Tab Workouts'}
                        component={Tabs.Workouts}
                        options={{
                            tabBarLabel: 'Workouts',
                            tabBarIcon: ({color}) => {
                                return <Icons.Custom name={'WorkoutIcon'} color={color} size={32}/>
                            }
                        }}
                    />

                    <BottomTabs.Screen
                        name={'Nutrition'}
                        component={Tabs.Nutrition}
                        options={{
                            tabBarIcon: ({color}) => {
                                return <Icons.Custom name={'NutritionIcon'} color={color} size={24}/>
                            }
                        }}
                    />
                </BottomTabs.Navigator>
            </NavigationContainer>
        </ActionSheetProvider>
    )
}