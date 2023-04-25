import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const dimension = Dimensions.get('screen');

const Card = ({ item, index }) => {
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('Details', {
            item: item,
        })
    }

    return (
        <TouchableOpacity onPress={handleNavigate}>
            <View style={styles.card}>
                <Image source={{ uri: item?.thumbnailUrl }} style={styles.card_image} />
                <Text style={styles.card_title}>{item?.title} - {index + 1}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: 'black',
        borderWidth: 5,
        marginVertical: 5,
        borderRadius: 5,
        padding: 5,
    },
    card_image: {
        borderRadius: 10,
        alignSelf: 'center',
        width: dimension.width / 1.1,
        height: 200,
    },
    card_title: {
        padding: 5,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default Card