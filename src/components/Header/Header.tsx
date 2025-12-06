import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProps {
  title?: string
}

const Header = ({ title }: IProps) => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} >
        <Image
          style={styles.arrow}
          resizeMode="contain"
          source={{uri:'left_arrow'}}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.arrow} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#ffff"
  },
  arrow: {
    height: 42,
    width: 44,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
});
