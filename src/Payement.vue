<template>
  <div class="pb-5">
    <h1 class="titles mt-5">Paiement de votre Commande</h1>
    <div class="text-center mx-auto card-responsive bg-white p-2">
      <h2 class="text-dark mb-5">Recapitulatif de la commande :</h2>
      <div class="mb-5" v-for="command in commands" v-bind:key="command.id">
        <b-card-text class="bg-dark text-white rounded mt-2 m-3 p-3">
          <b-row>
            <b-col :cols="colCustom">
              <h1 class="lead mt-4">
                {{ command.designation }}
              </h1>
              <h1 class="lead mt-4">
                {{ command.nom }}
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
                width="100"
                class="img-fluid rounded m-2 p-1"
              ></b-img>
            </b-col>
          </b-row>
        </b-card-text>
      </div>
      <h1 class="text-dark">
        Total : <br />
        <strong
          ><span style="color: black">{{ total }} € euros</span></strong
        >
      </h1>
    </div>

    <hr />
    <h4 class="text-center mt-5 titles2">Information bancaire</h4>
    <form method="post" action="#" class="mt-4 rounded shadow p-4 forms m-5">
      <div class="container">
        <b-row>
          <b-col :cols="colCustom">
            Nom
            <b-form-input
              id="input-live"
              class="mb-2"
              v-model="nom"
              :state="nameState"
              aria-describedby="input-live-feedback"
              trim
            ></b-form-input>
            <p class="text-warning" v-show="showErrorNom">
              Le champ nom doit être rempli
            </p>
            Prénom
            <b-form-input
              id="input-live"
              class="mb-2"
              v-model="prenom"
              :state="prenomState"
              aria-describedby="input-live-help input-live-feedback"
              trim
            ></b-form-input>
            <p class="text-warning" v-show="showErrorPrenom">
              Le champ prénom doit être rempli
            </p>
            Numéro de la carte
            <b-form-input
              id="input-live"
              class="mb-2"
              v-model="cardnumber"
              :state="cardnumberSate"
              aria-describedby="input-live-help input-live-feedback"
              trim
            ></b-form-input>
            <p class="text-warning" v-show="showErrorCardNumber">
              Les numéros de la carte doivent être rempli avec des chiffres
            </p>
            Date d'expiration
            <b-form-input
              class="mb-2"
              id="input-live"
              v-model="expirationdate"
              :state="expirationdateState"
              aria-describedby="input-live-help input-live-feedback"
              trim
            ></b-form-input>
            <p class="text-warning" v-show="showErrorExpirationDate">
              La date d'éxpiration doit être rempli
            </p>
            Code de sécurite (CCV)
            <b-form-input
              class="mb-2"
              id="input-live"
              v-model="securitycode"
              :state="securitycodeState"
              aria-describedby="input-live-help input-live-feedback"
              trim
            ></b-form-input>
            <p class="text-warning" v-show="showErrorSecurityCode">
              Le code de sécurité se doit être rempli
            </p>
          </b-col>
          <b-col :cols="colCustom">
            <div class="mr-5">
              <img
                src="./assets/visa.png"
                alt=".."
                width="150"
                class="img-fluid"
              />
              <br />
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
          </b-col>
        </b-row>
      </div>
      <hr />
      <div class="text-center">
        <b-button
          v-show="verifForm()"
          class="btn text-white"
          style="background-color: #972d07; border-radius: 25px"
          @click="payer()"
          >Valider</b-button
        >
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
      nom: "",
      prenom: "",
      cardnumber: "",
      expirationdate: "",
      securitycode: "",
      showButtonSubmit: false,
      showErrorNom: false,
      showErrorPrenom: false,
      showErrorCardNumber: false,
      showErrorSecurityCode: false,
      showErrorExpirationDate: false,
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
    if (this.windowWidth > 1000) {
      this.colCustom = 6;
    } else {
      this.colCustom = 12;
    }
  },
  computed: {
    nameState() {
      return this.verifVariable("nom");
    },
    prenomState() {
      return this.verifVariable("prenom");
    },
    cardnumberSate() {
      return this.verifVariable("numCarte");
    },
    expirationdateState() {
      return this.verifVariable("dateExpiration");
    },
    securitycodeState() {
      return this.verifVariable("CCV");
    },
  },
  methods: {
    payer() {
      var arraySend = [];
      arraySend["commande"] = this.commands;
      axios.post("/commande/store", this.commands).then((response) => {
        console.log(response);
        this.$swal(response.data.message).then(() =>
          this.$router.push("/carte")
        );
      }).catch((err) => {
        console.log(err)
      });
    },
    verifVariable(variable) {
      switch (variable) {
        case "nom":
          if (this.nom.length > 0) {
            this.showErrorNom = false;
            return true;
          } else {
            this.showErrorNom = true;
            return false;
          }

        case "prenom":
          if (this.prenom.length > 0) {
            this.showErrorPrenom = false;
            return true;
          } else {
            this.showErrorPrenom = true;
            return false;
          }

        case "numCarte":
          if (this.cardnumber.length > 0 && !isNaN(this.cardnumber)) {
            this.showErrorCardNumber = false;
            return true;
          } else {
            this.showErrorCardNumber = true;
            return false;
          }

        case "dateExpiration":
          if (this.expirationdate.length > 0) {
            this.showErrorExpirationDate = false;
            return true;
          } else {
            this.showErrorExpirationDate = true;
            return false;
          }

        case "CCV":
          if (this.securitycode.length > 0 && !isNaN(this.securitycode)) {
            this.showErrorSecurityCode = false;
            return true;
          } else {
            this.showErrorSecurityCode = true;
            return false;
          }

        default:
          break;
      }
    },
    verifForm() {
      if (
        this.securitycode.length > 0 &&
        this.expirationdate.length > 0 &&
        this.prenom.length > 0 &&
        this.cardnumber.length > 0 &&
        this.nom.length
      ) {
        return true;
      } else {
        return false;
      }
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
.card-responsive {
  width: 400px;
}
@media screen and (max-width: 1100px) {
  .card-responsive {
    width: 300px;
  }
}
</style>