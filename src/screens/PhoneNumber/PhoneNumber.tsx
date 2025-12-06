import React from 'react'
import { StyleSheet, View } from 'react-native'
import PhoneNumberInput from './PhoneNumberInput/PhoneNumberInput';
import { CircleImage, SectionHeader } from '@components/index';

const PhoneNumber = () => {

    return (
        <View style={styles.container}>
            <CircleImage />
            <SectionHeader title='Verify your mobile' description='We will send a text to verify your number. No fees will apply.' />
            <PhoneNumberInput />
        </View>
    )
}

export default PhoneNumber

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
    }
})
