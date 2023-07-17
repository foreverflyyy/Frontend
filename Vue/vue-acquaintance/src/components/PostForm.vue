<template>
  <form class="form" @submit.prevent>
    <h2>Create Post</h2>
    <my-input
        v-model:value="post.title"
        type="text"
        placeholder="Enter title"
    />
    <my-input
        v-model:value="post.body"
        type="text"
        placeholder="Enter body"
    />
    <my-button
        class="btn"
        @click="createPost"
    >
      Create Post
    </my-button >
  </form>
</template>

<script>

export default {
  data(){
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: ''
      };
    }
  }
}
</script>

<style scoped>

.form {
  border-radius: 5px;
  border: 2px solid #2c3e50;
  padding: 8px;
  display: flex;
  flex-direction: column;
}

</style>