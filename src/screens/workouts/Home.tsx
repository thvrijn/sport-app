import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Forms } from '../../components'
import Colors from '../../variables/colors'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Forms.Input placeholder={'Email'} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: Colors.neutral[950],
    }
})