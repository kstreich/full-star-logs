<template>
  <div class="home">
    <h1>Welcome to star-logs</h1>

    <logs></logs>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Logs from '@/components/Logs/logs.vue'

  export default {
    name: 'home',
    components: {
      Logs
    }
  }
</script>