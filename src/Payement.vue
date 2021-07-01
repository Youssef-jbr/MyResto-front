<template>
  <div>
    <h1 class="titles">Paiement de votre Commande</h1>
    <div class="d-flex w-50 mx-auto justify-content-center align-items-center">
      <div
        class="
          mr-5
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <img src="./assets/visa.png" alt=".." class="img-fluid w-50" />
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

      <div
        class="
          d-flex
          flex-column
          justify-content-center
          align-items-center
          ml-5
        "
      >
        <img src="./assets/masterclass.png" alt=".." class="img-fluid w-50" />
        <label for="dewey">Master Card</label>
        <input
          type="radio"
          id="dewey"
          name="drone"
          value="dewey"
          style="font-size: 30px"
        />
      </div>

      <div
        class="
          d-flex
          flex-column
          justify-content-center
          align-items-center
          ml-5
        "
      >
        <img src="./assets/paypal.png" alt=".." class="img-fluid w-50" />
        <label for="dewey">PayPal</label>
        <input
          type="radio"
          id="dewey"
          name="drone"
          value="dewey"
          style="font-size: 30px"
        />
      </div>
    </div>
    <div>
      <h4 class="text-center mt-5 titles2">Credit card</h4>
      <form
        method="post"
        action="#"
        class="w-50 mx-auto mt-4 rounded shadow p-4 mb-5 forms"
      >
        <div class="form-row d-flex justify-content-center align-items-center">
          <div class="col-1"></div>
          <div class="col-4">
            Nom
            <input
              name="nom"
              type="text"
              class="form-control"
              requiredee
            />
          </div>
          <div class="col-1"></div>
          <div class="col-4">
            Prénom
            <input
              name="nom"
              type="text"
              class="form-control"
              requiredee
            />
          </div>
          <div class="col-1"></div>
        </div>
        <hr>
        <div class="form-row d-flex justify-content-center align-items-center">
          <div class="col-1"></div>
          <div class="col-4">
            Numéro de la carte
            <input
              name="cartenumber"
              type="text"
              class="form-control"
              requiredee
            />
          </div>
          <div class="col-1"></div>
          <div class="col-4">
            Code de sécurite
            <input
              name="cartenumber"
              type="text"
              class="form-control"
              requiredee
            />
          </div>
          <div class="col-1"></div>
        </div>
        <hr>
        <div class="form-row d-flex justify-content-center align-items-center">
          <div class="col-1"></div>
          <div class="col-4">
            Date d'expiration
            <input
              name="annee"
              type="text"
              class="form-control"
              requiredee
            />
          </div>
          <div class="col-1"></div>
          <div class="col-4">
            Adresse
            <input
              name="adresse"
              type="text"
              class="form-control"
              requiredee
            />
          </div>
          <div class="col-1"></div>
        </div>
        <hr>
        <div class="form-row">
          <div class="d-grid gap-2 col-3 mx-auto">
            <input
              type="submit"
              class="btn text-white"
              style="background-color: #972d07; border-radius: 25px"
              value="Confirmer"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input[type="radio"] {
  border: 0px;
  width: 100%;
  height: 1em;
}
input[type="text"] ,
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
.titles2{
  font-size: 40px;
  font-family: Gomarice;
  color: black;
}
.forms{
  background: rgba(40, 57, 101, 0.9);
}
</style>