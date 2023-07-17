<template>
  <post-form
      @create="createPost"
  ></post-form>
  <list-posts
      :posts="posts"
      @remove="deletePost"
  ></list-posts>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import ListPosts from "@/components/PostList.vue";

export default {
  components: {
    PostForm, ListPosts
  },
  data(){
    return {
      posts: [
        {id: 1, title: 'Post about JS', body: 'lorem203'},
        {id: 2, title: 'Post about C#', body: 'lorem203'},
        {id: 3, title: 'Post about Python', body: 'lorem203'},
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    deletePost(deletedPost){
      this.posts = this.posts.filter(post => post.id !== deletedPost.id);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}
</style>
