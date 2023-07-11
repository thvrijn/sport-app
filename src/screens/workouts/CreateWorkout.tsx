import React, {useCallback, useMemo, useRef, useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, PlatformColor, Pressable, Modal, Alert} from 'react-native'


// Components
import * as Forms from '../../components/forms'
import * as Icons from '../../components/icons'
import * as Lists from '../../components/lists'
import * as Modals from '../../components/modals'

// Other


export default function () {
    const [modal, setModal] = useState(false)
    const [exercises, setExercises] = useState([])

    return (
        <SafeAreaView style={styles.container}>
            <Lists.Settings
                data={[
                    {title: 'Abs'},
                    {title: 'Back'},
                    {title: 'Bicep'},
                    {title: 'Cardio'},
                    {title: 'Chest'},
                    {title: 'Legs'},
                    {title: 'Shoulder'},
                    {title: 'Triceps'},
                ]}
            />

            <Lists.Settings
                data={[
                    {
                        type: 'text',
                        placeholder: 'Name'
                    }
                ]}
            />

            <View style={styles.exercises}>
                <View style={styles.exercises_header}>
                    <Forms.Label>Exercises</Forms.Label>

                    <Pressable onPress={() => setModal(true)}>
                        <Icons.SFSymbols name={'plus.circle'} size={20}/>
                    </Pressable>
                </View>

                {!Boolean(exercises.length) &&
                    <Text style={styles.exercises_not_found}>There are no exercises added.</Text>}

                {
                    Boolean(exercises) &&
                    exercises.map((exercise) => {
                        return <View>{exercise.label}</View>
                    })
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 8
    },
    information: {},
    exercises: {
        marginTop: 32
    },
    exercises_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    exercises_not_found: {
        color: PlatformColor('secondaryLabel')
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})