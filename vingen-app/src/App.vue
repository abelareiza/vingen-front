<template>
  <div id="app">
    <header>
      <div class="logo-container">
        <img src="../src/assets/svg/logo-vingen-yellow.svg" alt="Logo Vingen">
      </div>
      <nav class="options">
        <a href="#">Acerca de nosotros</a>
        <a href="#">Contáctanos</a>
        <a href="#">Agregar Propiedad <i class="far fa-plus-square"></i></a>
      </nav>
    </header>
    <VingenApp />
    <footer>
      <div class="social-media__container">
        <h3>Síguenos en nuestras redes</h3>
        <ul>
          <a href="#" class="social-media"
            ><i class="fab fa-facebook fa-3x"></i
          ></a>
          <a href="#" class="social-media"
            ><i class="fab fa-instagram fa-3x"></i
          ></a>
          <a href="#" class="social-media"
            ><i class="fab fa-whatsapp fa-3x"></i
          ></a>
        </ul>
      </div>
      <div class="legal-advice">
        <ul>
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Aviso de privacidad</a></li>
        </ul>
      </div>
      <div class="about">
        <h3>Powered by:</h3>
        <h2>Vingen</h2>
        <!-- <img src="" alt="Vingen Logo"> -->
      </div>
    </footer>
  </div>
</template>

<script>
import VingenApp from "./components/VingenApp.vue";

export default {
  name: "App",
  components: {
    VingenApp,
  },
};
</script>

<style lang="scss">
   @import "./assets/css/scss/home.scss";
</style>