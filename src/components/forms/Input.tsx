import React from 'react'
import {View, TextInput, StyleSheet, PlatformColor} from 'react-native'
import {DarkTheme, useTheme} from '@react-navigation/native'
import Colors from '../../variables/colors'
import * as Icons from '../../components/icons'

interface InputProps {
    placeholder?: string
    icon?: string
    style?: object
}

export default function Input({placeholder, icon, style}: InputProps) {
    return (
        <View style={{...styles.container, ...style}}>
            {icon && <Icons.SFSymbols style={styles.icon} name={icon} color={PlatformColor('placeholderText')}/>}


            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={PlatformColor('placeholderText')}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: PlatformColor('tertiarySystemFill'),
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        fontWeight: '600'
    },
    icon: {
        marginRight: 12
    },
    input: {
        flex: 1,
        color: PlatformColor('label')
    }
})