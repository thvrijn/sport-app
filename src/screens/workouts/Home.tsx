import React from 'react'
import {PlatformColor, SafeAreaView, StyleSheet} from 'react-native'

import {Animated} from 'react-native'
import {SFSymbol} from 'react-native-sfsymbols'
import {SearchBar} from 'react-native-screens'

const AnimatedSFSymbol = Animated.createAnimatedComponent(SFSymbol);

// Components
import * as Home from '../../components/home'
import * as Lists from '../../components/lists'

const WORKOUTS = [
    {
        title: 'juli 2023',
        data: [
            {
                date: new Date(),
                title: 'Full Body - Day 1',
                icon: 'EllipsisVerticalIcon',
                workouts: [
                    {sets: 3, reps: 10, label: 'Bench Press'},
                    {sets: 3, reps: 10, label: 'Pull Ups'},
                    {sets: 3, reps: 10, label: 'Dips'},
                ]
            },
            {
                date: new Date(),
                title: 'Full Body - Day 2',
                icon: 'EllipsisVerticalIcon',
                workouts: [
                    {sets: 3, reps: 10, label: 'Squad'},
                    {sets: 3, reps: 10, label: 'Seated Row'},
                    {sets: 3, reps: 10, label: 'Bicep Curl'},
                ]
            },
        ]
    },
]

export default function ({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar

            />

            <Home.Workouts data={WORKOUTS}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 16,
        overflow: 'visible'
    }
})