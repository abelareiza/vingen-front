<template>
  <div class="main">
    <div class="property" v-for="propiedad in this.propiedades.datos" :key="propiedad.id">
      <div>
        <img class="property__image" src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Apartamento"/>
      </div>
      <div class="property__text">
        <p class="property__description">{{ propiedad.descripcion }}</p>
        <div>
          <p class="property__ciudad">Ciudad: {{ propiedad.ciudad.nombre }}</p>
          <p class="property__dir">Dirección: {{ propiedad.direccion }}</p>
        </div>
        <p class="property__type">
          Tipo de propiedad: {{ propiedad.tipoPropiedad.descripcion }}
        </p>
        <div>
          <p class="property__area">Área: {{ propiedad.area }} metros</p>
          <p class="property__stratum">Estrato: {{ propiedad.estrato }}</p>
        </div>
        <p class="property__price">Precio: ${{ propiedad.precio }}</p>
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