import React from 'react'
import {ContextMenuButton, MenuActionConfig, MenuConfig} from 'react-native-ios-context-menu'

// Components
import * as Icons from '../icons'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {Platform, PlatformColor} from "react-native";

const menuConfig: MenuConfig = {
    menuTitle: '',
    menuItems: [
        {
            actionKey: 'start-workout',
            actionTitle: 'Start workout',
            icon: {
                type: 'IMAGE_SYSTEM',
                imageValue: {
                    systemName: 'timer',
                },
            },
        },
        {
            actionKey: 'create-workout',
            actionTitle: 'Create workout',
            icon: {
                type: 'IMAGE_SYSTEM',
                imageValue: {
                    systemName: 'plus.square',
                },
            },
        }
    ]
}

export default function HomeHeaderRight() {
    const navigation: NavigationProp<any> = useNavigation()

    return <ContextMenuButton
        isMenuPrimaryAction={true}
        menuConfig={menuConfig}
        onPressMenuItem={({nativeEvent}) => {
            switch (nativeEvent.actionKey) {
                case 'start-workout':
                    navigation.navigate('Track')
                    break
                case 'create-workout':
                    navigation.navigate('Create workout')
                    break
            }
        }}
    >
        <Icons.SFSymbols name={'plus.square.fill'} size={32}/>
    </ContextMenuButton>
}