import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { BottomSheet, ScreenWrapper } from "@components/index";
import Subtitle from "@components/SubTitle";
import Title from "@components/Title";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { Screen } from '../../utils/enums'

const PersonalizeStore = () => {
  const navigation:any = useNavigation()  
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const [coverPhoto, setCoverPhoto] = useState<string | null>(null);

  const handleLogoUpload = () => {
    // TODO: Implement image picker
    console.log("Upload logo");
  };

  const handleCoverUpload = () => {
    // TODO: Implement image picker
    console.log("Upload cover photo");
  };

  const handleContinue = () => {
    console.log("Logo:", logoImage);
    console.log("Cover:", coverPhoto);
   navigation.navigate(Screen.AddLocation)
    
    // Navigate to next screen
  };

  return (
    <View style={styles.mainContainer}>
      <ScreenWrapper bottomSheetHeight={600} />
      
      {/* Personalize Store Bottom Sheet */}
      <BottomSheet height={430}>
        <View style={styles.sheetContainer}>
          <Title color="#37516F">Personnalise ton store</Title>
          
          <Subtitle paddingTop={6}>
            Ajoute le logo et la photo de couverture de ton commerce
          </Subtitle>

          <View style={styles.uploadContainer}>
            {/* Logo Upload Box */}
            <TouchableOpacity 
              style={styles.uploadBox}
              onPress={handleLogoUpload}
            >
              <View style={styles.uploadContent}>
                <Image 
                  style={{ width: 30, height: 30, marginBottom: 6 }} 
                  resizeMode="contain" 
                  source={{ uri: 'photo_logo' }} 
                />
                <Text style={styles.uploadLabel}>Logo</Text>
              </View>
            </TouchableOpacity>

            {/* Cover Photo Upload Box */}
            <TouchableOpacity 
              style={styles.uploadBox}
              onPress={handleCoverUpload}
            >
              <View style={styles.uploadContent}>
                <Image 
                  style={{ width: 30, height: 30, marginBottom: 6 }} 
                  resizeMode="contain" 
                  source={{ uri: 'photo_logo' }} 
                />
                <Text style={styles.uploadLabel}>Photo couverture</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Button
            title="Continuer"
            onPress={handleContinue}
            style={styles.button}
          />
        </View>
      </BottomSheet>
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
  uploadContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 40,
  },
  uploadBox: {
    width: "47%",
    height: 160,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    borderStyle: "dashed",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadContent: {
    alignItems: "center",
    justifyContent: "center",
  },

  uploadLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#37516F",
    textAlign: "center",
  },
  button: {
    marginTop: 8,
    backgroundColor: "#FF8C00",
  },
});

export default PersonalizeStore;