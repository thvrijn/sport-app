import React from 'react'
import {StyleSheet, View, Text, PlatformColor} from 'react-native'
import {Icons} from "../index";
import * as Functions from '../../functions'

const CALENDAR = [
    {
        day_label: 'MON',
        day_date: '3'
    },
    {
        day_label: 'TUE',
        day_date: '4'
    },
    {
        day_label: 'WED',
        day_date: '5'
    },
    {
        day_label: 'THU',
        day_date: '6',
        active: true
    },
    {
        day_label: 'FRI',
        day_date: '7'
    },
    {
        day_label: 'SAT',
        day_date: '8'
    },
    {
        day_label: 'SUN',
        day_date: '9'
    }
]

export default function Calendar() {
    return (
        <View style={styles.container}>
            <View>
                <Icons.HeroIcons name={'ChevronLeftIcon'} color={PlatformColor('label')}/>
            </View>

            {
                CALENDAR.map((day, index) => {
                    return (
                        <View key={index} style={Functions.styles(styles.day, day.active ? styles.day_active : {})}>
                            <Text style={styles.day_label}>{day.day_label}</Text>
                            <Text style={styles.date}>{day.day_date}</Text>
                        </View>
                    )
                })
            }

            <View>
                <Icons.HeroIcons name={'ChevronRightIcon'} color={PlatformColor('label')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16
    },
    day: {
        alignItems: 'center',
        marginHorizontal: 6
    },
    day_active: {
        backgroundColor: PlatformColor('systemRed'),
        borderRadius: 8,
        padding: 6,
    },
    day_label: {
        color: PlatformColor('secondaryLabel')
    },
    date: {
        color: PlatformColor('label'),
        fontSize: 24,
        fontWeight: '600'
    }
})