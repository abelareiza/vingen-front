<template>
  <div class="form">
    <form class="form__container" @submit.prevent='handleSubmit'>
      <div class="form__field">
        <h2 class="form__title">Registrar propiedad</h2>
      </div>

      <div class="form__field">
        <label class="form__label">Código de la agencia *</label>
        <input class="form__input" type="number" v-model="codigoAgencia" required>
      </div>

      <div class="form__field">
        <label class="form__label">Tipo de propiedad *</label>
        <select class="form__select" v-model="codigoTipoPropiedad" required>
          <option value="1">Apartamento</option>
          <option value="2">Casa</option>
          <option value="3">Finca</option>
          <option value="4">Lote</option>
          <option value="5">Local Comercial</option>
        </select>
      </div>

      <div class="form__field">
        <label class="form__label">Estrato *</label>
        <select class="form__select" v-model="estrato" required>
          <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </div>

      <div class="form__field">
        <label class="form__label">Descripción *</label>
        <textarea class="form__input" v-model="descripcion" required></textarea>
      </div>

      <div class="form__location">
        <div class="form__field">
          <label class="form__label">Departamento *</label>
          <select class="form__select" v-model="departamento" required>
            <option v-for="departamento in this.departamentos.datos" :key="departamento.id" :value="departamento.codigo">{{ departamento.nombre }}</option>
          </select>
        </div>

        <div class="form__field">
          <label class="form__label">Ciudad *</label>
          <select class="form__select" v-model="ciudad" required>
            <option v-for="ciudad in this.ciudades.datos" :key="ciudad.id" :value="ciudad.codigo">{{ ciudad.nombre }}</option>
          </select>
        </div>
      </div>

      <div class="form__field">
        <label class="form__label">Dirección *</label>
        <input class="form__input" type="text" v-model="direccion" required>
      </div>

      <div class="form__field">
        <label class="form__label">Precio *</label>
        <input class="form__input" type="number" v-model="precio" required>
      </div>

      <div class="form__field">
        <label class="form__label">Área (en metros cuadrados)*</label>
        <input class="form__input" type="number" v-model="area" required>
      </div>

      <div class="form__field">
        <label class="form__label">Imagen (link) *</label>
        <input class="form__input" type="text" v-model="urlImagen" required>
      </div>

      <p class="caption">Los campos marcados con un asterisco (*) son obligatorios.</p>

      <div class="submit">
        <button class="form__submit-button">Crear propiedad</button>
      </div>
    </form>
  </div>
</template>

<script>
import DepartamentoService from "../service/DepartamentoService";
import CiudadService from "../service/CiudadService";
import FormularioService from "../service/FormularioService";

export default {
  name: "PropertyForm",
  data() {
    return {
      codigoTipoPropiedad: '',
      codigoAgencia: '',
      descripcion: '',
      estrato: '',
      ciudad: '',
      departamento: '05',
      direccion: '',
      precio: '',
      area: '',
      urlImagen: '',

      departamentos: null,
      ciudades: null
    };
  },
  methods: {
    handleSubmit() {
      let propertyResponse = {
        "tipoPropiedad": { 
          "codigoTipoPropiedad": this.codigoTipoPropiedad
        },
        "codigoAgencia": this.codigoAgencia,
        "descripcion": this.descripcion,
        "estrato": this.estrato,
        "ciudad": {
            "codigo": this.ciudad,
            "departamento": {
                "codigo": this.departamento
            }
        },
        "direccion": this.direccion,
        "precio": this.precio,
        "area": this.area,
        "imagenesPropiedad": [
          {
            "urlImagen": this.urlImagen
          }
        ]
      };
      this.formularioService.postForm(propertyResponse);
    }
  },
  departamentoService: null,
  ciudadService: null,
  created() {
    this.departamentoService = new DepartamentoService();
    this.ciudadService = new CiudadService();
    this.formularioService = new FormularioService();
  },
  beforeUpdate() {
    this.ciudadService.getAllByDepartment(this.departamento).then((data) => {
      this.ciudades = data.data;
    });
  },
  mounted() {
    this.departamentoService.getAll().then((data) => {
      this.departamentos = data.data;
    });
  },
};
</script>

<style lang="scss">
   @import "../assets/css/scss/property_form.scss";
</style>