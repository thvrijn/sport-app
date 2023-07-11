import React from 'react'
import {Text, TouchableHighlight, StyleSheet, PlatformColor, StyleProp} from 'react-native'

import * as Functions from '../../functions'

interface ButtonType {
    children: any,
    onPress: () => void,
    style?: object
}

export default function Button({children, onPress, style}: ButtonType) {
    return <TouchableHighlight style={Functions.styles(styles.button, style)} onPress={onPress}>
        <Text style={styles.button_text}>{children}</Text>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-start',
        backgroundColor: PlatformColor('systemRed'),
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
    },
    button_text: {
        color: 'white',
        fontWeight: '500'
    }
})