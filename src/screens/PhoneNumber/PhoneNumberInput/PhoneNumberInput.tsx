import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../../utils/enums';
import { LinearGradientButton } from '@components/index';

const PhoneNumberInput = () => {
    const phoneInput = useRef<PhoneInput>(null);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const navigation:any = useNavigation()
    return (
        <View>
            <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="PK"
                layout="first"
                onChangeText={(text) => {
                    setValue(text);
                }}
                onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                }}
                withDarkTheme
                placeholder='Enter Your Number'
                containerStyle={styles.containerStyle}
                textInputStyle={styles.textInputStyle}
                textContainerStyle={styles.textContainerStyle}
                codeTextStyle={styles.codeTextStyle}
                flagButtonStyle={styles.flagButtonStyle}
            />
            <LinearGradientButton text='Verify Number' onPress={() => {
                setShowMessage(true);
                navigation.navigate(Screen.VerificationCode)
            }} />
            {showMessage && (
                <View >
                    <Text>Value : {value}</Text>
                    <Text>Formatted Value : {formattedValue}</Text>
                </View>
            )}
        </View>
    )
}

export default PhoneNumberInput



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        position: 'relative',
        height: '100%',
        backgroundColor: "#ffff",
    },
    circleImage: {
        position: 'absolute',
        left: 20
    },
    containerStyle: {
        borderWidth: 1,
        borderColor: '#CCC3A7',
        borderRadius: 15,
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        height: 66,
    },
    textInputStyle: {
        height: 66,
        fontSize: 16
    },
    textContainerStyle: {
        backgroundColor: "#ffffff",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    flagButtonStyle: {
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        borderRightWidth: 1,
        opacity: 1,
        borderRightColor: '#CDD4D9',
    },
    codeTextStyle: {
        fontSize: 18
    }
})
