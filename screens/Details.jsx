import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const Details = ({ route }) => {
    const params = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.detail_title}>{params?.item?.title}</Text>
            <Image style={styles.detail_image} source={{uri: params?.item?.thumbnailUrl}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    detail_title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    detail_image: {
        marginVertical: 20,
        borderRadius: 5,
        width: 300,
        alignSelf: 'center',
        height: 300,
    }
})

export default Details