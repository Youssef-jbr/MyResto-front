<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Carte' }">Carte</b-nav-item>
        <b-nav-item :to="{ name: 'Commander' }">Commander</b-nav-item>
        <b-nav-item :to="{ name: 'TableauDeBord' }">Admin Panel</b-nav-item>
        <b-nav-item :to="{ name: 'Login' }">Authentification</b-nav-item>
        <b-nav-item :to="{ name: 'Deconnexion' }"> <b-icon icon="power" aria-hidden="true"></b-icon></b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>