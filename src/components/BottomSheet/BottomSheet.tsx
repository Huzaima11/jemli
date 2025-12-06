import React, { ReactNode } from 'react';
import { StyleSheet, Animated, Pressable } from 'react-native';

interface Props {
    children?: ReactNode
    height?: number
}

const BottomSheet = ({ children, height }: Props) => {
    const slide = React.useRef(new Animated.Value(300)).current;
    const slideUp = () => {
        Animated.timing(slide, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
        }).start();
    };

    React.useEffect(() => {
        slideUp()
    })

    return (
        <Pressable style={styles.backdrop}>
            <Pressable style={{ width: '100%', height: height || 400 }}>
                <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slide }] }]}>
                    {children}
                </Animated.View>
            </Pressable>
        </Pressable>
    )
}


export default BottomSheet;


const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    bottomSheet: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 15,
        overflow: 'hidden',
    }
})