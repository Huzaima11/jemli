import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Screen } from '../../utils/enums'

interface IProps {
    handleNext?: () => void,
    currentIndex?: number,
    resetSlider?: () => void,
    screen: string
}

const Pagination = ({ currentIndex, handleNext, resetSlider, screen }: IProps) => {
    const navigation: any = useNavigation()

    const handleOnNext = () => {
        if (screen === Screen.Location) {
            if (currentIndex !== undefined && currentIndex < 2) {
                handleNext?.();
            } else {
                navigation.navigate(screen)
                resetSlider?.()
            }
        } else {
            navigation.navigate(screen)
        }

    }
    const handleSkip = () => {
        if (screen === Screen.OverView) {
            navigation.navigate(screen)
            resetSlider?.()
        } else {
            navigation.navigate("MainTabs", { screen: Screen.Home });
        }
    }

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={handleSkip}>
                <Text style={style.skip}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOnNext}>
                <Text style={style.next}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Pagination

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 20
    },
    skip: {
        fontSize: 16,
        color: '#7A7A7A',
        fontWeight: '500'
    },
    next: {
        fontSize: 16,
        color: '#DC7917',
        fontWeight: '500'
    }
})