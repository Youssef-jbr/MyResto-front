<template>
  <div class="bg-banner">
    <div class="container placement-banner">
      <h1 class="titre-myresto">My Resto</h1>
      <b-btn pill variant="danger" :to="{ name: 'Carte' }" class="text-button"
        >Voir la carte</b-btn
      ><br />
      <b-btn
        pill
        v-if="showAuth"
        variant="danger"
        :to="{ name: 'Auth' }"
        class="text-button mt-2"
        >Authentification</b-btn
      >
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js";
export default {
  data() {
    return {
      user: [],
      role: "",
      showAuth: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.user = store.getters["auth/authenticated"];
      if (this.user == true) {
        this.showAuth = false;
      } else if (this.user == false) {
        this.showAuth = true;
      }
      this.role = store.getters["auth/role"];
      console.log(this.role);
    }, 100);
  },
};
</script>

<style scoped>
.bg-banner {
  background: url("./assets/img/fond_restau.jpg") no-repeat fixed;
  width: 100%;
  height: 1000px;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
.placement-banner {
  top: 30%;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  position: absolute;
  text-align: center;
}
.text-button {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
}
.titre-myresto {
  margin-left: 0;
  margin-right: auto;
  text-align: center;
  font-size: 200px;
  font-family: Gomarice;
  color: #ff4b3e;
  text-shadow: rgb(0, 0, 0) 10px 0 15px;
}
@media screen and (max-width: 1100px) {
  .titre-myresto {
    margin-left: 0;
    margin-right: auto;
    text-align: center;
    font-size: 80px;
    font-family: Gomarice;
    color: #ff4b3e;
    text-shadow: rgb(0, 0, 0) 10px 0 15px;
  }
  .text-button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
}
</style>
