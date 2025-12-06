import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface IProps {
    description: string
}

const ContentBlock = ({ description }: IProps) => {
    return (
        <View style={style.container}>
            <View style={style.userNameContainer}>
                <Text style={style.hey}>Hey, <Text style={style.userName}>Ahmad!</Text></Text>
                <Image style={{ width: 40, height: 40, marginLeft: 7 }} resizeMode="contain" source={{ uri: 'hey' }} />
            </View>
            <Text style={style.description}>{description}</Text>
        </View>
    )
}

export default ContentBlock

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 12
    },
    userNameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    description: {
        fontSize: 15,
        color: 'black',
        lineHeight: 21,
        marginTop: 4,
        marginBottom: 10
    },
    hey: {
        fontSize: 22,
        color: 'black',
        fontWeight: '600'
    },
    userName: {
        color: '#DC7917'
    }
})