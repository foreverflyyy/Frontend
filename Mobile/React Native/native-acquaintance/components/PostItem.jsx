import styled from "styled-components/native";
import {Text} from "react-native";

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

export const PostItem = ({
     title = "title",
     text = "text",
     imageUrl = "https://habrastorage.org/getpro/habr/upload_files/c3b/2bd/448/c3b2bd448de7d78ac1855cf6102f83de.jpeg"
}) => {
    return (
        <Post>
            <PostImage
                source={{uri: imageUrl}}
            />
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <Text>{text}</Text>
            </PostDetails>
        </Post>
    )
}