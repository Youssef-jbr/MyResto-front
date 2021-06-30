<template>
    <div class="app">
        <div class="container">
            <h1>My Resto</h1>  
            <div class="superposition-simple">
                <img class="image-originale" src="./assets/img/fond_restau.png" />
                <div class="texte-original"><a href="#">Voir la carte.</a></div>
            </div>
            <br>
            <p><a href="#">S'inscrire</a> - <a href="#">Se Connecter</a></p>

            <p><a href="#">Voir la carte --></a></p>
        </div>

    

    </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.superposition-simple {
 position: relative;
 width: 100%;
}
.superposition-simple .image-originale {
 display: block;
 width: 100%;
 height: auto;
}
.superposition-simple .texte-original {
 color: #fff;
 font-size: 30px;
 line-height: 1.5em;
 text-shadow: 2px 2px 2px #000;
 text-align: bottom;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 100%;
}
</style>
