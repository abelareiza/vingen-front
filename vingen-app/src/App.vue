<template>
  <div id="app">
    <header>Header</header>
    <VingenApp/>
    <footer>Footer</footer>
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
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
