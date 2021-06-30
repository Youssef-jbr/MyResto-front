<template>
  <div id="app">
    <title>MyResto</title>
    <Accueil msg=""/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Accueil from './Accueil.vue'

export default {
  name: 'App',
  components: {
    Accueil
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
