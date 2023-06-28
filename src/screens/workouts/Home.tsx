import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import {Forms} from '../../components'

export default function Home() {
    return (
        <SafeAreaView style={{paddingHorizontal: 16}}>
            <Forms.Input  placeholder={'Email'}/>
        </SafeAreaView>
    )
}