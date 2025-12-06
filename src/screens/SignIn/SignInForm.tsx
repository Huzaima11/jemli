import { StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../../utils/enums";
import { ErrorMessage, LinearGradientButton, PasswordField } from "@components/index";
import { Formik, FormikHelpers } from "formik";
import { SignInSchema } from "@validations/SignInSchema";
import { useMemo, useState } from "react";
import { RadioGroup } from "react-native-radio-buttons-group";


const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
interface Values {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

const SignInForm = () => {
    const [selectedId, setSelectedId] = useState<string>('male');
    const navigation: any = useNavigation()
    const onFormSubmit = async (values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
        const payload = {
            ...values,
            gender: selectedId
        }
        console.log("values", payload);
        navigation.navigate(Screen.PhoneNumber)
        resetForm()
        setSelectedId('male')
        setSubmitting(false)
    }

    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Male',
            value: 'male'
        },
        {
            id: '2',
            label: 'Female',
            value: 'female'
        }
    ]), []);

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={onFormSubmit}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View>
                    <View style={styles.nameContainer}>
                        <View style={styles.halfWidth}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="black"
                                placeholder="First Name"
                                onChangeText={handleChange('firstName')}
                                value={values.firstName}
                            />
                            {errors.firstName && touched.firstName &&
                                <ErrorMessage message={errors.firstName} />
                            }
                        </View>
                        <View style={styles.halfWidth}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="black"
                                placeholder="Last Name"
                                onChangeText={handleChange('lastName')}
                                value={values.lastName}
                            />
                            {errors.lastName && touched.lastName &&
                                <ErrorMessage message={errors.lastName} />
                            }
                        </View>

                    </View>
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
                    <PasswordField placeHolder="Create Password" onChangeText={handleChange('password')}
                        value={values.password} />
                    {errors.password && touched.password &&
                        <ErrorMessage message={errors.password} />
                    }
                    <PasswordField placeHolder="Confirm Password" onChangeText={handleChange('confirmPassword')}
                        value={values.confirmPassword} />
                    {errors.confirmPassword && touched.confirmPassword &&
                        <ErrorMessage message={errors.confirmPassword} />
                    }
                    <View style={styles.radioContainer}>
                        <Text style={styles.genderText}>Gender</Text>
                        <RadioGroup
                            radioButtons={radioButtons}
                            onPress={setSelectedId}
                            selectedId={selectedId}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <LinearGradientButton text="Create An Account" onPress={handleSubmit} />
                    </View>
                </View>
            )}
        </Formik>
    );
};

export default SignInForm;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 18
    },
    input: {
        height: 65,
        borderWidth: 1,
        padding: 20,
        borderRadius: 15,
        borderColor: '#CCC3A7',
        fontSize: 16,
        paddingLeft: 22,
        fontWeight: '500',
        color: 'black',
        marginBottom: 10,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfWidth: {
        width: '49%',
    },
    genderText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
        marginBottom: 3
    },
    radioContainer: {
        marginLeft: 5,
    }
});
