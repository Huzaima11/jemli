import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { BottomSheet, ScreenWrapper } from "@components/index";
import Subtitle from "@components/SubTitle";
import Title from "@components/Title";
import Button from "@components/Button";
import InputField from "@components/InputField";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Screen } from '../../utils/enums'
import { useNavigation } from "@react-navigation/native";

const CELL_COUNT = 6;

// Phone Icon Component
const PhoneIcon = () => (
  <View style={styles.iconWrapper}>
    <Image 
      style={{ width: 22, height: 22 }} 
      resizeMode="contain" 
      source={{ uri: 'mobile' }} 
    />
  </View>
);

// Validation Schema
const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required("Le numéro de téléphone est requis")
    .matches(/^[0-9]+$/, "Doit contenir uniquement des chiffres")
    .min(10, "Le numéro doit contenir au moins 10 chiffres"),
});

const Welcome = () => {
  const navigation:any = useNavigation()

  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const ref = useBlurOnFulfill({ value: otpValue, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otpValue,
    setValue: setOtpValue,
  });

  const submit = (values: { phoneNumber: string }) => {
    console.log("Phone Number:", values.phoneNumber);
    setShowOTPModal(true);
  };

  const handleOTPSubmit = () => {
    console.log("OTP:", otpValue);
    setShowOTPModal(false);
    navigation.navigate(Screen.Partner)
    // Navigate to next screen or verify OTP
  };

  return (
    <View style={styles.mainContainer}>
      <ScreenWrapper bottomSheetHeight={600} />
      
      {/* Welcome Screen Bottom Sheet */}
      <BottomSheet height={420}>
        <View style={styles.sheetContainer}>
          <Title color="#37516F">Bienvenue chez Jemli !</Title>
          
          <Subtitle paddingTop={6}>
            Saisis ton numéro de téléphone pour accéder à ton compte.
          </Subtitle>

          <Formik
            initialValues={{ phoneNumber: "" }}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            {({ handleChange, handleBlur, values, errors, touched, handleSubmit }) => (
              <View style={styles.formContainer}>
                <InputField
                  placeholder="Numéro de telephone"
                  value={values.phoneNumber}
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  error={errors.phoneNumber}
                  touched={touched.phoneNumber}
                  keyboardType="phone-pad"
                  icon={<PhoneIcon />}
                  style={styles.inputField}
                />

                <Button
                  title="Continuer"
                  onPress={handleSubmit}
                  style={styles.button}
                />

                <View style={styles.footer}>
                  <Text style={styles.footerLink}>Terms et conditions</Text>
                  <Text style={styles.footerDot}>•</Text>
                  <Text style={styles.footerLink}>Changer la langue</Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </BottomSheet>

      {/* OTP Modal */}
      <Modal
        visible={showOTPModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowOTPModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalOverlay} />
          <View style={styles.modalContent}>
            <View style={styles.otpSheetContainer}>
          <Title align="center">Confirmation OTP</Title>

          <Subtitle paddingTop={22} fontSize={18}>
          Entrez le code envoyé à votre numéro de télephone
          </Subtitle>

              <View style={styles.otpContainer}>
                <CodeField
                  ref={ref}
                  {...props}
                  value={otpValue}
                  onChangeText={setOtpValue}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({ index, symbol, isFocused }) => (
                    <View
                      key={index}
                      style={[
                        styles.cell, 
                        isFocused && styles.focusCell,
                        index !== 0 && styles.cellMargin
                      ]}
                      onLayout={getCellOnLayoutHandler(index)}
                    >
                      <Text style={styles.cellText}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    </View>
                  )}
                />
              </View>

              <View style={styles.timerContainer}>
                <Text style={styles.timerText}>
                  Le code expire dans : <Text style={styles.timerBold}>30 s</Text>
                </Text>
                <TouchableOpacity>
                  <Text style={styles.resendText}>Renvoyer le code à nouveau</Text>
                </TouchableOpacity>
              </View>

              <Button
                title="Continuer"
                onPress={handleOTPSubmit}
                style={styles.button}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
  },
  sheetContainer: {
    paddingVertical: 42,
    paddingHorizontal: 4,
  },

  formContainer: {
    marginTop: 24,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#D1D5DB",
    marginRight: 12,
    paddingRight: 12,
  },
  inputField: {
    marginBottom: 24,
  },
  button: {
    marginTop: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
  },
  footerLink: {
    fontSize: 14,
    color: "#4B5563",
    fontWeight: "400",
  },
  footerDot: {
    fontSize: 16,
    color: "#4B5563",
    fontWeight: "bold",
    marginHorizontal: 24,
  },
  // OTP Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
  },
  otpSheetContainer: {
    paddingVertical: 20,
    paddingHorizontal: 4,
    paddingBottom: 30
  },
  otpContainer: {
    marginTop: 32,
    marginBottom: 24,
  },
  codeFieldRoot: {
    justifyContent: "space-between",
  },
  cell: {
    width: 52,
    height: 56,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F3F4F6",
  },
  cellMargin: {
    marginLeft: 12,
  },
  focusCell: {
    borderColor: "#FF7A00",
    borderWidth: 2,
  },
  cellText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1F2937",
    textAlign: "center",
  },
  timerContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  timerText: {
    fontSize: 15,
    color: "#37516F",
    marginBottom: 12,
  },
  timerBold: {
    fontWeight: "600",
    color: "#37516F",
  },
  resendText: {
    fontSize: 15,
    color: "#F9C838",
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

export default Welcome;