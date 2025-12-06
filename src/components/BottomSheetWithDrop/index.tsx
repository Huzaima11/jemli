import React, { ReactNode } from 'react';
import { StyleSheet, Animated, Pressable, View } from 'react-native';

interface Props {
    children?: ReactNode
    height?: number
}

const BottomSheetWithDrop = ({ children, height }: Props) => {
    const slide = React.useRef(new Animated.Value(300)).current;
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    
    const slideUp = () => {
        Animated.parallel([
            Animated.timing(slide, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            })
        ]).start();
    };

    React.useEffect(() => {
        slideUp();
    }, []);

    return (
        <View style={styles.backdrop}>
            <Animated.View 
                style={[
                    styles.overlay,
                    { opacity: fadeAnim }
                ]}
            />
            <Pressable style={styles.container}>
                <Animated.View 
                    style={[
                        styles.bottomSheet, 
                        { 
                            height: height || 400, 
                            transform: [{ translateY: slide }] 
                        }
                    ]}
                >
                    {children}
                </Animated.View>
            </Pressable>
        </View>
    );
};

export default BottomSheetWithDrop;

const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    bottomSheet: {
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 15,
        overflow: 'hidden',
    }
});