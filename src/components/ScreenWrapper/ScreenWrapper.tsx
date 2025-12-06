import React, { useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Text,
  Image,
} from "react-native";

const ScreenWrapper = ({ bottomSheetHeight = 500 }) => {
  const { height } = Dimensions.get("window");

  // Calculate the yellow section height (screen height - bottom sheet height)
  const yellowSectionHeight = height - bottomSheetHeight;
  
  const centerPosition = height / 2 - 50;

  const logoPosition = useRef(new Animated.Value(centerPosition)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Calculate final position: center of yellow section
    const finalPosition = yellowSectionHeight / 2 - 24; // 24 is half of font size
    
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(logoPosition, {
        toValue: finalPosition,
        duration: 800,
        delay: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [yellowSectionHeight]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacity,
            transform: [{ translateY: logoPosition }],
          },
        ]}
      >
          <Image 
              style={{ width: 220, height: 220 }} 
              resizeMode="contain" 
              source={{ uri: 'jemli_white' }} 
            />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#F9C838",
    zIndex: -1,
  },
  logoContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    top: 0,
  },
  title: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
});

export default ScreenWrapper;