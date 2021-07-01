<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-navbar-brand href="/accueil">
            <img
              src="../assets/img/myresto-logo.png"
              class="d-inline-block align-top"
              width="150"
              alt="Logo My Resto"
            />
          </b-navbar-brand>
          <b-nav-item
            class="text-dark mt-3"
            :to="{ name: 'Carte' }"
            exact
            exact-active-class="active"
            >Carte</b-nav-item
          >
          <b-nav-item
            class="text-dark mt-3"
            :to="{ name: 'Commande' }"
            exact
            exact-active-class="active"
            >Commande</b-nav-item
          >
          <b-nav-item
            class="text-dark mt-3"
            :to="{ name: 'Payement' }"
            exact
            exact-active-class="active"
            >Paiement</b-nav-item
          >
          <b-nav-item
            class="text-dark mt-3"
            :to="{ name: 'TableauDeBord' }"
            exact
            v-if="role == 'Gérant'"
            exact-active-class="active"
            >Administration</b-nav-item
          >
          <b-nav-item
            class="text-dark mt-3"
            @click="signout()"
            exact
            exact-active-class="active"
          >
            Déconnexion</b-nav-item
          >
          <b-nav-item
            class="text-dark mt-3"
            :to="{ name: 'Auth' }"
            exact
            exact-active-class="active"
            >Authentification</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
    };
  },
  mounted() {
    setTimeout(() => {
      this.role = store.getters["auth/role"];
      this.user = store.getters["auth/user"];
    }, 100);
  },
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),

    signout() {
      if (confirm("Étes vous sur de fermer votre session ?")) {
        this.logout();
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
</style>