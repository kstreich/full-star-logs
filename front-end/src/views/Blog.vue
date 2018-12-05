<template>
  <div class="">
    <div class="row">
      <div class="col">
        <h1>{{blog.title}}</h1>
        <p>{{blog.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Blog',
    data() {
      return {

      }
    },
    mounted() {
      if (!this.blog.title) {
        this.$router.push({ name: 'Home' })
      }
    },
    computed: {
      blog() {
        return this.$store.state.activeLog
      }
    },
    methods: {}
  }

</script>

<style>


</style>