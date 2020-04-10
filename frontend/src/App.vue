c<template>
  <div id="app">
    <Header></Header>
    <Content />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import Content from "./templates/Content";

export default {
  components: {
    Header,
    Footer,
    Content
  }
};
</script>

<style>
* {
  font-family: Calibri, sans-serif;
}

body {
  margin: 0;
  overflow-x: hidden;
  min-height: 100vh;
}

#header {
  grid-area: header-area;
}

#content {
  grid-area: content-area;
}

#footer {
  grid-area: footer-area;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 75px 1fr 100px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header-area"
    "content-area"
    "footer-area";
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
