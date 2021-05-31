<template>
  <div class="properties">
    <div
      class="property-card"
      v-for="propiedad in this.propiedades.datos"
      :key="propiedad.id"
    >
      <div class="property__image">
        <img
          src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Apartamento"
        />
      </div>

      <div class="property__text">
        <h4 class="property__description">{{ propiedad.descripcion }}</h4>
        <div class="row">
          <p class="property__ciudad">Ciudad: {{ propiedad.ciudad.nombre }}</p>
          <p class="property__dir">Dirección: {{ propiedad.direccion }}</p>
        </div>
        <p class="property__type">
          Tipo de propiedad: {{ propiedad.tipoPropiedad.descripcion }}
        </p>
        <div class="row">
          <p class="property__area">Área: {{ propiedad.area }} metros</p>
          <p class="property__stratum">Estrato: {{ propiedad.estrato }}</p>
        </div>
        <h4 class="property__price">Precio: ${{ propiedad.precio }}</h4>
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