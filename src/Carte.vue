<template>
  <b-container class="bv-example-row pb-5">
    <b-row class="mt-5 text-dark">
      <b-col :cols="colCustom">
        <h1 class="titles">Carte du restaurant</h1>
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"><strong>ENTRÉES</strong></h6>
          </template>
          <div v-for="entre in entres" v-bind:key="entre.id">
            <b-card-text class="bg-dark text-white rounded mt-2">
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
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"><strong>PLATS</strong></h6>
          </template>
          <div v-for="plat in plats" v-bind:key="plat.id">
            <b-card-text class="bg-dark text-white rounded mt-2">
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
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"><strong>DESSERTS</strong></h6>
          </template>
          <div v-for="dessert in desserts" v-bind:key="dessert.id">
            <b-card-text class="bg-dark text-white rounded mt-2">
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
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"><strong>BOISSONS</strong></h6>
          </template>
          <div v-for="boisson in boissons" v-bind:key="boisson.id">
            <b-card-text class="bg-dark text-white rounded mt-2">
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
      </b-col>
      <b-col :cols="colCustom">
        <h1 class="titles">Menus et Compositions</h1>

        <div v-for="menu in menus" v-bind:key="menu.id">
          <b-card header-tag="header" footer-tag="footer">
            <template #header>
              <h6 class="mb-0">
                <strong>MENU {{ menu.id }}</strong>
              </h6>
            </template>
            <b-card-text class="bg-dark text-white rounded mt-2">
              <b-row>
                <b-col>
                  <h1 class="container lead mt-4">
                    {{ menu.nom }}
                  </h1>
                  <p>
                    <strong>{{ menu.prix }} € euros</strong>
                  </p>
                  <div v-for="produit in menu.produits" v-bind:key="produit.id">
                    <p class="container text-danger" style="font-size: 12px">
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
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      produits: [],
      entres: [],
      user: [],
      role: [],
      plats: [],
      desserts: [],
      boissons: [],
      menus: [],
      colCustom: "",
      windowWidth: window.innerWidth,
    };
  },
  methods: {
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
      }).catch(() => {
        this.$swal("Erreur", "Une erreur est survenu lors de la récupération des produits", "error")
      });
    },
    getMenus() {
      axios.get("menu/index").then((response) => {
        this.menus = response.data;
      }).catch(() => {
        this.$swal("Erreur", "Une erreur est survenu lors de la récupération des menus", "error")
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
  },
};
</script>

<style scoped>
.titles {
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 50px;
  font-family: Gomarice;
  color: black;
}
</style>