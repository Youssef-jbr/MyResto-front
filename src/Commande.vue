<template>
<div>
  <b-container class="bv-example-row pb-5">
    <b-row class="mt-5 mb-5 text-dark">
        <h1 class="titles">Commander</h1>
      <b-col>
        <b-row>
            <b-col>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Sélection de la carte</option>
                    <option value="1">Salade montmartre</option>
                    <option value="2">Saucissons secs</option>
                    <option value="3">Liquide 20g protéines</option>
                </select>
            </b-col>
            <b-col>
                <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
            </b-col>
        </b-row>
        <hr>
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"><strong>ENTRÉES</strong></h6>
          </template>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
        </b-card>
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"><strong>PLATS</strong></h6>
          </template>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
        </b-card>
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"><strong>DESSERTS</strong></h6>
          </template>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
        </b-card>
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"><strong>BOISSONS</strong></h6>
          </template>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card title="Entrées" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"><strong>Ma commande</strong></h6>
          </template>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
          </b-card>
          <b-card title="Plats" header-tag="header" footer-tag="footer">
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
          </b-card>
          <b-card title="Desserts" header-tag="header" footer-tag="footer">
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
          </b-card>
          <b-card title="Boissons" header-tag="header" footer-tag="footer">
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
            <b-card-text>salut&nbsp;<b-icon icon="trash-fill" aria-label="Help"></b-icon></b-card-text>
                <b-row>
                    <b-col cols="2"></b-col>
                    <b-col cols="4">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                            Livraison à domicile
                            </label>
                        </div>
                    </b-col>
                    <b-col cols="4">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                            <label class="form-check-label" for="flexRadioDefault2">
                            A emporter sur place
                            </label>
                        </div>
                    </b-col>
                    <b-col cols="2"></b-col>
                </b-row>
            <hr>
            <div class="d-grid gap-2 col-6 mx-auto">
            <input
              v-b-modal.modal-1
              type="submit"
              class="btn text-white"
              style="background-color: #972d07"
              value="Commander"
            />

            <b-modal 
              id="modal-1" 
              title="Récapitulatif de la commande n°"
              ok-title="Payer"
            >
                <p class="my-4">Nom :</p>
                <p class="my-4">Prénom :</p>
                <p class="my-4">Adresse de livraison :</p>
                <p class="my-4">Total :</p>
            </b-modal>
          </div>
          </b-card>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  
}
</script>

<style>
.titles {
  font-size: 50px;
  font-family: Gomarice;
  color: black;
}
</style>