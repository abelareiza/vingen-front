import axios from "axios";

export default class ImageService {

  url = "http://localhost:8080/api/v1/"

  postImage(propertyImage) {
    return axios.post(this.url + "imagenes/cargar", propertyImage).then(function (response) {
      console.log(response);
    })
  }
}