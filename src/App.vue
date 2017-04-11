<template>
  <div id="app">
    <header id="header">
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'index' }" class="nav-link">Home</router-link></li>

          <li>
            <router-link :to="{ name: 'docs' }" class="nav-link">Docs</router-link></li>
        
          <li>
            <a href="https://github.com/dgrubelic/vue-authenticate" class="nav-link" target="_blank">
              <img src="./assets/GitHub-Mark-32px.png" alt="GitHub repository" />GitHub</a></li>

          <li v-if="!isAuthenticated">
            <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link></li>

          <li v-if="!isAuthenticated">
            <router-link :to="{ name: 'register' }" class="nav-link button button--ghost button--small">Register</router-link></li>

          <li v-if="isAuthenticated">
            <router-link :to="{ name: 'profile' }" class="nav-link">My profile</router-link></li>

          <li v-if="isAuthenticated">
            <a href="#" @click.prevent="logout()" class="nav-link">Logout</a></li>
        </ul>  
      </nav>
    </header><!-- /#header -->

    <section id="page">
      <router-view></router-view>
    </section><!-- /#page -->
  </div>
</template>

<script>
export default {
  name: 'app',

  computed: {
    isAuthenticated () {
      return this.$store.state.auth.isAuthenticated
    }
  },

  methods: {
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('login')
      })
    }
  }
}
</script>

<style lang="scss">

html {
  font-size: 16px;
  line-height: 1.5;

  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
}

body {
  color: #34495e;
}

#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#header {
  height: 60px;
  max-width: 640px;
  min-width: 320px;
  margin: 0 auto;
  margin-bottom: 32px;

  @media (max-width: 640px) {
    margin: 0 8px;
  }

  nav {
    float: right;

    ul {
      li {
        display: inline-block;
        float: left;
        line-height: 60px;
        margin: 0 1rem;
      }
    }

    .nav-link {
      color: #34495e;
      padding-bottom: 5px;
      text-decoration: none;

      &:active,
      &:hover {
        border-bottom: 3px solid #42b983;
      }

      &.button {
        border-bottom: 1px solid #42b983;
        padding-bottom: 3px;

        &:active,
        &:hover {
          border-bottom: 1px solid #42b983;
        }
      }

      img {
        height: 16px;
        margin-right: 4px;
        position: relative;
        top: 2px;
        width: 16px;
      }
    }
  }
}

#page {
  background-color: #fff;
  max-width: 640px;
  min-width: 320px;
  margin: 0 auto;

  @media (max-width: 640px) {
    margin: 0 8px;
  }

  .title {
    margin-bottom: 2rem;
    text-align: center;

    &--small {
      margin-bottom: 1rem;
    }
  }
}

a {
  color: #4fc08d;
  text-decoration: none;

  &:active,
  &:hover {
    text-decoration: underline;
  }
}

button,
.button {
  padding: 0 2rem;
  border-radius: 2rem;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  line-height: 2rem;
  font-size: 1rem;

  &:active,
  &:hover {
    cursor: pointer;
  }

  &.button--ghost {
    background-color: transparent;
    border: 1px solid #4fc08d;
    color: #4fc08d;
  }

  &.button--small {
    padding: 0 1.75rem;
    border-radius: 1.75rem;
    line-height: 1.75rem;
  }

  &.social {
    &--github {
      background-color: #4078c0;
      border: 1px solid transparent;
      color: #fff;

      &.button--ghost {
        background-color: transparent;
        border: 1px solid #4078c0;
        color: #4078c0;
      }
    }

    &--facebook {
      background-color: #3b5998;
      border: 1px solid transparent;
      color: #fff;

      &.button--ghost {
        background-color: transparent;
        border: 1px solid #3b5998;
        color: #3b5998;
      }
    }

    &--google {
      background-color: #ea4335;
      border: 1px solid transparent;
      color: #fff;

      &.button--ghost {
        background-color: transparent;
        border: 1px solid #ea4335;
        color: #ea4335;
      }
    }

    &--twitter {
      background-color: #1da1f2;
      border: 1px solid transparent;
      color: #fff;

      &.button--ghost {
        background-color: transparent;
        border: 1px solid #1da1f2;
        color: #1da1f2;
      }
    }

    &--instagram {
      background-color: #e1306c;
      border: 1px solid transparent;
      color: #fff;

      &.button--ghost {
        background-color: transparent;
        border: 1px solid #e1306c;
        color: #e1306c;
      }
    }

    &--bitbucket {
      background-color: #205081;
      border: 1px solid transparent;
      color: #fff;

      &.button--ghost {
        background-color: transparent;
        border: 1px solid #205081;
        color: #205081;
      }
    }
  }
}

input,
.input {
  font-size: 1rem;
  height: 2rem;
  line-height: 2rem;
  box-sizing: border-box;
  border: 1px solid #e3e3e3;
  color: inherit;
  outline: none;
  border-radius: 2rem;
  transition: border-color 0.2s ease;
  vertical-align: middle !important;
  padding: 0 1rem;

  &:focus {
    border: 1px solid #4fc08d;
  }

  &.input--block {
    width: 100%;
  }
}

label,
.label {
  margin-left: 1rem;
}

.grid {
  .row {
    margin-bottom: 1rem;
  }
}

</style>
