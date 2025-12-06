import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { BottomSheet, ScreenWrapper } from "@components/index";
import Subtitle from "@components/SubTitle";
import Title from "@components/Title";
import Button from "@components/Button";
import InputField from "@components/InputField";
import { useNavigation } from "@react-navigation/native";
import { Screen } from '../../utils/enums'

// Validation Schema
const validationSchema = Yup.object().shape({
  businessName: Yup.string().required("Le nom de l'entreprise est requis"),
  fax: Yup.string(),
  managerName: Yup.string().required("Le nom du gérant est requis"),
  managerContact: Yup.string()
    .required("Le contact du gérant est requis")
    .matches(/^[0-9]+$/, "Doit contenir uniquement des chiffres"),
  category: Yup.string().required("La catégorie est requise"),
  bio: Yup.string().required("La bio est requise"),
});

const BusinessPartner = () => {
      const navigation:any = useNavigation()
    
  const submit = (values: any) => {
    console.log("Business Info:", values);
        navigation.navigate(Screen.Store)
    
    // Navigate to next screen
  };

  return (
    <View style={styles.mainContainer}>
      <ScreenWrapper bottomSheetHeight={900} />
      
      {/* Business Partner Bottom Sheet */}
      <BottomSheet height={680}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          <View style={styles.sheetContainer}>
            <Title color="#37516F">Deviens partenaire Jemli</Title>
            
            <Subtitle paddingTop={6}>
              Renseigne les informations de ton business pour rejoindre Jemli
            </Subtitle>

            <Formik
              initialValues={{
                businessName: "",
                fax: "",
                managerName: "",
                managerContact: "",
                category: "",
                bio: "",
              }}
              validationSchema={validationSchema}
              onSubmit={submit}
            >
              {({ handleChange, handleBlur, values, errors, touched, handleSubmit }) => (
                <View style={styles.formContainer}>
                  <InputField
                    placeholder="Nom de l'entreprise"
                    value={values.businessName}
                    onChangeText={handleChange("businessName")}
                    onBlur={handleBlur("businessName")}
                    error={errors.businessName}
                    touched={touched.businessName}
                    style={styles.inputField}
                  />

                  <InputField
                    placeholder="Fax"
                    value={values.fax}
                    onChangeText={handleChange("fax")}
                    onBlur={handleBlur("fax")}
                    error={errors.fax}
                    touched={touched.fax}
                    keyboardType="phone-pad"
                    style={styles.inputField}
                  />

                  <InputField
                    placeholder="Nom du gerant"
                    value={values.managerName}
                    onChangeText={handleChange("managerName")}
                    onBlur={handleBlur("managerName")}
                    error={errors.managerName}
                    touched={touched.managerName}
                    style={styles.inputField}
                  />

                  <InputField
                    placeholder="Contact du gerant"
                    value={values.managerContact}
                    onChangeText={handleChange("managerContact")}
                    onBlur={handleBlur("managerContact")}
                    error={errors.managerContact}
                    touched={touched.managerContact}
                    keyboardType="phone-pad"
                    style={styles.inputField}
                  />

                  <InputField
                    placeholder="Categorie"
                    value={values.category}
                    onChangeText={handleChange("category")}
                    onBlur={handleBlur("category")}
                    error={errors.category}
                    touched={touched.category}
                    style={styles.inputField}
                  />

                  <InputField
                    placeholder="Bio"
                    value={values.bio}
                    onChangeText={handleChange("bio")}
                    onBlur={handleBlur("bio")}
                    error={errors.bio}
                    touched={touched.bio}
                    multiline={true}
                    numberOfLines={6}
                    style={styles.bioField}
                  />

                  <Button
                    title="Continuer"
                    onPress={handleSubmit}
                    style={styles.button}
                  />
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    // paddingBottom: 30,
  },
  sheetContainer: {
    paddingVertical: 42,
    paddingHorizontal: 4,
  },
  formContainer: {
    marginTop: 24,
  },
  inputField: {
    marginBottom: 16,
  },
  bioField: {
    marginBottom: 24,
  },
  button: {
    marginTop: 8,
  },
});

export default BusinessPartner;