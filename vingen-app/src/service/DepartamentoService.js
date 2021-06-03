import axios from "axios";

export default class DepartamentoService {

  url = "http://localhost:8080/api/v1/"

  getAll() {
    return axios.get(this.url + "departamentos/consultar/57")
  }
}