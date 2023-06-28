import React from 'react'
import {TextInput} from 'react-native'

export default function Input({placeholder}) {
    return (
        <TextInput
            placeholder={placeholder}
            style={{
                backgroundColor: 'white',
                // borderWidth: 1.5,
                borderRadius: 32,
                paddingHorizontal: 16,
                paddingVertical: 12,
                fontSize: 20
            }}
        />
    )
}