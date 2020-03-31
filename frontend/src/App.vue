c<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Header></Header>
    <Content/>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './templates/Header'
import Footer from './templates/Footer'
import Content from './templates/Content'

export default {
  components: {
    Header,
    Footer,
    Content
  }
}
</script>

<style>
body{
  margin: 0;
  overflow: hidden;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
