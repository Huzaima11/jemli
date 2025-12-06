import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface IProps {
  fill: string,
  white: string,
  title: string,
  isSelected: boolean,
  handleClick: (title :string) => void
}

const FavoriteOption = ({ fill, white, title, handleClick, isSelected }: IProps) => {
  return (
    <TouchableOpacity 
      style={[styles.container, isSelected && styles.active]} 
      onPress={() => handleClick(title)}
    >
      <Image 
        style={{ width: 60, height: 60 }} 
        resizeMode="contain" 
        source={{ uri: isSelected ? white : fill }} 
      />
      <Text style={[styles.title, isSelected && styles.activeColor]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default FavoriteOption

const styles = StyleSheet.create({

  container: {
    width: "30%",
    height: 110,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    margin: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black'
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    paddingTop: 6,
    textAlign: "center",
    color: 'black'
  },
  active: {
    backgroundColor: "#DC7917"
  },
  activeColor: {
    color: 'white'
  }
})