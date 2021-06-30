<template>
  <b-container class="bv-example-row">
    <b-row class="mt-5 mb-5 text-dark">
      <b-col>
        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Produits disponible</h6>
          </template>
          <b-card-text></b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Menu</h6>
          </template>
          <b-card-text></b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style>
</style>