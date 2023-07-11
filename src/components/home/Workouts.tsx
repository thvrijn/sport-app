import React from 'react'
import {StyleSheet, Text, View, PlatformColor, DynamicColorIOS, SectionList} from 'react-native'
import {useActionSheet} from '@expo/react-native-action-sheet'
import {ContextMenuView} from 'react-native-ios-context-menu'

// Components
import * as Icons from '../icons'

// Other
import * as Functions from '../../functions'

export default function Workouts({data}) {
    const {showActionSheetWithOptions} = useActionSheet();

    function confirmDelete() {
        const options = ['Delete', 'Cancel'];
        const destructiveButtonIndex = 0;
        const cancelButtonIndex = 1;

        showActionSheetWithOptions({
            options,
            cancelButtonIndex,
            destructiveButtonIndex,
            title: 'Delete',
            message: 'Are you sure you want to delete this workout?'
        }, (selected: number) => {
            switch (selected) {
                case 0:
                    break;
            }
        });
    }

    return (
        <View style={{flex: 1, paddingHorizontal: -8}}>
            <SectionList
                sections={data}
                renderSectionHeader={({section}) => {
                    return (
                        <View style={styles.section_header}>
                            <Text style={styles.section_header_label}>{section.title}</Text>
                            <Text style={styles.section_header_label}>{section.data.length} Workouts</Text>
                        </View>
                    )
                }}
                renderItem={({item, index}) => {
                    const date = new Date(item.date)

                    return (
                        <ContextMenuView
                            style={{paddingHorizontal: 6}}
                            menuConfig={{
                                menuTitle: 'Actions',
                                menuItems: [
                                    {
                                        actionKey: 'edit',
                                        actionTitle: 'Edit',
                                        icon: {
                                            iconType: 'SYSTEM',
                                            iconValue: 'pencil'
                                        }
                                    },
                                    {
                                        actionKey: 'delete',
                                        actionTitle: 'Delete',
                                        menuAttributes: ['destructive'],
                                        icon: {
                                            iconType: 'SYSTEM',
                                            iconValue: 'trash'
                                        }
                                    },
                                ],
                            }}
                            onPressMenuItem={({nativeEvent}) => {
                                switch (nativeEvent.actionKey) {
                                    case 'delete':
                                        return confirmDelete()
                                }
                            }}
                        >
                            <View
                                key={index}
                                style={Functions.styles(styles.item, {borderBottomWidth: index + 1 < data.length})}
                            >
                                <View style={styles.item_date_container}>
                                    <View style={styles.item_date}>
                                        <Text style={styles.item_date_day}>
                                            {date.toLocaleDateString('nl-NL', {weekday: 'short'}).split(' ')[0]}
                                        </Text>
                                        <Text style={styles.item_date_number}>{date.getDate()}</Text>
                                    </View>
                                </View>

                                <View style={styles.item_content}>
                                    <View style={styles.item_header}>
                                        <View style={styles.item_header_title}>
                                            <Text style={styles.item_title}>{item.title}</Text>
                                        </View>
                                    </View>
                                    {
                                        item.workouts &&
                                        item.workouts.map((workout, index) => {
                                            return (
                                                <View key={index} style={styles.item_workout}>
                                                    <Text style={styles.item_workout_details}>
                                                        {workout.sets}x{workout.reps}
                                                    </Text>

                                                    <Text style={styles.item_workout_label}>{workout.label}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        </ContextMenuView>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: DynamicColorIOS({
            dark: PlatformColor('tertiarySystemFill'),
            light: 'white'
        }),
        borderColor: PlatformColor('separator'),
        borderRadius: 10,
        paddingLeft: 16,
        paddingRight: 12,
        paddingVertical: 10,
        marginBottom: 4
    },
    section_header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    section_header_label: {
        color: PlatformColor('secondaryLabel'),
        fontWeight: '700',
        marginBottom: 8
    },
    item_date: {
        alignItems: 'center',
        marginRight: 16
    },
    item_date_day: {
        color: PlatformColor('secondaryLabel')

    },
    item_date_number: {
        color: PlatformColor('label'),
        fontSize: 20,
        fontWeight: '600'
    },
    item_content: {
        flex: 1
    },
    item_header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item_title: {
        color: PlatformColor('label'),
        fontSize: 16,
        fontWeight: '500'
    },
    item_workout: {
        flexDirection: 'row',
        marginTop: 4
    },
    item_workout_details: {
        marginRight: 4,
        fontWeight: '600',
        color: PlatformColor('secondaryLabel')
    },
    item_workout_label: {
        color: PlatformColor('secondaryLabel')
    },
    item_header_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexGrow: 1
    },
    item_header_date: {},
    item_date_container: {}
})