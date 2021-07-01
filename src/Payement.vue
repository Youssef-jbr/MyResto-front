<template>
  <div>
    <h1>Payement de votre Commande</h1>
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
      <h4 class="text-center mt-5">Credit card</h4>
      <form
        method="post"
        action="#"
        class="w-50 mx-auto mt-4 rounded shadow p-4 mb-5"
      >
        <div class="form-row d-flex justify-content-center align-items-center">
          <div class="col-7">
            Prenom
            <input
              name="nom"
              type="text"
              class="form-control"
              placeholder="prenom"
              requiredee
            />
          </div>
          <div class="col-5">
            Nom
            <input
              name="nom"
              type="text"
              class="form-control"
              placeholder="Nom"
              requiredee
            />
          </div>
        </div>
        <div class="form-row d-flex justify-content-center align-items-center">
          <div class="col-8">
            Numero de la carte
            <input
              name="cartenumber"
              type="text"
              class="form-control"
              placeholder="card number"
              requiredee
            />
          </div>
          <div class="col-4">
            Code securite
            <input
              name="cartenumber"
              type="text"
              class="form-control"
              placeholder="card securite"
              requiredee
            />
          </div>
        </div>

        <div class="form-row d-flex justify-content-center align-items-center">
          <div class="col">
            Mois d'expiration
            <select name="pets" id="pet-select" class="form-control">
              <option value="dog">Janvier</option>
              <option value="cat">Fevrier</option>
              <option value="hamster">Mard</option>
              <option value="dog">Avril</option>
              <option value="cat">Mai</option>
              <option value="hamster">Juin</option>
              <option value="parrot">Juillet</option>
              <option value="spider">Aout</option>
              <option value="goldfish">Septembre</option>
              <option value="goldfish">Octombre</option>
              <option value="goldfish">Novembre</option>
              <option value="goldfish">Decembre</option>
            </select>
          </div>
          <div class="col">
            Année d'expiration
            <input
              name="annee"
              type="number"
              class="form-control"
              placeholder="annee d'expriration"
              requiredee
            />
          </div>
        </div>
        <div class="form-row d-flex justify-content-center align-items-center">
          <div class="col">
            Adresse
            <input
              name="adresse"
              type="text"
              class="form-control"
              placeholder="Adresse"
              requiredee
            />
          </div>
        </div>

        <div class="form-row">
          <div class="col mt-3">
            <input
              type="submit"
              value="Confirmer"
              name="submit"
              class="btn btn-outline-success rounded"
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
input[type="text"],
input[type="number"],
select {
  background: rgba(158, 154, 154, 0.445);
}
</style>