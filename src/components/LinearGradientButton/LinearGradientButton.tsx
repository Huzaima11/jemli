import { StyleSheet, Text, TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient"

interface IProps {
    text?: string
    onPress?: () => void
    disable?: boolean
}

const LinearGradientButton = ({ text, onPress, disable }: IProps) => {
    const gradientColors = disable
        ? ['#A9A9A9', '#C0C0C0']
        : ['#DC4437', '#F5B400']

    return (
        <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
        >
            <TouchableOpacity
                onPress={onPress}
                disabled={disable}
                style={{ opacity: disable ? 0.6 : 1 }}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default LinearGradientButton

const styles = StyleSheet.create({
    button: {
        padding: 20,
        borderRadius: 15,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500'
    },
})
