<template>
  <div id="app">
    <header>
      <div class="logo-container">
        <a href="#">Vingen</a>
        <!-- <img src="" alt="Logo Vingen"> -->
      </div>
      <div class="search-container">
        <input type="text" placeholder="Buscar...">
      </div>
      <nav class="options">
        <a href="#">Acerca de nosotros</a>
        <a href="#">Contáctanos</a>
        <a href="#">Agregar Propiedad <i class="far fa-plus-square"></i></a>
      </nav>
    </header>
    <VingenApp/>
    <footer>
      <div class="social-media__container">
        <h3>Síguenos en nuestras redes</h3>
        <ul>
          <a href="#" class="social-media"><i class="fab fa-facebook-square fa-3x"></i></a>
          <a href="#" class="social-media"><i class="fab fa-instagram-square fa-3x"></i></a>
          <a href="#" class="social-media"><i class="fab fa-whatsapp-square fa-3x"></i></a>
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
import VingenApp from './components/VingenApp.vue'

export default {
  name: 'App',
  components: {
    VingenApp
  }
}
</script>

<style>
*, *::after, *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: papayawhip;
}

.logo-container a {
  text-decoration: none;
  color: #2c3e50;
}

.options a {
  text-decoration: none;
  color: #2c3e50;
  margin-right: 1rem;
}

footer {
  height: 200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: cornflowerblue;
}

.social-media {
  margin-right: 1rem;
  color: #2c3e50;
}

.social-media__container {
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.legal-advice {
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.legal-advice ul {
  list-style: none;
}

.legal-advice a {
  text-decoration: none;
  color: #2c3e50;
}

.about {
  grid-column: 3 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
