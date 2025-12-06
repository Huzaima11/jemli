import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { BottomSheet, ScreenWrapper } from "@components/index";
import Subtitle from "@components/SubTitle";
import Title from "@components/Title";
import Button from "@components/Button";

const BusinessLocation = () => {

  const handleContinue = () => {
    // Navigate to next screen
  };

  return (
    <View style={styles.mainContainer}>
      <ScreenWrapper bottomSheetHeight={600} />
      
      {/* Add Location Bottom Sheet */}
      <BottomSheet height={460}>
        <View style={styles.sheetContainer}>
          <Title color="#37516F">Ajoute ta localisation</Title>
          
          <Subtitle paddingTop={6}>
            Indique l'emplacement de ton commerce pour permettre aux clients de te trouver facilement.
          </Subtitle>

          <View style={styles.mapContainer}>
            {/* Map Image */}
            <Image 
              style={styles.mapImage} 
              resizeMode="contain" 
              source={{ uri: 'location_map' }} 
            />
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
  mapContainer: {
    marginTop: 32,
    marginBottom: 32,
    width: "100%",
    height: 180,
    borderRadius: 16,
    overflow: "hidden",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#FF8C00",
  },
});

export default BusinessLocation;