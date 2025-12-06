import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, Image } from "react-native";

const Splash = () => {
    const animatedPosition = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        Animated.timing(animatedPosition, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
        }).start();
        
        Animated.timing(scale, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);
    
    const translateX = animatedPosition.interpolate({
        inputRange: [0, 1],
        outputRange: [230, -115]
    });
    
    const translateY = animatedPosition.interpolate({
        inputRange: [0, 1],
        outputRange: [230, 0]
    });

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Animated.View 
                    style={[
                        {
                            transform: [{ scale }]
                        }
                    ]}
                >
                    <Image style={{width: 240, height:240}} resizeMode="contain" source={{uri:'jemli_logo'}} />
                </Animated.View>
            </View>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },
    SplashBg: {
        position: 'absolute',
    },
    logoContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleImage: {
      backgroundColor: "#ffffff",
      width: "100%",
      height: "100%"
    }
   
});