<template>
  <div class="">
    <h1>Hello, please login to continue</h1>
    <LoginForm v-if="showLoginForm" />
    <RegisterForm v-if="!showLoginForm" />
    <button @click="showLoginForm = !showLoginForm">{{showLoginForm ? 'Click to Register' : 'Click to Login'}}</button>
  </div>
</template>

<script>

  import LoginForm from '@/components/Auth/login.vue'
  import RegisterForm from '@/components/Auth/register.vue'

  export default {
    name: 'Auth',
    beforeCreate() {
      if (this.$store.state.user._id) {
        this.$router.push({ name: 'home' })
      }
    },
    data() {
      return {
        showLoginForm: true

      }
    },
    computed: {},
    methods: {},
    components: {
      LoginForm,
      RegisterForm
    }
  }

</script>

<style>


</style>