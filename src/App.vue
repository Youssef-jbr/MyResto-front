<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Arial;
  text-align: center;
  color: white;
  background: linear-gradient(#FF4B3E, #FFB20F)
}
</style>
