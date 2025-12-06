import React, { useState } from "react";
import { 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  Modal, 
  SafeAreaView, 
  ActivityIndicator, 
  Dimensions 
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import { BottomSheet, ScreenWrapper } from "@components/index";
import Subtitle from "@components/SubTitle";
import Title from "@components/Title";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { Screen } from '../../utils/enums'

const { width } = Dimensions.get("window");
const GOOGLE_API_KEY = "AIzaSyDzec_qSJg8F7pngn2ZMA5DSe6PZu49ssw";

// Initialize Geocoder with your API key
Geocoder.init(GOOGLE_API_KEY, { language: "fr" });

// TypeScript Interfaces
interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface MapEvent {
  nativeEvent: {
    coordinate: Coordinate;
  };
}

const AddLocation: React.FC = () => {
  const navigation: any = useNavigation()
    
  // State for showing/hiding map
  const [showMap, setShowMap] = useState<boolean>(false);
  
  // State for selected location
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  
  // State for loading
  const [loading, setLoading] = useState<boolean>(false);
  
  // State for error
  const [showError, setShowError] = useState<boolean>(false);
  
  // Initial map region (Tunisia coordinates)
  const [mapRegion] = useState<Region>({
    latitude: 36.8065,
    longitude: 10.1815,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Function to get address from coordinates
  const getAddressFromCoordinates = async (latitude: number, longitude: number): Promise<void> => {
    try {
      setLoading(true);
      const response = await Geocoder.from(latitude, longitude);
      const address = response.results[0]?.formatted_address || "Unknown location";
      
      setSelectedLocation({
        address: address,
        latitude: latitude,
        longitude: longitude,
      });
    } catch (error) {
      console.error("Error getting address:", error);
      setSelectedLocation({
        address: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
        latitude: latitude,
        longitude: longitude,
      });
    } finally {
      setLoading(false);
    }
  };

  // When user clicks on location box - open map
  const handleOpenMap = (): void => {
    setShowError(false); // Reset error state when opening map
    setShowMap(true);
    // Get initial address
    getAddressFromCoordinates(mapRegion.latitude, mapRegion.longitude);
  };

  // When user clicks back button - close map
  const handleCloseMap = (): void => {
    setShowMap(false);
  };

  // When user taps on map - update location
  const handleMapPress = (event: MapEvent): void => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    getAddressFromCoordinates(latitude, longitude);
  };

  // When user drags marker - update location
  const handleMarkerDrag = (event: MapEvent): void => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    getAddressFromCoordinates(latitude, longitude);
  };

  // When user clicks "Sélectionner" button - save and close map
  const handleSelectLocation = (): void => {
    if (selectedLocation) {
      console.log("Location selected:", selectedLocation);
      navigation.navigate(Screen.BusinessLocation)
      setShowMap(false);
    }
  };

  // When user clicks "Continuer" button - go to next screen
  const handleContinue = (): void => {
    if (selectedLocation) {
      setShowError(false);
      console.log("Continue with location:", selectedLocation);
       navigation.navigate(Screen.BusinessLocation)
      // Navigate to next screen here
      // navigation.navigate('NextScreen', { location: selectedLocation });
    } else {
      // Show error state
      setShowError(true);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScreenWrapper bottomSheetHeight={600} />
      
      {/* Bottom Sheet with Location Picker */}
      <BottomSheet height={480}>
        <View style={styles.sheetContainer}>
          <Title color="#37516F">Ajoute ta localisation</Title>
          
          <Subtitle paddingTop={6}>
            Indique l'emplacement de ton commerce pour permettre aux clients de te trouver facilement.
          </Subtitle>

          {/* Location Picker Box */}
          <View style={styles.locationContainer}>
            <TouchableOpacity 
              style={[
                styles.locationBox,
                showError && !selectedLocation && styles.locationBoxError
              ]}
              onPress={handleOpenMap}
              activeOpacity={0.7}
            >
              <View style={styles.iconCircle}>
                <Text style={styles.iconText}>📍</Text>
              </View>
              <Text style={styles.locationTitle}>Localisation</Text>
              <Text style={styles.locationSubtitle}>
                Cliquez pour ajouter votre localisation dans la carte
              </Text>
              
              {/* Show selected address if available */}
              {selectedLocation && (
                <View style={styles.selectedAddressContainer}>
                  <Text style={styles.selectedAddressText} numberOfLines={2}>
                    ✓ {selectedLocation.address}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            
            {/* Error message */}
            {showError && !selectedLocation && (
              <Text style={styles.errorText}>
                Veuillez sélectionner une localisation
              </Text>
            )}
          </View>

          {/* Continue Button */}
          <Button
            title="Continuer"
            onPress={handleContinue}
            style={styles.button}
          />
        </View>
      </BottomSheet>

      {/* Map Modal - Shows when user clicks location box */}
      <Modal
        visible={showMap}
        animationType="slide"
        onRequestClose={handleCloseMap}
      >
        <SafeAreaView style={styles.mapContainer}>
          {/* Map Header */}
          <View style={styles.mapHeader}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleCloseMap}
              activeOpacity={0.7}
            >
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.mapHeaderTitle}>CENTRE EMETTEUR</Text>
            <View style={styles.emptySpace} />
          </View>

          {/* Google Map */}
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={mapRegion}
            onPress={handleMapPress}
            showsUserLocation={true}
            showsMyLocationButton={true}
          >
            {selectedLocation && (
              <Marker
                coordinate={{
                  latitude: selectedLocation.latitude,
                  longitude: selectedLocation.longitude,
                }}
                draggable
                onDragEnd={handleMarkerDrag}
                pinColor="#3B82F6"
              />
            )}
          </MapView>

          {/* Bottom Sheet on Map */}
          <View style={styles.mapBottomSheet}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#FF8C00" />
                <Text style={styles.loadingText}>Chargement de l'adresse...</Text>
              </View>
            ) : selectedLocation ? (
              <View style={styles.addressContainer}>
                <View style={styles.addressIconContainer}>
                  <Text style={styles.addressIcon}>📍</Text>
                </View>
                <View style={styles.addressTextContainer}>
                  <Text style={styles.addressLabel}>Emplacement sélectionné</Text>
                  <Text style={styles.addressText} numberOfLines={3}>
                    {selectedLocation.address}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* Select Button */}
            <TouchableOpacity
              style={[
                styles.selectButton,
                (!selectedLocation || loading) && styles.selectButtonDisabled
              ]}
              onPress={handleSelectLocation}
              disabled={!selectedLocation || loading}
              activeOpacity={0.8}
            >
              <Text style={styles.selectButtonText}>Sélectionner</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
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
    paddingHorizontal: 20,
  },
  locationContainer: {
    marginTop: 32,
    marginBottom: 38,
  },
  locationBox: {
    width: "100%",
    minHeight: 200,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    borderStyle: "dashed",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  locationBoxError: {
    borderColor: "#EF4444",
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  iconText: {
    fontSize: 24,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 8,
  },
  locationSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 20,
  },
  selectedAddressContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    width: "100%",
  },
  selectedAddressText: {
    fontSize: 13,
    color: "#059669",
    textAlign: "center",
    fontWeight: "600",
  },
  errorText: {
    fontSize: 13,
    color: "#EF4444",
    textAlign: "center",
    fontWeight: "500",
    marginTop: 8,
  },
  button: {
    marginTop: 0,
    backgroundColor: "#FF8C00",
  },
  
  // Map Modal Styles
  mapContainer: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  mapHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 24,
    color: "#374151",
    fontWeight: "600",
  },
  mapHeaderTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    letterSpacing: 1,
  },
  emptySpace: {
    width: 40,
  },
  map: {
    flex: 1,
    width: width,
  },
  mapBottomSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  loadingText: {
    marginLeft: 12,
    fontSize: 14,
    color: "#6B7280",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  addressIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  addressIcon: {
    fontSize: 20,
  },
  addressTextContainer: {
    flex: 1,
  },
  addressLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6B7280",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  addressText: {
    fontSize: 14,
    color: "#1F2937",
    fontWeight: "500",
    lineHeight: 20,
  },
  selectButton: {
    backgroundColor: "#FF8C00",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  selectButtonDisabled: {
    backgroundColor: "#D1D5DB",
  },
  selectButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default AddLocation;