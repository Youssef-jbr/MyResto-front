<template>
<div>
  <b-container class="bv-example-row">
    <b-row class="mt-5 mb-5 text-dark">
      <b-col>
        <b-row>
            <b-col>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </b-col>
            <b-col>
                <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
            </b-col>
        </b-row>
        <hr>
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"><strong>Carte du restaurant</strong></h6>
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
        <b-card title="Menu 1" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"><strong>Ma commande</strong></h6>
          </template>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
          <b-card-text>salut</b-card-text>
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

</style>