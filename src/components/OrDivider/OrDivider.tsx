import { StyleSheet, Text, View } from "react-native"

const OrDivider = () => {
    return (
        <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
    </View>
    )
}
export default OrDivider

const styles = StyleSheet.create ({
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 18,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#A7B8CC',
    },
    orText: {
        marginHorizontal: 20,
        color: 'black',
        fontWeight: '500',
        fontSize: 15
    },
})