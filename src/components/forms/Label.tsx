import React from 'react'
import {PlatformColor, StyleSheet, Text} from 'react-native'

export default function({children}) {
    return <Text style={styles.label}>{children}</Text>
}

const styles = StyleSheet.create({
    label: {
        color: PlatformColor('label'),
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4
    }
})