import React from 'react'
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SignInForm from './SignInForm'
import { useNavigation } from '@react-navigation/native'
import { Screen } from '../../utils/enums'
import { OrDivider, SocialLogin, TextLinkRow } from '@components/index'

const SignIn = () => {
    const navigation: any = useNavigation()
    return (
        <ScrollView style={styles.container}>
            <SocialLogin faceBookTitle='Sign up with Facebook' googleTitle='Sign up with Google' />
            <OrDivider />
            <SignInForm />
            <View style={styles.footerContainer}>
                <TextLinkRow label="Already have an account?" linkText="Sign In" onPress={() => navigation.navigate(Screen.Login)} />
                <View style={styles.termsContainer}>
                    <Text style={styles.termsText}>By signing up you agree to our</Text>
                    <TouchableOpacity onPress={() => Alert.alert("Coming Soon")}>
                        <Text style={styles.policyLink}>Privacy Policy and Terms.</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
    },

    footerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 2
    },
    authPromptContainer: {
        flexDirection: 'row',
    },
    promptText: {
        color: 'black',
        fontSize: 15,
    },
    signUpLink: {
        color: '#DC7917',
        textDecorationLine: 'underline',
        fontSize: 15,
        paddingLeft: 9,
    },
    termsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingBottom: 28
    },
    termsText: {
        fontSize: 12,
    },
    policyLink: {
        textDecorationLine: 'underline',
        paddingLeft: 5,
        fontSize: 12,
    },
});
