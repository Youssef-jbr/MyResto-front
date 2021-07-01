<template>
  <div id="app">
    <Navbar v-if="currentRouteName != 'Accueil'"></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial;
  text-align: center;
  color: white;
  background: linear-gradient(#ff4b3e, #ffb20f);
}
@font-face {
    font-family: "Gomarice";
    src: url("../public/font/gomarice_hyouzi_display2.ttf");
}
</style>
