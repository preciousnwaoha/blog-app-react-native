import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route}) => {
    const {state} = useContext(Context);
    const {id} = route.params;

    const blogPost = state.find((blogPost) => blogPost.id === id);
    const {title, content} = blogPost;

    return (
        <View>
            {/* Your component content goes here */}
            <Text>{title}</Text>
            <Text>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default ShowScreen;
