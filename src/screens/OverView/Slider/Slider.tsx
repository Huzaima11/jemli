import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface SlideItemProps {
    item: {
        imageUri: string;
        imageWidth: number;
        imageHeight: number;
        title: string;
        highlightedText: string;
        subtitle: string;
    };
    currentIndex: number;
    sliderData: Array<{
        imageUri: string;
        imageWidth: number;
        imageHeight: number;
        title: string;
        highlightedText: string;
        subtitle: string;
    }>;
}

export const Slider = ({
    item,
    currentIndex,
    sliderData,
}: SlideItemProps) => {
    return (
        <View style={styles.slide}>
            <View style={styles.footerContainer}>
                <Image
                    style={{ width: item.imageWidth, height: item.imageHeight, marginBottom: 80 }}
                    resizeMode="contain"
                    source={{ uri: item.imageUri }}
                />

                <View style={styles.dotContainer}>
                    {sliderData.map((_, dotIndex) => (
                        <TouchableOpacity
                            key={dotIndex}
                            style={[
                                styles.dot,
                                currentIndex === dotIndex && styles.activeDot
                            ]}
                        />
                    ))}
                </View>

                <View style={styles.content}>
                    <Text style={styles.titleText}>
                        {item.title}{' '}
                        <Text style={styles.highlightedText}>{item.highlightedText}</Text>
                    </Text>
                    <Text style={styles.subtitleText}>{item.subtitle}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerContainer: {
        alignItems: 'center',
        marginTop: -60
    },
    content: {
        marginTop: 18,
        alignItems: 'center',
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#f2dda4',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#DC7917',
    },
    titleText: {
        fontSize: 30,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 60,
    },
    highlightedText: {
        color: '#DC7917',
    },
    subtitleText: {
        fontSize: 20,
        color: 'black',
        paddingTop: 6,
        textAlign: 'center',
    },
});