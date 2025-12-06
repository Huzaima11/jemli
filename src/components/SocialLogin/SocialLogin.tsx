import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

interface IProps {
    faceBookTitle: string,
    googleTitle: string
}

const SocialLogin = ({ faceBookTitle, googleTitle }: IProps) => {

    return (
        <View >
            <TouchableOpacity style={styles.facebookButton}>
                <Image style={{ height: 30, width: 30 }} resizeMode="contain" source={{ uri: 'fb' }} />
                <Text style={styles.facebookButtonText}>{faceBookTitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton}>
                <Image style={{ height: 30, width: 30 }} resizeMode="contain" source={{ uri: 'google' }} />
                <Text style={styles.googleButtonText}>{googleTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    facebookButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3A5998',
        padding: 18,
        borderRadius: 15,
        marginBottom: 10
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#A7B8CC',
        padding: 18,
        borderRadius: 15,

    },
    facebookButtonText: {
        color: 'white',
        fontSize: 17,
        paddingLeft: 22,
        fontWeight: '500'
    },
    googleButtonText: {
        color: 'black',
        fontSize: 17,
        paddingLeft: 22,
        fontWeight: '500'
    },

});

export default SocialLogin