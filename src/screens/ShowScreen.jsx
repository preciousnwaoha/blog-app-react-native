import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route}) => {
    const {state} = useContext(Context);
    const {id} = route.params;

    const blogPost = state.find((blogPost) => blogPost.id === id);
    const {title, content} = blogPost;

    return (
        <View style={{
            marginHorizontal: 10,
        }}>
            <View style={{height: 20,}} />
            {/* Your component content goes here */}
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
            
            }}>{title}</Text>
            <Text sx={{
                fontSize: 16,
            }}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default ShowScreen;
