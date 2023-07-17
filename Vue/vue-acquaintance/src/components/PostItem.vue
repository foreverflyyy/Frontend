<template>
  <div class="post">
    <div>
      <div><strong>Title: </strong> {{post.title}}</div>
      <div><strong>Text: </strong> {{post.body}}</div>
    </div>
    <my-button
      @click="deletePost"
    >
      Delete
    </my-button>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    deletePost(){
      this.$emit('remove', this.post)
    }
  }
}
</script>

<style scoped>

.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #2c3e50;
}

</style>