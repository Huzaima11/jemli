import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { Screen } from '../../utils/enums';
import { CircleImage, Pagination } from '@components/index';
import { Slider } from './Slider/Slider';

const { width } = Dimensions.get('window');

const sliderData = [
  {
    imageUri: 'overview_img1',
    imageWidth: 292,
    imageHeight: 293,
    title: 'Discover & Book',
    highlightedText: 'Sports Venues',
    subtitle: 'Find the perfect place to play',
  },
  {
    imageUri: 'overview_img2',
    imageWidth: 370,
    imageHeight: 334,
    title: 'Play with',
    highlightedText: 'Friends and Teams',
    subtitle: 'Build your dream team',
  },
  {
    imageUri: 'overview_img3',
    imageWidth: 343,
    imageHeight: 338,
    title: 'Connect with',
    highlightedText: 'Playmates',
    subtitle: 'Find your perfect match',
  },
];

const OverView = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const goToSlide = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  const handleNext = () => {
    if (currentIndex < sliderData.length - 1) {
      goToSlide(currentIndex + 1);
    }
  };

  const resetSlider = () => {
    setCurrentIndex(0);
    flatListRef.current?.scrollToIndex({ index: 0, animated: false });
  };

  const renderSlide = ({ item }: { item: typeof sliderData[0], index: number }) => {
    return (
      <Slider
        item={item}
        currentIndex={currentIndex}
        sliderData={sliderData}
      />
    );
  };

  return (
    <View style={styles.container}>
        <CircleImage/>
      <Pagination 
        screen={Screen.Location} 
        currentIndex={currentIndex} 
        resetSlider={resetSlider} 
        handleNext={handleNext} 
      />
      
      <View style={styles.slideContainer}>
        <FlatList
          data={sliderData}
          ref={flatListRef}
          renderItem={renderSlide}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          snapToInterval={width}
          decelerationRate="fast"
        />
      </View>
    </View>
  );
};

export default OverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
  },
});
