import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SmallProfileView = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'user' }}
                style={{
                    width: 50,
                    height: 50
                }}
                resizeMode="contain"
            />
            <View style={styles.midContainer}>
                <Text style={styles.userName}>Sajid Hussain</Text>
                <View style={styles.view}>
                    <Image
                        source={{ uri: 'visibility_off' }}
                        style={{
                            width: 14,
                            height: 14
                        }}
                        resizeMode="contain"
                    />
                    <Text style={styles.profileText}>View Profile</Text>
                </View>
            </View>
        </View>
    )
}

export default SmallProfileView

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5

    },
    userName: {
        fontSize: 15,
        color: '#000',
        fontWeight: '600'
    },
    midContainer: {
        marginHorizontal: 12
    },
    profileText: {
        fontSize: 12,
        color: '#7A7A7A',
        paddingLeft: 6,
        fontWeight: '400'
    }
});
