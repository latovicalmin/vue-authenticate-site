import Vue from 'vue'
import VueAxios from 'vue-axios'
import { VueAuthenticate } from 'vue-authenticate'
import config from '../config.json'
import axios from 'axios'

Vue.use(VueAxios, axios)

const vueAuthInstance = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: 'http://localhost:3000',
  tokenName: 'access_token',
  requestDataKey: 'data',
  responseDataKey: 'data',

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
  },

  bindRequestInterceptor: function () {
    this.$http.interceptors.request.use((config) => {
      if (this.isAuthenticated()) {
        config.headers['Authorization'] = [
          this.options.tokenType, this.getToken()
        ].join(' ')
      } else {
        delete config.headers['Authorization']
      }
      return config
    })
  },

  bindResponseInterceptor: function () {
    this.$http.interceptors.response.use((response) => {
      console.log(response)
      this.setToken(response)
      return response
    })
  }
})

export default vueAuthInstance
