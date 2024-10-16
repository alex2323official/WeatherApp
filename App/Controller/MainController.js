import { ApiModel } from "../Model/ApiModel";

export class MainController {
  #inputCity = document.querySelector("#inputCity");
  #inputCityBtn = document.querySelector("#inputCityBtn");

  listenForCityInput() {
    this.#inputCityBtn.addEventListener("click", (event) => {
      event.preventDefault();

      let inputCityValue = this.#inputCity.value;

      // callWeatherApi() from Model Class
      if (inputCityValue !== "") {
        const apiModel = new ApiModel();
        apiModel.callWeatherApi(inputCityValue);
      }
    });
  }
}
