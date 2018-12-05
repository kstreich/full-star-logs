<template>
  <div class="logs row">
    <div class="col">
      <h2>All Star Logs {{logs.length}}</h2>
      <div class="row">
        <!-- this is where the loop will take place -->
        <log v-for="log in logs" class="col-12" :logData="log" />
      </div>
    </div>
  </div>
</template>
<script>
  import Log from '@/components/Logs/log.vue'

  export default {
    name: '',
    data() {
      return {

      }
    },
    computed: {
      logs() {
        return this.$store.state.logs
      }

    },
    methods: {},
    components: {
      Log
    }
  }

</script>

<style>


</style>