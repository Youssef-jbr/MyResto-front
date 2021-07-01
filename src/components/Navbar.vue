<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <div class="mx-auto my-2 position-relative">
            <a class="mx-auto" href="/accueil">
              <img
                src="../assets/img/myresto-logo.png"
                width="150"
                alt="Logo My Resto"
                class="m-2"
              />
            </a>
          </div>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item p-4">
              <b-button variant="light" :to="{ name: 'Carte' }"
                >A LA CARTE</b-button
              >
              <b-icon icon="receipt" scale="2" variant="danger"></b-icon>
            </li>
            <li class="nav-item p-4">
              <b-button variant="light" :to="{ name: 'Commande' }"
                >JE COMMANDE !</b-button
              >
              <b-icon icon="cart" scale="2" variant="danger"></b-icon>
            </li>
            <li class="nav-item p-4" v-if="showAuth == true">
              <b-button variant="light" :to="{ name: 'Auth' }"
                >AUTHENTIFICATION</b-button
              >
              <b-icon
                icon="person-check-fill"
                scale="2"
                variant="danger"
              ></b-icon>
            </li>
             <li class="nav-item p-4" v-if="role == 'Gérant'">
              <b-button variant="light" :to="{ name: 'Administration' }"
                >ADMINISTRATION</b-button
              >
              <b-icon icon="tools" scale="2" variant="danger"></b-icon>
            </li>
            <li class="nav-item p-4" v-if="showAuth == false">
              <b-button variant="light" @click="signout()">DECONNEXION</b-button
              ><b-icon
                icon="arrow-return-right"
                scale="2"
                variant="danger"
              ></b-icon>
            </li>
           
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="d-flex align-items-center">
          <!-- Icon -->
          <a class="text-reset me-3" href="#"> </a>
        </div>
        <!-- Right elements -->
      </div>
      <!-- Container wrapper -->
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "@/store/index.js";
export default {
  store: store,
  data() {
    return {
      user: [],
      role: "",
      showAuth: true,
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
      console.log(this.role)
    }, 300);
  },
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),

    signout() {
      if (confirm("Étes vous sur de fermer votre session ?")) {
        this.logout();
        this.$router.push("/auth").then(() => setTimeout(() => { document.location.reload() }, 500));
      }
    },
  },
};
</script>

<style>
</style>