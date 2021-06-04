import axios from "axios";

export default class FormularioService {

  url = "http://localhost:8080/api/v1/"

  postForm(propertyResponse) {
    return axios.post(this.url + "propiedades/crear", propertyResponse).then(function (response) {
      alert(response.data.mensajes[0]);
      console.log(response);
    })
      .catch(error => {
        console.log(error.response);
        alert('❌ Error, ' + error.response.data.mensajes[0]);
      });
  }
}