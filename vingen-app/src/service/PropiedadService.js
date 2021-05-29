import axios from "axios";

export default class PropiedadService {

  url = "http://localhost:8080/api/v1/"

  getAll() {
    return axios.get(this.url + "propiedades/consultarPropiedadesAgencia/19")
  }
}