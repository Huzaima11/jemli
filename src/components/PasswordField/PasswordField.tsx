import React, { useState } from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

interface IProps {
    placeHolder: string,
    onChangeText?: (value: string)=> void,
    value?: string
}

const PasswordField = ({placeHolder, onChangeText , value}:IProps) => {
    const [visible, setVisible] = useState(false)
    
    return (
        <View style={styles.passwordInputContainer}>
            <TextInput
                style={styles.input}
                secureTextEntry={!visible}
                placeholderTextColor="black"
                placeholder={placeHolder}
                onChangeText={onChangeText}
                value={value}
            />
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
             onPress={() => setVisible(!visible)}>
            <Image style={{ height: 16, width: 20 }} resizeMode="contain" source={{uri:  visible ? 'visibility': 'visibility_off'  }} />
            </TouchableOpacity>
        </View>
    )
}

export default PasswordField

const styles = StyleSheet.create({

    input: {
        fontSize: 17,
        fontWeight: '500',
        color: 'black',
        height: 65,
        width: '92%'
    },
    passwordInputContainer: {
        height: 65,
        padding: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#CCC3A7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
    }
})