<template>
  <div class="login-page">
    <h1 class="title">Login to existing account</h1>

    <form @submit.prevent="login()" class="form form--login grid">
      
      <div class="row">
        <label for="login__email">Email</label>
        <input type="text" id="login__email" class="input--block" v-model="email" />
      </div><!-- /.row -->

      <div class="row">
        <label for="login__password">Password</label>
        <input type="password" id="login__password" class="input--block" v-model="password" />
      </div><!-- /.row -->

      <div class="row">
        <button type="submit">Login</button>
      </div><!-- /.row -->

    </form>

    <div class="row social-buttons">
      <h4 class="title title--small">Login using OAuth provider</h4>

      <button type="button" @click="authenticate('github')" class="social--github">Github</button>
      <button type="button" @click="authenticate('facebook')" class="social--facebook">Facebook</button>
      <button type="button" @click="authenticate('google')" class="social--google">Google</button>
      <button type="button" @click="authenticate('twitter')" class="social--twitter">Twitter</button>
      <!-- <button type="button" @click="authenticate('instagram')" class="social--instagram">Instagram</button> -->
      <!-- <button type="button" @click="authenticate('bitbucket')" class="social--bitbucket">BitBucket</button> -->
    </div><!-- /.row social-buttons -->

    <div class="row">
      Don't have account? <router-link :to="{ name: 'register' }">Register</router-link> one now!
    </div><!-- /.row -->
    
  </div><!-- /.login-page -->
</template>

<script>
  export default {
    name: 'loginPage',

    data () {
      return {
        email: 'davor.grubelic@gmail.com',
        password: 'davor123'
      }
    },

    methods: {
      login () {
        this.$store.dispatch('login', {
          user: {
            email: this.email,
            password: this.password
          }
        }).then(() => {
          this.$router.push('profile')
        })
      },

      authenticate (provider) {
        this.$store.dispatch('authenticate', { provider }).then(() => {
          this.$router.push('profile')
        })
      }
    }
  }
</script>

<style lang="scss">
  .login-page {

    .form--login {
      margin: 0 auto;
      max-width: 400px;
    }

    .social-buttons {
      margin: 3rem 0;
      text-align: center;

      button {
        margin: 0 .25rem;
        margin-bottom: .25rem;
      }
    }
  }
</style>
