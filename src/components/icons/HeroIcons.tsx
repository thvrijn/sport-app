import React from 'react'
import * as Mini from 'react-native-heroicons/mini'
import * as Outline from 'react-native-heroicons/outline'
import * as Solid from 'react-native-heroicons/solid'

const icons = {
    mini: Mini,
    outline: Outline,
    solid: Solid,
}

interface HeroIconsProps {
    repo?: string
    name: string
    color?: string
    style?: object
}

export default function HeroIcons({ repo = 'outline', name, color, style }: HeroIconsProps) {
    const Component = icons[repo][name]

    return (
        <Component color={color} style={style} />
    )
}