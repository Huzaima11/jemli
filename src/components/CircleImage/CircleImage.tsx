import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const CircleImage = () => {
    return (
        <View style={styles.container}>
            <Image style={{ width: 860, height: 860 }} resizeMode="contain" source={{ uri: 'circle_w' }} />
        </View>
    )
}

export default CircleImage

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 15,
    },
})
