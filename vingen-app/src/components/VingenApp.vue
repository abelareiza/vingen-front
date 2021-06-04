<template>
  <div class="main">
    <div class="property" v-for="propiedad in this.propiedades.datos" :key="propiedad.id">
      <div class="property__text">
        <p class="property__description">{{ propiedad.descripcion }}</p>
        <div>
          <p class="property__ciudad"><strong>Ciudad:</strong> {{ propiedad.ciudad.nombre }}</p>
          <p class="property__dir"><strong>Dirección:</strong> {{ propiedad.direccion }}</p>
        </div>
        <p class="property__type">
          <strong>Tipo de propiedad:</strong> {{ propiedad.tipoPropiedad.descripcion }}
        </p>
        <div>
          <p class="property__area"><strong>Área:</strong> {{ propiedad.area }} metros cuadrados</p>
          <p class="property__stratum"><strong>Estrato:</strong> {{ propiedad.estrato }}</p>
        </div>  
        <p class="property__price">$ {{ propiedad.precio }}</p>
      </div>
      <div class="property__image-container">
        <img class="property__image" :src="propiedad.imagenesPropiedad[0].urlImagen" alt="Apartamento"/>
        <!-- <img class="property__image" src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Apartamento"/> -->
      </div>
    </div>
  </div>
</template>

<script>
import PropiedadService from "../service/PropiedadService";

export default {
  name: "VingenApp",
  data() {
    return {
      propiedades: null,
    };
  },
  propiedadService: null,
  created() {
    this.propiedadService = new PropiedadService();
  },
  mounted() {
    this.propiedadService.getAll().then((data) => {
      this.propiedades = data.data;
      console.log(this.propiedadService);
    });
  },
};
</script>

<style lang="scss">
   @import "../assets/css/scss/properties.scss";
</style>