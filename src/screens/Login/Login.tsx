import React, { useRef } from 'react';
import { View, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import LoginForm from './LoginForm';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Screen } from '../../utils/enums';
import { BottomSheet, OrDivider, ScreenWrapper, SocialLogin, TextLinkRow } from '@components/index';

const Login = () => {
    const navigation: any = useNavigation()
    const scrollViewRef = useRef<ScrollView>(null);

    useFocusEffect(
        React.useCallback(() => {
            scrollViewRef.current?.scrollTo({ y: 0, animated: false });
        }, [])
    );

    return (
        <View style={styles.container}>
            <ScreenWrapper />
            <BottomSheet height={500}>

                <View style={styles.sheetContainer}>
                    <ScrollView
                        ref={scrollViewRef}
                        style={styles.scrollContent}>
                        <Text style={styles.title}>
                            Login In Your Account
                        </Text>
                        <View style={styles.socialContainer}>
                            <SocialLogin faceBookTitle='Log in with Facebook' googleTitle='Log in with Google' />
                        </View>
                        <OrDivider />
                        <LoginForm />
                        <View style={styles.footerContainer}>
                            <Text style={styles.linkText} onPress={() => Alert.alert("Comming Soon")}>
                                Forgot Password?
                            </Text>
                            <TextLinkRow label="Don't have an account?" linkText="Create One" onPress={() => navigation.navigate(Screen.SignUp)} />
                            <View style={styles.termsContainer}>
                                <Text style={styles.termsText}>By signing up you agree to our</Text>
                                <Text style={styles.policyLink} onPress={() => Alert.alert("Comming Soon")}>
                                    Privacy Policy and Terms.
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    socialContainer: {
        marginTop: 20
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    sheetContainer: {
        paddingTop: 24,

    },
    title: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
    },
    forgot: {
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: '500',
        color: '#7A7A7A',
    },
    footerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    linkText: {
        textDecorationLine: 'underline',
        fontSize: 14,
        fontWeight: '500',
        color: '#7A7A7A',
        marginBottom: 8
    },
    authPromptContainer: {
        flexDirection: 'row',
        marginVertical: 10,
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
        paddingTop: 12,
        paddingBottom: 24
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

export default Login;