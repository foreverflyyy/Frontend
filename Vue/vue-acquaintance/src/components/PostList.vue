<template>
  <div>
    <h2>Список пользователей:</h2>
    <post-item
        v-for="post in posts"
        :post="post"
        @remove="$emit('remove', post)"
        :key="post.id"
    ></post-item>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
    deletePost(idPost){
      console.log(idPost)

    }
  }
}
</script>

<style scoped>

</style>