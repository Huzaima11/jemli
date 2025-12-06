import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SmallProfileView from '@components/SmallProfileView/SmallProfileView'

const Playmate = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Suggested for you</Text>
            </View>
            <ScrollView style={styles.profiles}>
                {
                    Array(16).fill(null).map((_, index) => {
                        return (
                            <View style={styles.row} key={index}>
                                <SmallProfileView />
                                <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyle}>
                                    <Text style={styles.buttonText}>Reach Out</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

export default Playmate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    top: {
        borderBottomWidth: 0.4,
        borderColor: '#7A7A7A'
    },
    title: {
        color: '#000',
        fontSize: 17,
        padding: 14
    },
    profiles: {
        marginVertical: 14
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 16
    },
    buttonStyle: {
        backgroundColor: '#DC7917',
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 13,
        paddingVertical: 7
    },
    buttonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: "500"
    }
});
