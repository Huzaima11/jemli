import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';

interface SubtitleProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  align?: 'left' | 'center' | 'right';
  numberOfLines?: number;
  paddingTop?: number;
  fontSize?: number;
}

const Subtitle: React.FC<SubtitleProps> = ({
  children,
  style,
  color = '#666666',
  align = 'left',
  numberOfLines,
  paddingTop = 0,
  fontSize = 15,
}) => {
  
  const subtitleStyle: TextStyle = {
    color: color,
    textAlign: align,
    paddingTop: paddingTop,
    fontSize: fontSize,
  };

  return (
    <Text 
      style={[styles.subtitle, subtitleStyle, style]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    lineHeight: 22,
    fontWeight: '400',
    fontFamily: 'System',
  },
});

export default Subtitle;