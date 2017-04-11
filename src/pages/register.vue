<template>
  <div class="register-page">
    <h1 class="title">Register new account</h1>

    <form @submit.prevent="register()" class="form form--register grid">

      <div class="row">
        <label for="login__name">Name</label>
        <input type="text" id="login__name" class="input--block" v-model="name" />
      </div><!-- /.row -->
      
      <div class="row">
        <label for="login__email">Email</label>
        <input type="text" id="login__email" class="input--block" v-model="email" />
      </div><!-- /.row -->

      <div class="row">
        <label for="login__password">Password</label>
        <input type="password" id="login__password" class="input--block" v-model="password" />
      </div><!-- /.row -->

      <div class="row">
        <button type="submit">Register</button>
      </div><!-- /.row -->

    </form>

    <div class="row social-buttons">
      <h4 class="title title--small">Register using OAuth provider</h4>

      <button type="button" @click="authenticate('github')" class="social--github">Github</button>
      <button type="button" @click="authenticate('facebook')" class="social--facebook">Facebook</button>
      <button type="button" @click="authenticate('google')" class="social--google">Google</button>
      <button type="button" @click="authenticate('twitter')" class="social--twitter">Twitter</button>
      <!-- <button type="button" @click="authenticate('instagram')" class="social--instagram">Instagram</button> -->
      <!-- <button type="button" @click="authenticate('bitbucket')" class="social--bitbucket">BitBucket</button> -->
    </div><!-- /.row social-buttons -->

    <div class="row">
      Already have account? <router-link :to="{ name: 'login' }">Login</router-link> here.
    </div><!-- /.row -->
    
  </div><!-- /.register-page -->
</template>

<script>
  export default {
    name: 'registerPage',

    data () {
      return {
        name: 'Davor Grubelic',
        email: 'davor.grubelic@gmail.com',
        password: 'davor123'
      }
    },

    methods: {
      register () {
        this.$store.dispatch('register', {
          user: {
            name: this.name,
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
  .register-page {

    .form--register {
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
