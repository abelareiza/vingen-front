import axios from "axios";

export default class DepartamentoService {

  url = "http://localhost:8080/api/v1/"

  getAllByDepartment(departamento) {
    return axios.get(this.url + "ciudades/consultar/" + departamento)
  }
}