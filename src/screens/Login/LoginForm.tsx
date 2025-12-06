import { StyleSheet, TextInput, View, } from "react-native"
import { Formik, FormikHelpers } from "formik";
import { LoginSchema } from "@validations/loginSchema";
import { ErrorMessage, LinearGradientButton, PasswordField } from "@components/index";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../../utils/enums";


interface Values {
    email: string,
    password: string
}

const initialValues = {
    email: '',
    password: ''
};

const LoginForm = () => {
    const navigation: any = useNavigation()
    const onFormSubmit = async (values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
        console.log("values", values);
        navigation.navigate(Screen.Location)
        resetForm()
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={onFormSubmit}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="black"
                        placeholder="Enter Your Email Address"
                        onChangeText={handleChange('email')}
                        value={values.email}
                    />
                    {errors.email && touched.email &&
                        <ErrorMessage message={errors.email} />
                    }
                    <PasswordField
                        onChangeText={handleChange('password')}
                        value={values.password}
                        placeHolder="Enter Your Password"
                    />
                    {errors.password && touched.password &&
                        <ErrorMessage message={errors.password} />
                    }
                    <LinearGradientButton text="Log In" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    )
}

export default LoginForm;

const styles = StyleSheet.create({
    input: {
        height: 65,
        borderWidth: 1,
        padding: 20,
        borderRadius: 15,
        borderColor: '#CCC3A7',
        fontSize: 17,
        paddingLeft: 22,
        fontWeight: '500',
        color: 'black',
        marginBottom: 10,
    },
});