import { ContentBlock, Pagination } from '@components/index'
import React from 'react'
import { Image, ImageBackground, StyleSheet, TextInput, View } from 'react-native'
import { Screen } from '../../utils/enums'

const Location = () => {
    return (
        <View style={{flex: 1}}>
            <Pagination screen={Screen.Favorite} />
            <ContentBlock description="Please confirm your location, we'll be able to match the best venues and offers for you." />
            <ImageBackground source={{ uri: 'location_bg' }} style={styles.image} resizeMode="contain">

          <View style={{backgroundColor: 'white'}}>
          <View style={styles.container}>
                <View style={styles.fieldContainer}>
                    <View style={{width: '8%'}}>
                    <Image style={{ height: 40, width: 40 }} resizeMode="contain" source={{ uri: 'search' }} />
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholderTextColor="black"
                        placeholder="Enter Your Location"
                    />

                    <View style={{width: '8%'}}>
                    <Image style={{ height: 20, width: 20 }} resizeMode="contain" source={{ uri: 'location' }} />
                    </View>
                </View>
            </View>
          </View>
            </ImageBackground>
        </View>
    )
}

export default Location

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
    },
    input: {
        fontSize: 17,
        fontWeight: '500',
        color: 'black',
        height: 65,
        width: '80%',
        marginHorizontal: 5,
    },
    fieldContainer: {
        height: 65,
        borderWidth: 1,
        borderColor: '#CCC3A7',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        padding: 10,
        backgroundColor: 'white'

    },
    image: {
        flex: 1,
        marginTop: 8
    }
})