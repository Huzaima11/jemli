import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface IProps {
    message?: string
}
const ErrorMessage = ({message}: IProps) => {
  return (
    <Text style={styles.errorText}>{message}</Text>
  )
}

export default ErrorMessage

const styles = StyleSheet.create({
    errorText: {
        fontSize: 12,
        color: 'red',
        marginBottom: 10,
        marginLeft: 5,
    },

});   