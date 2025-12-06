import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';

interface TitleProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  align?: 'left' | 'center' | 'right';
  numberOfLines?: number;
}

const Title: React.FC<TitleProps> = ({
  children,
  style,
  color = '#000000',
  align = 'left',
  numberOfLines,
}) => {
  
  const titleStyle: TextStyle = {
    color: color,
    textAlign: align,
  };

  return (
    <Text 
      style={[styles.title, titleStyle, style]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'System',
  },
});

export default Title;