import React from 'react'
import { SafeAreaView, StyleSheet, Appearance } from 'react-native'
import { DarkTheme } from '@react-navigation/native'
import { Forms } from '../../components'

export default function Home() {
    console.log(DarkTheme.colors);

    return (
        <SafeAreaView style={styles.container}>
            <Forms.Input placeholder={'Search...'} icon={'MagnifyingGlassIcon'} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    }
})