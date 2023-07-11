import React from 'react'
import {TextInput, StyleSheet, Text, View, PlatformColor, DynamicColorIOS, SectionList, FlatList} from 'react-native'
import {useActionSheet} from '@expo/react-native-action-sheet'
import {ContextMenuView} from 'react-native-ios-context-menu'

// Components
import * as Icons from '../icons'

// Other
import * as Functions from '../../functions'

interface SettingProp {
    type?: 'text'
    placeholder?: string
    title?: string
    value?: string
    icon?: {
        name: string
        color?: string
    }
}

interface SettingsProps {
    data: Array<SettingProp>
}

export default function Settings({data}: SettingsProps) {
    return (
        <View style={styles.group}>
            <FlatList
                style={{paddingLeft: 14}}
                data={data}
                renderItem={({item, index}) => {
                    return (
                        <View
                            key={index}
                            style={Functions.styles(styles.item, {borderBottomWidth: index + 1 < data.length})}
                        >
                            {
                                item.icon &&
                                <View style={Functions.styles(styles.item_icon, {backgroundColor: item.icon.color})}>
                                    <Icons.SFSymbols
                                        name={item.icon.name}
                                        color={'white'}
                                        size={18}
                                    />
                                </View>
                            }

                            {/* Title is only shown when type is null */}
                            {!item.type && <Text style={styles.item_title}>{item.title}</Text>}

                            {/* Shown if type = text */}
                            {
                                item.type === 'text' && <TextInput
                                    style={styles.item_title}
                                    placeholder={item.placeholder}
                                />
                            }

                            {/* Chevron is only shown when type is null */}
                            {
                                !item.type && <View style={styles.item_right}>
                                    <Text style={styles.item_value}>{item.value}</Text>

                                    <Icons.SFSymbols
                                        name={'chevron.right'}
                                        color={PlatformColor('placeholderText')}
                                        size={14}
                                        weight={'bold'}
                                    />
                                </View>
                            }
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    group: {
        backgroundColor: DynamicColorIOS({
            dark: PlatformColor('tertiarySystemFill'),
            light: 'white'
        }),
        borderRadius: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: PlatformColor('separator'),
        paddingRight: 12,
        paddingVertical: 8,
    },
    item_title: {
        color: PlatformColor('label'),
        fontSize: 16,
        fontWeight: '500',
        flexGrow: 1
    },
    item_icon: {
        backgroundColor: 'red',
        borderRadius: 6,
        // padding: 4,
        marginRight: 14
    },
    item_right: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item_value: {
        color: PlatformColor('secondaryLabel'),
        marginRight: 6
    }
})