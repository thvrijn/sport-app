import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import Colors from '../../variables/colors'

export default function Input({ placeholder }) {
    return (
        <TextInput
            placeholder={placeholder}
            style={styles.input}
            placeholderTextColor={Colors.neutral[600]}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.neutral[800],
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        fontWeight: '600'
    }
})