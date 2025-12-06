import { ContentBlock, Pagination } from '@components/index'
import React, { useState } from 'react'
import {ScrollView, StyleSheet, View } from 'react-native'
import { Screen } from '../../utils/enums'
import FavoriteOption from './FavoriteOption/FavoriteOption'
import { favoriteSports } from '../../utils/lib'

const FavoriteSport = () => {
    const [favoriteList, setFavoriteList] = useState<any>([])

    const handleClick = (value: string) => {
        if (favoriteList.includes(value)) {
            const removeFavorite = favoriteList.filter((item: string) => item !== value)
            setFavoriteList(removeFavorite)
        } else {
            setFavoriteList([...favoriteList, value])
        }
    }

    return (
        <View style={styles.container}>
            <Pagination screen={Screen.Favorite} />
            <ContentBlock description="Please select your favorite sports that represents your interest or what you would like to see." />
            <ScrollView >
                <View style={styles.wrapper}>
                    {
                        favoriteSports.map((item, index) => {
                            const { fill, title, white } = item
                            const isSelected = favoriteList?.includes(title)
                            return (
                                <FavoriteOption 
                                fill={fill} 
                                isSelected={isSelected}
                                handleClick={handleClick}
                                title={title}
                                white={white}
                                key={index} />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default FavoriteSport

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 12
    }
})