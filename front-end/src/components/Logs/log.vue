<template>
  <div class="log">
    <h4 @click="setActiveLog">{{logData.title}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'log',
    props: ['logData'],
    data() {
      return {
        title
      }
    },
    computed: {},
    methods: {
      setActiveLog() {
        this.$store.dispatch('setActiveLog', this.logData)
      }
    }
  }

</script>

<style>


</style>