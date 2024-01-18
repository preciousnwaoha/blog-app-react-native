import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const blogCtx = useContext(BlogContext);

    const {blogPosts, addBlogPost} = blogCtx;

    return (
        <View>
            <Text>Index Screen</Text>

            <FlatList
                data={blogPosts}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>;
                }}
            />

            <Button title="Add Post" onPress={addBlogPost} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;
