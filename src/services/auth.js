import Vue from 'vue'
import VueResource from 'vue-resource'
import { VueAuthenticate } from 'vue-authenticate'
import config from '../config.json'

Vue.use(VueResource)

const vueAuthInstance = new VueAuthenticate(Vue.http, {
  baseUrl: 'http://localhost:3000',

  providers: {
    github: {
      clientId: config.auth.github.clientId,
      redirectUri: 'http://localhost:8080/auth/callback'
    },
    facebook: {
      clientId: config.auth.facebook.clientId,
      redirectUri: 'http://localhost:8080/auth/callback'
    },
    google: {
      clientId: config.auth.google.clientId,
      redirectUri: 'http://localhost:8080/auth/callback'
    },
    twitter: {
      clientId: config.auth.twitter.clientId,
      redirectUri: 'http://localhost:8080/auth/callback'
    }
  }
})

export default vueAuthInstance
