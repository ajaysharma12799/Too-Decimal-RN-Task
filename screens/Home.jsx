import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native';
import axios from "axios";
import Card from '../components/Card';

const Home = () => {
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`);
            setPhotos([...photos, ...response.data]);
        } catch (error) {
            console.log(error);
        }
    }

    const handleLoadMore = () => {
        setPage(page + 1);
        fetchPhotos();
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={photos}
                onEndReached={() => {
                    handleLoadMore();
                }}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                    return (
                        <Card item={item} index={index} />
                    )
                }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.title}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    }
});

export default Home