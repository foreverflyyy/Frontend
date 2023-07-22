import styled from "styled-components/native";
import {useEffect, useState} from "react";
import axios from "axios";
import {Alert, FlatList, RefreshControl, TouchableOpacity} from "react-native";
import {PostItem} from "../components/PostItem";

const PostPage = styled.View`
  padding: 30px 15px;
`

export const PostsScreen = ({navigation}) => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = async () => {
        setIsLoading(true);
        await axios.get(`https://64bbadcc7b33a35a444691f4.mockapi.io/articles`)
            .then(({data}) => setPosts(data))
            .catch(err => {
                console.log(err);
                Alert.alert("Error get Posts", err.message)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("Post", {id: item.id, title: item.title})}
            >
                <PostItem
                    title={item?.title}
                    text={item?.text}
                    imageUrl={item?.imageUrl}
                />
            </TouchableOpacity>
        )
    };

    return (
        <PostPage>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
            />
        </PostPage>
    );
}