import React from 'react'
import {SFSymbol, SymbolWeight} from 'react-native-sfsymbols'
import {OpaqueColorValue} from 'react-native'

interface SFSymbolsProps {
    name: string
    color?: string | OpaqueColorValue
    multicolor?: boolean
    size?: number,
    weight?: SymbolWeight
    style?: object
}

export default function SFSymbols({name, color, weight, style, multicolor = true, size = 16}: SFSymbolsProps) {
    return <SFSymbol
        name={name}
        size={size}
        resizeMode={'contain'}
        multicolor={multicolor}
        color={color}
        weight={weight}
        style={{...style, width: size, height: size}}
    />
}