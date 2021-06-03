<template>
  <div id="app">
    <header class="header">
      <div>
        <img
          class="header__logo"
          src="../src/assets/svg/logo-vingen-amber.svg"
          alt="Logo Vingen"
        />
      </div>
      <nav class="header__nav">
        <a href="#" class="nav__option">Acerca de nosotros</a>
        <a href="#" class="nav__option">Contáctanos</a>
        <a href="#" class="nav__option">Agregar Propiedad</a>
      </nav>
    </header>
    <VingenApp />
    <PropertyForm />
    <footer class="footer">
      <div class="footer__social-media">
        <h3 class="social-media__title">Síguenos en nuestras redes</h3>
        <div>
          <a href="#" class="social-media__item"
            ><i class="fab fa-facebook fa-3x"></i
          ></a>
          <a href="#" class="social-media__item"
            ><i class="fab fa-instagram fa-3x"></i
          ></a>
          <a href="#" class="social-media__item"
            ><i class="fab fa-whatsapp fa-3x"></i
          ></a>
        </div>
      </div>
      <div class="footer__legal-advice">
        <a href="#" class="legal-advice__item">Aviso de privacidad</a>
        <a href="#" class="legal-advice__item">Términos y condiciones</a>
      </div>
      <div class="footer__about">
        <h3 class="about__title">Powered by:</h3>
        <div>
          <img
            class="about__logo"
            src="../src/assets/svg/logo-vingen-white.svg"
            alt="Logo Vingen"
          />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import VingenApp from "./components/VingenApp.vue";
import PropertyForm from "./components/PropertyForm.vue";

export default {
  name: "App",
  components: {
    VingenApp,
    PropertyForm,
  },
};
</script>

<style lang="scss">
@import "./assets/css/scss/home.scss";
</style>
