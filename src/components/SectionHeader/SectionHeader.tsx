import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.desc}>{description}</Text>
  </View>
);

export default SectionHeader;

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: "black",
        paddingTop: 30,
        paddingBottom: 18
    },
    desc: {
        fontSize: 16,
        lineHeight: 22
    },
});
