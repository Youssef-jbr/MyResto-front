<template>
  <div class="pb-5">
    <h1 class="titles mt-5">Paiement de votre Commande</h1>
    <div class="w-50 text-center mx-auto">
      <div class="mb-5" v-for="command in commands" v-bind:key="command.id">
        <b-card-text class="bg-dark text-white rounded mt-2 m-3 p-3">
          <b-row>
            <b-col :cols="colCustom">
              <h1 class="lead mt-4">
                {{ command.designation }}
              </h1>
              <p>
                <strong>{{ command.prix }} € euros</strong>
              </p>
              <div v-for="command in command.produits" v-bind:key="command.id">
                <p class="container text-danger" style="font-size: 12px">
                  <strong>{{ command.designation }}</strong> <br />
                  {{ command.prix }} € euros
                </p>
              </div>
            </b-col>
            <b-col :cols="colCustom">
              <b-img
                thumbnail
                fluid
                :src="command.image"
                width="150"
                class="img-fluid rounded m-2 p-1"
              ></b-img>
            </b-col>
          </b-row>
        </b-card-text>
      </div>
    </div>
    <h1 class="text-dark">
      Prix total :
      <strong
        ><span style="color: black">{{ total }} € euros</span></strong
      >
    </h1>
    <h4 class="text-center mt-5 titles2">Carte de credit</h4>
    <div
      class="mr-5 d-flex flex-column justify-content-center align-items-center"
    >
      <img src="./assets/visa.png" alt=".." width="150" class="img-fluid" />
      <label for="huey">Visa</label>
      <input
        type="radio"
        id="huey"
        name="drone"
        value="huey"
        style="font-size: 30px"
        checked
      />
    </div>
    <form method="post" action="#" class="mt-4 rounded shadow p-4 forms m-5">
      <div class="form-row d-flex justify-content-center align-items-center">
        <div class="col-4 m-3">
          Nom
          <input name="nom" type="text" class="form-control" required />
        </div>
        <div class="col-4 m-3">
          Prénom
          <input name="nom" type="text" class="form-control" required />
        </div>
      </div>
      <hr />
      <div class="form-row d-flex justify-content-center align-items-center">
        <div class="col-4 m-3">
          Numéro de la carte
          <input
            name="cartenumber"
            type="text"
            class="form-control"
            requiredee
          />
        </div>
        <div class="col-4 m-3">
          Date d'expiration
          <input name="annee" type="text" class="form-control" required />
        </div>
      </div>
      <hr />
      <div class="form-row d-flex justify-content-center align-items-center">
        <div class="col-4 m-3">
          Code de sécurite
          <input name="cartenumber" type="text" class="form-control" required />
        </div>
      </div>
      <hr />
      <div class="form-row">
        <div class="d-grid gap-2 col-3 mx-auto">
          <input
            class="btn text-white"
            style="background-color: #972d07; border-radius: 25px"
            value="Confirmer"
            @click="payer()"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["commands", "total"],
  data() {
    return {
      colCustom: "",
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 1000) {
        this.colCustom = 6;
      } else {
        this.colCustom = 12;
      }
    };
  },
  methods: {
    payer() {
      var arraySend = []
      arraySend['commande'] = this.commands
      axios.post("/commande/store", this.commands).then((response) => {
          console.log(response)
          this.$router.push('/carte')
      });
    },
  },
};
</script>

<style scoped>
input[type="radio"] {
  border: 0px;
  width: 100%;
  height: 1em;
}
input[type="text"],
input[type="date"],
select {
  color: white;
  border-radius: 25px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
}
.titles {
  font-size: 50px;
  font-family: Gomarice;
  color: black;
}
.titles2 {
  font-size: 40px;
  font-family: Gomarice;
  color: black;
}
.forms {
  background: rgba(40, 57, 101, 0.9);
}
.names {
  color: #aaa;
}
</style>