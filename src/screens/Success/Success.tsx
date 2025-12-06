import { CircleImage, LinearGradientButton } from '@components/index'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Screen } from '../../utils/enums'

const Success = () => {
  const navigation: any = useNavigation()

  return (

    <View style={styles.container}>
      <CircleImage />
      <View style={styles.content}>
        <Image style={{width: 242, height: 250}} resizeMode="contain" source={{uri:'success'}} />
        <Text style={styles.title}>Horay!</Text>
        <Text style={styles.subTitle}>You've been successfully {"\n"} registered with us.</Text>
        <View style={styles.buttonContainer}>
          <LinearGradientButton text="Let's Begin" onPress={() => navigation.navigate(Screen.OverView)} />
        </View>
      </View>
    </View>
  )
}

export default Success

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 32,
    color: '#DC7917',
    fontWeight: '600'
  },
  subTitle: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    lineHeight: 30,
    paddingTop: 8
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: '100%',
    marginTop: 22
  }
})