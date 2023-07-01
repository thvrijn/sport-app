import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Colors from '../../variables/colors'
import { Icons } from '../../components'

interface InputProps {
    placeholder: string
    icon?: string
}

export default function Input({ placeholder, icon }: InputProps) {
    return (
        <View style={styles.container}>
            {icon && <Icons.HeroIcons  name={icon} color={Colors.neutral['600']} style={styles.icon} />}

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={Colors.neutral[600]}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.neutral[800],
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        fontWeight: '600'
    },
    icon: {
        marginRight: 12
    },
    input: {
        flex: 1,
    }
})