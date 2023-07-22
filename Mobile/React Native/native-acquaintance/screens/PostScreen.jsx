import styled from "styled-components/native";
import {Alert, Text} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";

const Post = styled.View`
  flex-direction: row;
  font-size: 30px;
`

const PostImage = styled.Image`
  height: 80px;
  width: 80px;
`

const PostDetails = styled.Text`
  flex-direction: column;
`

const PostTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

export const PostScreen = ({ route, navigation }) => {

    const [post, setPost] = useState(null);
    const {id, title} = route.params;

    useEffect(() => {
        navigation.setOptions({title});
        fetchPost();
    }, [])

    const fetchPost = async () => {
        await axios.get(`https://64bbadcc7b33a35a444691f4.mockapi.io/articles/${id}`)
            .then(({data}) => setPost(data))
            .catch(err => {
                console.log(err);
                Alert.alert("Error", err);
            });
    }

    return (
        <Post>
            <PostImage
                source={{uri: post?.imageUrl}}
            />
            <PostDetails>
                <PostTitle>{post?.title}</PostTitle>
                <Text>{post?.text}</Text>
            </PostDetails>
        </Post>
    )
}