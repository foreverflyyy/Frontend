import React, {useState} from 'react'
import PostList from "../../components/posts/PostList";
import FormPost from "../../components/posts/FormPost";
import '../../styles/Posts.css'
import Modal from "../../UI/modal/Modal";
import {Button} from "../../UI/button/Button";

const Posts = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className='posts_page'>
            <div className='btn-create-post'>
                <Button onClick={() => setModalVisible(true)}>
                    Create new post
                </Button>
            </div>

            <Modal
                visible={modalVisible}
                setVisible={value => setModalVisible(value)}
            >
                <FormPost/>
            </Modal>

            <PostList/>
        </div>
    );
};

export default Posts;