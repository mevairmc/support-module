<template>
  <div id="app">
    <nav class="nav">
      <img src="./assets/planner1.jpeg" alt="logo">
      <router-link to="/new">
        <v-icon name="paper-plane" scale="1" />
          New
      </router-link>
      <router-link to="/list">
        <v-icon name="inbox" scale="1" />
          List
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

export default {
  components: {
    'v-icon': Icon
  }
}
</script>

<style>
body {
  margin: 0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  background-color: #F7F7F7;
}

.nav a {
  color: #2c3e50;
  text-decoration-line: none;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 50px;
  padding-left: 25px;
}

.nav a:hover {
  background-color: rgba(47, 114, 226, 0.8);
  color: #f7f7f7
}

.nav a.router-link-exact-active {
  color: #f7f7f7;
  background-color: rgb(34, 29, 129);
}
</style>
