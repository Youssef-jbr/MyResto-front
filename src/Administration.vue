<template>
  <b-container class="bv-example-row pb-5">
    <b-row class="mt-5 mb-5 text-dark">
      <h1 class="titles">Tableau de bord</h1>
      <b-col>
        <b-card
          header-tag="header"
          footer-tag="footer"
          v-for="command in commands"
          v-bind:key="command.id"
        >
          <template #header>
            <h6 class="mb-0">
              <strong>Récapitulatif de la commande n°{{ command.id }}</strong>
            </h6>
          </template>
          <b-card-text>
            <b-list-group flush>
              <b-list-group-item
                >Nom du client :
                <strong>{{ command.user }}</strong></b-list-group-item
              >
              <b-list-group-item
                >Type de livraison :
                {{ command.typeLivraison }}</b-list-group-item
              >
              <b-list-group-item>
                Produits commandés :
                <b-list-group
                  flush
                  v-for="menu in command.menus"
                  v-bind:key="menu.id"
                >
                  <b-list-group-item
                    >Nom du produit : <strong>{{ menu.nom }}</strong> <br />
                    Prix :
                    <strong>{{ menu.prix }}</strong></b-list-group-item
                  >
                  <b-list-group-item></b-list-group-item>
                </b-list-group>
                <b-list-group
                  flush
                  v-for="produit in command.produits"
                  v-bind:key="produit.id"
                >
                  <b-list-group-item
                    >Nom du produit :
                    <strong>{{ produit.designation }}</strong> <br />
                    Prix :
                    <strong>{{ produit.prix }}</strong></b-list-group-item
                  >
                  <b-list-group-item></b-list-group-item>
                </b-list-group>
              </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      commands: [],
    };
  },
  mounted() {
    this.getCommands();
  },
  methods: {
    getCommands() {
      axios.get("/commande/index").then((response) => {
        this.commands = response.data;
      });
    },
  },
};
</script>

<style>
</style>