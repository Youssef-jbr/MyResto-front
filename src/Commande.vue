<template>
  <div>
    <b-container class="bv-example-row pb-5">
      <b-row class="mt-5 mb-5 text-dark">
        <h1 class="titles">Commander</h1>
        <b-col :cols="colCustom">
          <b-row>
            <b-col>
              <select
                v-model="filtre"
                class="form-select"
                aria-label="Default select example"
              >
                <option value="all" selected>Tous</option>
                <option value="Menu">Menu</option>
                <option value="Entree">Entrée</option>
                <option value="Plat">Plat</option>
                <option value="Dessert">Dessert</option>
                <option value="Boisson">Boisson</option>
              </select>
            </b-col>
          </b-row>
          <b-row class="mt-5 text-dark">
            <b-card header-tag="header" footer-tag="footer" v-show="showMenu">
              <template #header>
                <h6 class="mb-0"><strong>LES MENUS</strong></h6>
              </template>
              <div v-for="menu in menus" v-bind:key="menu.id">
                <b-card-text
                  class="bg-dark text-white rounded mt-2 hover-card"
                  @click="selectItem(menu)"
                >
                  <b-row>
                    <b-col>
                      <h1 class="lead mt-4">
                        {{ menu.nom }}
                      </h1>
                      <p>
                        <strong>{{ menu.prix }} € euros</strong>
                      </p>
                      <div
                        v-for="produit in menu.produits"
                        v-bind:key="produit.id"
                      >
                        <p
                          class="container text-danger"
                          style="font-size: 12px"
                        >
                          <strong>{{ produit.designation }}</strong> <br />
                          {{ produit.prix }} € euros
                        </p>
                      </div>
                    </b-col>
                    <b-col>
                      <b-img
                        thumbnail
                        fluid
                        :src="menu.image"
                        width="150"
                        class="img-fluid rounded m-2"
                        alt=""
                      ></b-img>
                    </b-col>
                  </b-row>
                </b-card-text>
              </div>
            </b-card>
            <b-card header-tag="header" footer-tag="footer" v-show="showEntree">
              <template #header>
                <h6 class="mb-0"><strong>ENTRÉES</strong></h6>
              </template>
              <div v-for="entre in entres" v-bind:key="entre.id">
                <b-card-text
                  class="bg-dark text-white rounded mt-2 hover-card"
                  @click="selectItem(entre)"
                >
                  <b-row>
                    <b-col>
                      <h1 class="lead mt-4">
                        {{ entre.designation }}
                      </h1>
                      <p>
                        <strong>{{ entre.prix }} € euros</strong>
                      </p>
                    </b-col>
                    <b-col>
                      <b-img
                        thumbnail
                        fluid
                        :src="entre.image"
                        width="150"
                        class="img-fluid rounded m-2"
                      ></b-img>
                    </b-col>
                  </b-row>
                </b-card-text>
              </div>
            </b-card>
            <b-card header-tag="header" footer-tag="footer" v-show="showPlat">
              <template #header>
                <h6 class="mb-0"><strong>PLATS</strong></h6>
              </template>
              <div v-for="plat in plats" v-bind:key="plat.id">
                <b-card-text
                  class="bg-dark text-white rounded mt-2 hover-card"
                  @click="selectItem(plat)"
                >
                  <b-row>
                    <b-col>
                      <h1 class="lead mt-4">
                        {{ plat.designation }}
                      </h1>
                      <p>
                        <strong>{{ plat.prix }} € euros</strong>
                      </p>
                    </b-col>
                    <b-col>
                      <b-img
                        thumbnail
                        fluid
                        :src="plat.image"
                        width="150"
                        class="img-fluid rounded m-2"
                        alt=""
                      ></b-img>
                    </b-col>
                  </b-row>
                </b-card-text>
              </div>
            </b-card>
            <b-card
              header-tag="header"
              footer-tag="footer"
              v-show="showDessert"
            >
              <template #header>
                <h6 class="mb-0"><strong>DESSERTS</strong></h6>
              </template>
              <div v-for="dessert in desserts" v-bind:key="dessert.id">
                <b-card-text
                  class="bg-dark text-white rounded mt-2 hover-card"
                  @click="selectItem(dessert)"
                >
                  <b-row>
                    <b-col>
                      <h1 class="lead mt-4">
                        {{ dessert.designation }}
                      </h1>
                      <p>
                        <strong>{{ dessert.prix }} € euros</strong>
                      </p>
                    </b-col>
                    <b-col>
                      <b-img
                        thumbnail
                        fluid
                        :src="dessert.image"
                        width="150"
                        class="img-fluid rounded m-2"
                        alt=""
                      ></b-img>
                    </b-col>
                  </b-row>
                </b-card-text>
              </div>
            </b-card>
            <b-card
              header-tag="header"
              footer-tag="footer"
              v-show="showBoisson"
            >
              <template #header>
                <h6 class="mb-0"><strong>BOISSONS</strong></h6>
              </template>
              <div v-for="boisson in boissons" v-bind:key="boisson.id">
                <b-card-text
                  class="bg-dark text-white rounded mt-2 hover-card"
                  @click="selectItem(boisson)"
                >
                  <b-row>
                    <b-col>
                      <h1 class="lead mt-4">
                        {{ boisson.designation }}
                      </h1>
                      <p>
                        <strong>{{ boisson.prix }} € euros</strong>
                      </p>
                    </b-col>
                    <b-col>
                      <b-img
                        thumbnail
                        fluid
                        :src="boisson.image"
                        width="150"
                        class="img-fluid rounded m-2"
                        alt=""
                      ></b-img>
                    </b-col>
                  </b-row>
                </b-card-text>
              </div>
            </b-card>
          </b-row>
        </b-col>
        <b-col :cols="colCustom">
          <b-card title="Ma commande" header-tag="header" footer-tag="footer">
            <div
              class="mb-5"
              v-for="command in commands"
              v-bind:key="command.id"
            >
              <b-card-text class="bg-dark text-white rounded mt-2">
                <b-row>
                  <b-col>
                    <h1 class="lead mt-4">
                      {{ command.designation }}
                    </h1>
                    <p>
                      <strong>{{ command.prix }} € euros</strong>
                    </p>
                    <div
                      v-for="command in command.produits"
                      v-bind:key="command.id"
                    >
                      <p class="container text-danger" style="font-size: 12px">
                        <strong>{{ command.designation }}</strong> <br />
                        {{ command.prix }} € euros
                      </p>
                    </div>
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      :src="command.image"
                      width="150"
                      class="img-fluid rounded m-2"
                      alt=""
                    ></b-img>
                    <b-button
                      variant="danger"
                      class="m-2"
                      @click="deleteItem(command)"
                      ><b-icon variant="light" icon="trash-fill"></b-icon
                    ></b-button>
                  </b-col>
                </b-row>
              </b-card-text>
            </div>
            <hr />
            <div class="d-grid gap-2 col-6 mx-auto">
              <b-button variant="primary" @click="goToPaiement()"
                >Passer au paiement</b-button
              >
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import store from "@/store/index.js";
import axios from "axios";
export default {
  data() {
    return {
      produits: [],
      entres: [],
      plats: [],
      desserts: [],
      prixTotal: 0,
      showMenu: true,
      showDessert: true,
      showBoisson: true,
      showPlat: true,
      showEntree: true,
      menus: [],
      boissons: [],
      commands: [],
      colCustom: "",
      filtre: "",
      windowWidth: window.innerWidth,
    };
  },
  watch: {
    filtre(val) {
      switch (val) {
        case "Menu":
          this.showMenu = true;
          this.showDessert = false;
          this.showBoisson = false;
          this.showPlat = false;
          this.showEntree = false;
          break;
        case "Entree":
          this.showMenu = false;
          this.showDessert = false;
          this.showBoisson = false;
          this.showPlat = false;
          this.showEntree = true;
          break;
        case "Plat":
          this.showMenu = false;
          this.showDessert = false;
          this.showBoisson = false;
          this.showPlat = true;
          this.showEntree = false;
          break;
        case "Dessert":
          this.showMenu = false;
          this.showDessert = true;
          this.showBoisson = false;
          this.showPlat = false;
          this.showEntree = false;
          break;
        case "Boisson":
          this.showMenu = false;
          this.showDessert = false;
          this.showBoisson = true;
          this.showPlat = false;
          this.showEntree = false;
          break;
        case "all":
          this.showMenu = true;
          this.showDessert = true;
          this.showBoisson = true;
          this.showPlat = true;
          this.showEntree = true;
          break;
        default:
          break;
      }
    },
  },
  methods: {
    selectItem(item) {
      this.prixTotal = this.prixTotal + parseFloat(item.prix);
      this.commands.push(item);
    },
    deleteItem(item) {
      this.prixTotal = this.prixTotal - item.prix;
      this.commands.splice(item, 1);
    },
    getProduits() {
      axios.get("produit/index").then((response) => {
        this.produits = response.data;
        this.entres = this.produits.filter(
          (item) => item.typeProduit == "Entree"
        );
        this.plats = this.produits.filter((item) => item.typeProduit == "Plat");
        this.boissons = this.produits.filter(
          (item) => item.typeProduit == "Boisson"
        );
        this.desserts = this.produits.filter(
          (item) => item.typeProduit == "Dessert"
        );
      });
    },
    getMenus() {
      axios.get("menu/index").then((response) => {
        this.menus = response.data;
      });
    },
    goToPaiement() {
      this.$router.push({
        name: "Payement",
        params: { commands: this.commands, total: this.prixTotal },
      });
    },
  },
  mounted() {
    this.getProduits();
    this.getMenus();

    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 1000) {
      this.colCustom = 6;
    } else {
      this.colCustom = 12;
    }
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 1000) {
        this.colCustom = 6;
      } else {
        this.colCustom = 12;
      }
    };

    setTimeout(() => {
      this.role = store.getters["auth/role"];
      this.user = store.getters["auth/user"];
    }, 100);
  },
};
</script>

<style>
.titles {
  font-size: 50px;
  font-family: Gomarice;
  color: black;
}
.hover-card:hover {
  cursor: pointer;
  -webkit-box-shadow: 4px 3px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 3px 14px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 3px 14px 0px rgba(0, 0, 0, 0.75);
}
</style>