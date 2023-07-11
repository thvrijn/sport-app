import React from 'react'
import {Modal, PlatformColor, StyleSheet, View} from 'react-native'

export default function ({children, onClose, visible = false}) {
    return <Modal
        visible={visible}
        presentationStyle={'pageSheet'}
        onRequestClose={onClose}
        animationType={'slide'}
        style={styles.modal}
    >
        <View style={styles.container}>
            <View style={styles.handle}/>

            {children}
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PlatformColor('systemBackground'),
        padding: 8,
        flex: 1,
    },
    handle: {
        backgroundColor: PlatformColor('secondarySystemBackground'),
        width: 64,
        height: 8,
        borderRadius: 8,
        alignSelf: 'center',
        marginBottom: 16,
        justifyContent: 'flex-end'
    },
    modal: {
        height: 200
    }
})