import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TextLinkRowProps {
  label: string;
  linkText: string;
  onPress: () => void;
}

const TextLinkRow = ({ label, linkText, onPress }:TextLinkRowProps) => {
  return (
    <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>{linkText}</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
    row: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    color: 'black',
    fontSize: 15,
  },
  link: {
    color: '#DC7917',
    textDecorationLine: 'underline',
    fontSize: 15,
    paddingLeft: 9,
  },
});

export default TextLinkRow;
